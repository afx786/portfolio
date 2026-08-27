// Builds lib/knowledge/kb.json from the canonical markdown knowledge base.
// Usage: node scripts/build-knowledge.mjs  (also wired to prebuild/predev)
import { existsSync, readFileSync, readdirSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const kbDir = join(root, "..", "knowledge");
const outFile = join(root, "lib", "knowledge", "kb.json");

const typeOf = (file) => file.replace(/\.md$/, "");

const STOP = new Set(
  "a an and the of to in for on with as at from by is are was were be been has have had this that these those it its or but not no so if then than too very just also more most such can will would could should may might shall about into over under between through during within without against among across before after above below up down out off own same such other new your their our its his her who whom whose which what when where why how all any both each few he she we they i you me my".split(
    " "
  )
);

function keywordsOf(text) {
  const words = text
    .toLowerCase()
    .replace(/[`*_#\[\]()|/\\:;,.!?'"’-]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 3 && !STOP.has(w));
  const counts = new Map();
  for (const w of words) counts.set(w, (counts.get(w) || 0) + 1);
  const freq = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 24)
    .map(([w]) => w);
  const headingWords = text
    .split(/\r?\n/)
    .filter((l) => /^\s*#{1,3}\s/.test(l))
    .join(" ")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 3 && !STOP.has(w));
  const out = new Set(freq);
  for (const w of headingWords) out.add(w);
  return [...out];
}

function stripFrontmatter(text) {
  return text.replace(/^\uFEFF/, "");
}

const EXCLUDE_SECTION =
  /removed|disallowed|not included|do not use|not to claim|guidance|placeholders|^dropped|^not deployed|rationale/i;

function chunkMarkdown(text, type) {
  const lines = text.split(/\r?\n/);
  const chunks = [];
  let currentHeading = null;
  let buf = [];
  let title = "";

  const flush = () => {
    const content = buf.join("\n").trim();
    if (content) {
      if (currentHeading && EXCLUDE_SECTION.test(currentHeading)) {
        // Meta/rule sections document removed or fabricated content — never surface as answers.
        buf = [];
        currentHeading = null;
        return;
      }
      chunks.push({
        id: `${type}:${chunks.length + 1}`,
        type,
        section: currentHeading || "overview",
        content,
        keywords: [...new Set([type, ...keywordsOf(title + "\n" + content)])],
      });
    }
  };

  for (const line of lines) {
    const h = line.match(/^##\s+(.+)$/);
    if (h) {
      flush();
      currentHeading = h[1].trim();
      title = currentHeading;
      buf = [];
    } else if (line.match(/^#\s+/)) {
      // file title — capture but skip
      title = line.replace(/^#\s+/, "").trim();
    } else {
      buf.push(line);
    }
  }
  flush();
  return chunks;
}

function main() {
  if (!existsSync(kbDir)) {
    console.warn(
      `knowledge dir not found (${kbDir}). Skipping kb.json regeneration; using committed kb.json.`
    );
    return;
  }
  const files = readdirSync(kbDir).filter((f) => f.endsWith(".md"));
  const all = [];
  for (const f of files) {
    const text = stripFrontmatter(readFileSync(join(kbDir, f), "utf8"));
    const chunks = chunkMarkdown(text, typeOf(f));
    all.push(...chunks);
  }

  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(
    outFile,
    JSON.stringify(
      {
        version: 1,
        generated: new Date().toISOString().split("T")[0],
        sources: files.map(typeOf),
        chunks: all,
      },
      null,
      2
    )
  );
  console.log(`kb.json written: ${all.length} chunks from ${files.length} files -> ${outFile}`);
}

main();