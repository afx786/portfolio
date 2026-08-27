import { NextResponse } from "next/server";
import kb from "@/lib/knowledge/kb.json";

export const runtime = "nodejs";

interface Chunk {
  id: string;
  type: string;
  section: string;
  content: string;
  keywords: string[];
}

const KB = kb as { version: number; chunks: Chunk[] };

const FALLBACK = "I don't have verified information about that.";

const TYPE_BOOSTS: Record<string, string[]> = {
  projects: ["project", "built", "build", "pyramids", "ondc", "bap", "barter", "metalks", "mcp", "github", "app"],
  experience: ["experience", "intern", "internship", "job", "work", "openidea", "fnf", "coliving", "role"],
  research: ["research", "paper", "jics", "journal", "stress", "publication", "published"],
  leadership: ["leadership", "president", "club", "mentor", "lead", "gdsc", "aws"],
  education: ["education", "university", "b.tech", "degree", "gautam", "college"],
  skills: ["skills", "skill", "stack", "technology", "python", "react", "sql", "tools"],
  profile: ["profile", "who", "about", "background", "position", "identity"],
  roles: ["role", "fit", "suitable", "product", "manager", "engineer", "scientist", "analyst"],
};

const ML_ROLE_TERMS = ["ml engineer", "ai engineer", "ml role", "ai role", "model", "fine-tun", "llm", "mcp", "machine learning engineer"];
const DATA_ROLE_TERMS = ["data scientist", "data analyst", "data role", "analyst role", "analytics", "data science role", "statistics"];
const PM_ROLE_TERMS = ["product manager", "pm role", "product role", "product management"];

const STOP = new Set(
  "a an and the of to in for on with as at from by is are was were be been has have had this that these those it its or but not no so if then than too very just also more most such can will would could should may might shall about into over under between through during within without against across among before after above below up down out off own same such other new your their our its his her who whom whose which what when where why how all any both each few he she they we i you me my what's who's".split(
    " "
  )
);

// Name/self-references appear in almost every chunk — low signal, exclude from overlap.
const LOW_SIGNAL = new Set(["aaqib", "abdullah", "his", "him", "he", "she", "they", "their", "my", "i", "you", "we", "our"]);

function tokens(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP.has(w) && !LOW_SIGNAL.has(w));
}

function clean(t: string): string {
  return t
    .replace(/\s*\[[^\]]*\]/g, "")
    .replace(/\*\*/g, "")
    .replace(/`/g, "")
    .replace(/\*/g, "")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/[\[\]]/g, "")
    .replace(/^#+\s*/gm, "")
    .replace(/^>\s*/gm, "")
    .replace(/^[-–—]{2,}\s*$/gm, "")
    .replace(/^[-*]\s*/gm, "• ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function detectResumeIntent(q: string): string | null {
  const s = q.toLowerCase();
  if (ML_ROLE_TERMS.some((t) => s.includes(t))) return "AI / ML ENGINEER";
  if (DATA_ROLE_TERMS.some((t) => s.includes(t))) return "DATA SCIENTIST / ANALYST";
  if (PM_ROLE_TERMS.some((t) => s.includes(t))) return "PRODUCT MANAGER";
  if (s.includes("resume") || s.includes("cv")) return "general";
  return null;
}

function detectType(q: string): string | null {
  const s = q.toLowerCase();
  if (/(who is|tell me about|about aaqib|about him|profile|overview|background|introduce)/.test(s)) {
    return "profile";
  }
  for (const [t, terms] of Object.entries(TYPE_BOOSTS)) {
    if (terms.some((term) => s.includes(term))) return t;
  }
  return null;
}

function retrieve(q: string, forcedType?: string | null): { hits: { chunk: Chunk; score: number }[] } {
  const tq = tokens(q);
  const type = forcedType ?? detectType(q);

  const scored: { chunk: Chunk; score: number }[] = [];
  for (const chunk of KB.chunks) {
    const kw = new Set(chunk.keywords);
    let overlap = 0;
    for (const t of tq) if (kw.has(t)) overlap += 1;
    let score = overlap;
    if (overlap > 0 && type && chunk.type === type) score += 2;
    if (overlap > 0 && type && chunk.type !== type) score -= 0.5;
    if (score > 0) scored.push({ chunk, score });
  }
  scored.sort((a, b) => b.score - a.score);
  const hits = scored.filter((h) => h.score >= 2).slice(0, 6);
  return { hits };
}

function summarizeChunk(chunk: Chunk, maxBullets = 4): string {
  const lines = clean(chunk.content)
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .filter((l) => !/^#{1,3}\s/.test(l));
  const body = lines.filter(
    (l) =>
      !l.startsWith("• ") &&
      !l.startsWith("|") &&
      !/^(version|status|sources|source tags|generated):/i.test(l)
  );
  const bullets = lines.filter((l) => l.startsWith("• "));
  const out: string[] = [];
  if (body.length) out.push(body[0]);
  out.push(...bullets.slice(0, maxBullets));
  return out.join("\n").trim();
}

function composeDeterministic(q: string): {
  answer: string;
  references: Chunk[];
  source: "retrieval" | "fallback";
} {
  const resumeIntent = detectResumeIntent(q);

  if (resumeIntent === "general") {
    return {
      answer:
        "Aaqib has three role-specific resumes: AI / ML ENGINEER, DATA SCIENTIST / ANALYST, and PRODUCT MANAGER. Pick the one that matches the role you're hiring for — or ask which one fits a specific role.",
      references: [],
      source: "retrieval",
    };
  }

  if (resumeIntent) {
    const { hits } = retrieve(q, "roles");
    return {
      answer: `For this kind of role, the recommended resume is the ${resumeIntent} version. Aaqib maintains three role-specific resumes (AI / ML Engineer, Data Scientist / Analyst, and Product Manager) so the document matches the exact role you're hiring for.`,
      references: hits.slice(0, 2).map((h) => h.chunk),
      source: "retrieval",
    };
  }

  const { hits } = retrieve(q);
  if (hits.length === 0) {
    return { answer: FALLBACK, references: [], source: "fallback" };
  }

  const top = hits.slice(0, 3);
  const parts = top.map((h) => summarizeChunk(h.chunk));
  const answer = parts.join("\n\n");
  return {
    answer: answer.length > 1600 ? answer.slice(0, 1600).trim() + "…" : answer,
    references: top.map((h) => h.chunk),
    source: "retrieval",
  };
}

async function composeWithLLM(q: string): Promise<{
  answer: string;
  references: Chunk[];
  source: "llm" | "retrieval" | "fallback";
} | null> {
  const key = process.env.GEMINI_API_KEY;
  if (!key) return null;

  const resumeIntent = detectResumeIntent(q);
  const { hits } =
    resumeIntent && resumeIntent !== "general" ? retrieve(q, "roles") : retrieve(q);
  const context = hits
    .map(
      (h, i) =>
        `[${i + 1}] (source: ${h.chunk.type} — ${h.chunk.section})\n${clean(h.chunk.content)}`
    )
    .join("\n\n---\n\n");

  const system = [
    "You are 'Ask Aaqib AI', the assistant on Aaqib Abdullah's portfolio. You answer ONLY from the provided verified context.",
    "Rules:",
    "- NEVER invent facts, numbers, links, or credentials. If the context does not contain the answer, reply with exactly: \"" + FALLBACK + "\"",
    "- Keep answers concise (4-8 sentences), referencing Aaqib in third person where natural.",
    "- Do not mention that you use retrieved context.",
    "- If the user asks which resume fits a role, and a resume intent is detected, recommend the matching resume from this list (AI / ML ENGINEER, DATA SCIENTIST / ANALYST, PRODUCT MANAGER).",
    "- Reference sources in your answer text only when natural (e.g., 'the JICS paper').",
    resumeIntent ? `Resume intent detected for this question: "${resumeIntent}". Recommend that resume explicitly if asked.` : "",
  ].join("\n");

  const user = context ? `VERIFIED CONTEXT:\n${context}\n\nQUESTION: ${q}` : `QUESTION: ${q}`;

  try {
    const res = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + key,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: system }] },
          contents: [{ role: "user", parts: [{ text: user }] }],
          generationConfig: { temperature: 0.2, maxOutputTokens: 600 },
        }),
        signal: AbortSignal.timeout(12000),
      }
    );

    if (!res.ok) return null;
    const data = await res.json();
    const text: string | undefined = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) return null;

    const references = hits.slice(0, 3).map((h) => h.chunk);
    return { answer: text.trim(), references, source: "llm" };
  } catch {
    return null;
  }
}

export async function POST(req: Request) {
  let body: { question?: string } | null;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const question = (body.question ?? "").toString().trim();
  if (!question) {
    return NextResponse.json({ error: "A question is required." }, { status: 400 });
  }
  if (question.length > 500) {
    return NextResponse.json({ error: "Question too long (max 500 characters)." }, { status: 400 });
  }

  const llm = await composeWithLLM(question);
  const result = llm ?? composeDeterministic(question);

  const references = result.references.map((c) => ({
    id: c.id,
    type: c.type,
    section: c.section,
  }));

  return NextResponse.json({
    answer: result.answer,
    references,
    source: result.source,
  });
}