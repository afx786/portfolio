export type TrackId = "unified" | "ai" | "data" | "product";

export interface TrackConfig {
  id: TrackId;
  label: string;
  navLabel: string;
  heroStatement: string;
  heroSubline: string;
  featuredWork: string[];
  experienceEmphasis: "openidea" | "fnf" | "both" | "equal";
  researchEmphasis: boolean;
  leadershipEmphasis: boolean;
  resumeLabel: string;
  resumeIndex: number;
  metaTitle: string;
  metaDescription: string;
  aiPlaceholder: string;
  aiSuggestions: string[];
}

export const tracks: Record<TrackId, TrackConfig> = {
  unified: {
    id: "unified",
    label: "ALL WORK",
    navLabel: "Unified",
    heroStatement: "I build intelligent systems, products, and ideas.",
    heroSubline:
      "Primarily a data/AI person — I use Data Science, machine learning, and rigorous analysis to turn data into systems and products that work, built on a strong software engineering foundation and clear product thinking.",
    featuredWork: ["01", "02", "03", "04", "05", "06", "07"],
    experienceEmphasis: "equal",
    researchEmphasis: false,
    leadershipEmphasis: false,
    resumeLabel: "RESUME",
    resumeIndex: -1,
    metaTitle: "AAQIB ABDULLAH — Data / AI / Product",
    metaDescription:
      "Aaqib Abdullah — data/AI engineer and product builder. I build intelligent systems, products, and ideas. Final-year B.Tech CSE (Data Science) at Gautam Buddha University.",
    aiPlaceholder: "Ask me anything about my work, projects, research or experience.",
    aiSuggestions: [
      "What has Aaqib built?",
      "Tell me about the ONDC BAP.",
      "What is the JICS paper about?",
      "What roles is he suited for?",
    ],
  },
  ai: {
    id: "ai",
    label: "AI / ML",
    navLabel: "AI / ML",
    heroStatement: "I build intelligent systems.",
    heroSubline:
      "Building AI-enabled products with strong software engineering foundations — LLM fine-tuning, MCP tooling, AI infrastructure, and applied machine learning.",
    featuredWork: ["03", "04", "02", "01", "07"],
    experienceEmphasis: "openidea",
    researchEmphasis: false,
    leadershipEmphasis: false,
    resumeLabel: "AI / ML ENGINEER RESUME",
    resumeIndex: 0,
    metaTitle: "AAQIB ABDULLAH — AI / ML Engineer",
    metaDescription:
      "Aaqib Abdullah — AI/ML Engineer. Building intelligent systems, LLM tooling, MCP infrastructure, and AI products with strong software engineering foundations.",
    aiPlaceholder: "Ask me about Aaqib's AI/ML work.",
    aiSuggestions: [
      "What has Aaqib built with LLMs?",
      "Tell me about MeTalks.",
      "What is mcp-openidea-search?",
      "How was the ONDC BAP built?",
    ],
  },
  data: {
    id: "data",
    label: "DATA SCIENCE",
    navLabel: "Data Science",
    heroStatement: "I turn data into decisions and intelligent systems.",
    heroSubline:
      "Data Science is a primary professional identity — extracting insights from data, statistical analysis, machine learning research, and translating analysis into useful decisions and products.",
    featuredWork: ["02", "05", "06", "03", "01"],
    experienceEmphasis: "fnf",
    researchEmphasis: true,
    leadershipEmphasis: false,
    resumeLabel: "DATA SCIENTIST / ANALYST RESUME",
    resumeIndex: 1,
    metaTitle: "AAQIB ABDULLAH — Data Scientist / Analyst",
    metaDescription:
      "Aaqib Abdullah — Data Scientist / Analyst. Data analysis, machine learning, research, and turning data into decisions. Published ML research (JICS, 2026).",
    aiPlaceholder: "Ask me about Aaqib's data science and research work.",
    aiSuggestions: [
      "What data projects has Aaqib built?",
      "Tell me about the JICS paper.",
      "What does the Trader Behaviour analysis show?",
      "What was Aaqib's role at FnF Coliving?",
    ],
  },
  product: {
    id: "product",
    label: "PRODUCT",
    navLabel: "Product",
    heroStatement: "I build products from problems, data, and systems.",
    heroSubline:
      "A technical builder who understands problems, users, data, systems and execution — product thinking backed by the ability to actually build and ship.",
    featuredWork: ["01", "04", "02", "03", "07"],
    experienceEmphasis: "both",
    researchEmphasis: false,
    leadershipEmphasis: true,
    resumeLabel: "PRODUCT MANAGER RESUME",
    resumeIndex: 2,
    metaTitle: "AAQIB ABDULLAH — Product Manager",
    metaDescription:
      "Aaqib Abdullah — Product Manager. Technical product development, user problems, business analysis, and cross-functional execution. Built products from ONDC to flexible-rental platforms.",
    aiPlaceholder: "Ask me about Aaqib's product work and thinking.",
    aiSuggestions: [
      "How does Aaqib approach product decisions?",
      "Tell me about the FnF flexible-rental research.",
      "What product work did Aaqib do at OpenIdea?",
      "How does Pyramids demonstrate product thinking?",
    ],
  },
};

export function getTrack(pathname: string): TrackId {
  if (pathname.startsWith("/ai")) return "ai";
  if (pathname.startsWith("/data")) return "data";
  if (pathname.startsWith("/product")) return "product";
  return "unified";
}
