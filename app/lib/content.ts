// Typed content layer — derived strictly from PORTFOLIO_CONTENT_MAP.md and the knowledge base.
// Do not edit facts here; edit the knowledge base instead, then update this file.

export type LinkStatus = "real" | "pending";

export interface SiteLink {
  label: string;
  url: string;
  status: LinkStatus;
}

export const LINK_PENDING = "[LINK_PENDING]";

export const site = {
  name: "AAQIB ABDULLAH",
  identity: "DATA · AI · SOFTWARE ENGINEERING · PRODUCT",
  positioning: "I build intelligent systems, products, and ideas.",
  subline:
    "Primarily a data/AI person — I use Data Science, machine learning, and rigorous analysis to turn data into systems and products that work, built on a strong software engineering foundation and clear product thinking.",
  taglineChip: ["DATA", "AI", "SOFTWARE ENGINEERING", "PRODUCT"],
};

export const currentStatus = {
  label: "CURRENTLY",
  value: "Looking for opportunities",
};

export const education = {
  institution: "Gautam Buddha University",
  location: "Greater Noida, India",
  degree: "B.Tech Computer Science Engineering",
  specialization: "Data Science",
  dates: "2023–2027",
  status: "Final-year",
};

export const navSections = [
  { id: "about", label: "About", num: "01" },
  { id: "experience", label: "Experience", num: "02" },
  { id: "leadership", label: "Leadership", num: "03" },
  { id: "work", label: "Work", num: "04" },
  { id: "research", label: "Research", num: "05" },
  { id: "education", label: "Education", num: "06" },
  { id: "capabilities", label: "Capabilities", num: "07" },
  { id: "achievements", label: "Achievements", num: "08" },
  { id: "contact", label: "Contact", num: "09" },
];

export interface Role {
  org: string;
  role: string;
  dates: string;
  kind: string; // timeline node label
  description: string;
  details?: string[];
}

export const experience: Role[] = [
  {
    org: "OpenIdea",
    role: "AI / LLM Systems Engineer Intern",
    dates: "June 2026",
    kind: "Full-time · ~10-person company · Reporting to founder",
    description:
      "Built and contributed to product work across ONDC + LLM integration, MCP infrastructure, and AI matching systems.",
    details: [
      "Worked closely with the Founder's Office on AI infrastructure and deployment strategy.",
    ],
  },
  {
    org: "FnF Coliving",
    role: "Research & Development Intern",
    dates: "January — February 2026",
    kind: "Remote",
    description:
      "Researched a flexible-rental housing model — a vertical Airbnb-style concept where customers rent homes for the duration they actually need in a city, rather than conventional long-term agreements.",
    details: [
      "Flexible Rental Platform R&D — Researched a flexible-rental housing model designed around short-duration stays, allowing customers to rent homes based on the duration they actually needed in a city.",
      "Data & Business Analysis — Analyzed the market, competitive landscape, business model and potential revenue opportunities to evaluate different approaches for operationalizing the concept.",
      "Client & Product Research — Participated in client discussions and translated research findings into product and business recommendations, delivered through a structured report and presentation.",
    ],
  },
];

export interface OpenIdeaWorkItem {
  title: string;
  framing: string;
  bullets: string[];
  link?: SiteLink;
  size?: "lg" | "sm";
}

export const openIdeaWork: OpenIdeaWorkItem[] = [
  {
    title: "ONDC & AI Systems",
    framing:
      "Built and integrated AI/LLM capabilities into an ONDC Buyer App/BAP, taking the system through implementation, self-testing, certification and production deployment.",
    bullets: [],
  },
  {
    title: "MCP & AI Infrastructure",
    framing:
      "Contributed to OpenIdea's MCP/search infrastructure, including the publicly available mcp-openidea-search package on PyPI.",
    bullets: [],
    link: { label: "PyPI package", url: "https://pypi.org/project/mcp-openidea-search/0.1.1/", status: "real" },
  },
  {
    title: "AI Products & Integrations",
    framing:
      "Built the Open-Barter prototype and WhatsApp → Website POC as part of OpenIdea's AI/product experimentation.",
    bullets: [],
    link: { label: "Live site", url: "https://open-barter.vercel.app/", status: "real" },
  },
];

export interface LeadershipItem {
  title: string;
  org: string;
  dates: string;
  description: string;
  highlights: string[];
}

export const leadership: LeadershipItem[] = [
  {
    title: "President",
    org: "Official Film & Photography Club, Gautam Buddha University",
    dates: "2025–2026 · ~35 members",
    description:
      "Led the club and its media operations for major university events.",
    highlights: [
      "Media-team leadership for Abhivyanjana Cultural Fest and Ignition Technical Fest.",
      "Produced and worked on movies, short films, and reels.",
    ],
  },
  {
    title: "Media Team Lead",
    org: "University fests, hackathons & conferences",
    dates: "4 fests · 3 hackathons · 2 international conferences",
    description:
      "Led media coverage and documentation across university-scale events.",
    highlights: ["Signature events include Abhivyanjana and Ignition."],
  },
  {
    title: "Data Science Lead",
    org: "Google Developer Student Clubs (GDSC)",
    dates: "2025–2026",
    description: "Led Python / ML / applied-AI workshops for students.",
    highlights: ["Approximately 1–2 workshops conducted."],
  },
  {
    title: "Mentor, AI/ML Team",
    org: "AWS Student Builder Team",
    dates: "2025–2026",
    description: "Guided student developers on ML fundamentals and practical AI architecture.",
    highlights: ["Approximately 3 workshops conducted."],
  },
];

export interface Project {
  index: string;
  title: string;
  category: string;
  status: string;
  description: string;
  highlights: string[];
  tags: string[];
  links: SiteLink[];
  tier: "primary" | "secondary";
  featured?: boolean;
}

export const projects: Project[] = [
  {
    index: "01",
    title: "Pyramids",
    category: "Full-Stack Platform",
    status: "Mature beta · undergoing beta testing",
    description:
      "A full-stack student builder collaboration platform with a deterministic, explainable repo-intelligence engine.",
    highlights: [
      "163 endpoints across 28 routers, 33-table PostgreSQL schema, 11 Alembic migrations.",
      "JWT + bcrypt authentication, WebSocket presence, and CI/CD deployment.",
      "Repo-intelligence engine: detects 20 technologies, infers 8 skills, scores repos 0–100 over 10 categories.",
      "Automated daily hackathon-discovery cron (4 sources, 8 concurrent threads).",
    ],
    tags: ["FastAPI", "PostgreSQL", "React", "WebSockets", "Auth", "CI/CD"],
    links: [
      { label: "Live site", url: "https://pyramids-connect.vercel.app/", status: "real" },
      { label: "GitHub", url: "https://github.com/afx786/pyramids", status: "real" },
    ],
    tier: "primary",
    featured: true,
  },
  {
    index: "02",
    title: "Dental Anomaly Detection",
    category: "Computer Vision",
    status: "Designed & built · Streamlit app",
    description:
      "A Streamlit app that scores dental X-rays for anomalies using a convolutional autoencoder — designed and built, presenting an anomaly score, reconstruction, and anomaly heatmap.",
    highlights: [
      "Convolutional autoencoder (PyTorch) over 256×512 grayscale X-rays with a 128-dim latent space.",
      "OpenCV preprocessing (CLAHE) before reconstruction-based scoring.",
      "Streamlit UI: upload an X-ray to get the anomaly score, reconstruction, and heatmap.",
    ],
    tags: ["PyTorch", "OpenCV", "Autoencoder", "Streamlit"],
    links: [{ label: "GitHub", url: "https://github.com/afx786/dental-anomaly-detection", status: "real" }],
    tier: "primary",
  },
  {
    index: "03",
    title: "MeTalks",
    category: "LLM Fine-Tuning",
    status: "Complete · local deployment",
    description:
      "A personalized chatbot fine-tuned from DistilGPT-2 on personal WhatsApp conversations.",
    highlights: [
      "ETL pipeline: 11,781 raw messages → 9,295 cleaned → 4,924 speaker-merged turns → 2,462 training pairs.",
      "DistilGPT-2 fine-tune with tokenizer extension (50,257 → 50,261) using PyTorch + Hugging Face Trainer.",
      "Controlled decoding (temperature, top-p, repetition penalty) for English and Hinglish replies.",
    ],
    tags: ["PyTorch", "Hugging Face", "DistilGPT-2", "Streamlit"],
    links: [{ label: "GitHub", url: "https://github.com/afx786/MeTalks", status: "real" }],
    tier: "primary",
  },
  {
    index: "04",
    title: "Metro Rail Automation",
    category: "Metro Planning",
    status: "Prototype · FastAPI + React",
    description:
      "A FastAPI + React trainset maintenance planning prototype for KMRL (Kochi Metro) — consolidates trainset, simulated IoT sensor, and job-card data, then generates an optimized nightly service/standby/maintenance plan.",
    highlights: [
      "Plans 25 trainsets (KM01–KM25) using heuristic business rules plus two scikit-learn classifiers.",
      "Certificate-expiry predictor and job-card urgency scorer, with a rule-based fallback when model files are missing.",
      "React (Vite) dashboard backed by FastAPI + SQLAlchemy + SQLite, with API-key-secured admin endpoints.",
    ],
    tags: ["FastAPI", "React", "scikit-learn", "SQLAlchemy", "SQLite"],
    links: [{ label: "GitHub", url: "https://github.com/afx786/automated_metro_rail_management", status: "real" }],
    tier: "primary",
  },
  {
    index: "05",
    title: "Trader Behaviour Insights",
    category: "Data Analytics",
    status: "Analytics",
    description:
      "On-chain DEX trader behaviour analytics — a pandas ETL and risk-profiling study.",
    highlights: [
      "ETL of 211,224 on-chain DEX trade fills plus 2,644 daily Fear & Greed rows.",
      "Profiled 32 trader accounts across 11 behaviour metrics.",
      "Rule-based risk segmentation validated with descriptive statistics and correlation analysis.",
    ],
    tags: ["Pandas", "NumPy", "Seaborn", "Plotly"],
    links: [{ label: "GitHub", url: "https://github.com/afx786/trader_behaviour_insights", status: "real" }],
    tier: "secondary",
  },
  {
    index: "06",
    title: "FAANG Stock Market Analysis",
    category: "Financial Analytics",
    status: "Analytics",
    description:
      "Descriptive equity analytics on big-tech tickers — volatility and drawdown risk.",
    highlights: [
      "yfinance + pandas pipeline over 2,517 daily price rows across 9 big-tech tickers (2014–2024).",
      "Annualized volatility: TSLA 56.1%, NVDA 48.2%, NFLX 44.0%.",
      "Maximum drawdown analysis: META −76.7%, NFLX −75.9%, TSLA −73.6%.",
    ],
    tags: ["Python", "yfinance", "Pandas", "Matplotlib", "Seaborn"],
    links: [{ label: "GitHub", url: "https://github.com/afx786/stock_analysis_project", status: "real" }],
    tier: "secondary",
  },
  {
    index: "07",
    title: "Automated Rail Management",
    category: "Metro Planning",
    status: "Prototype · FastAPI + React",
    description:
      "A FastAPI + React trainset maintenance planning prototype for KMRL (Kochi Metro) — consolidates trainset, simulated IoT sensor, and job-card data, then generates an optimized nightly service/standby/maintenance plan.",
    highlights: [
      "Plans 25 trainsets (KM01–KM25) using heuristic business rules plus two scikit-learn classifiers.",
      "Certificate-expiry predictor and job-card urgency scorer, with a rule-based fallback when model files are missing.",
      "React (Vite) dashboard backed by FastAPI + SQLAlchemy + SQLite, with API-key-secured admin endpoints.",
    ],
    tags: ["FastAPI", "React", "scikit-learn", "SQLAlchemy", "SQLite"],
    links: [{ label: "GitHub", url: "https://github.com/afx786/automated_metro_rail_management", status: "real" }],
    tier: "secondary",
  },
];

export const research = {
  title:
    "A Machine Learning Approach to Classifying Stress Levels Using Psychological and Non-Psychological Features",
  venue: "Journal of Intelligent Computing System",
  detail: "Vol. 1, Issue 2, May 2026",
  authors: "Siddharth Kumar, Aaqib Abdullah, Maneet Singh",
  position: "Aaqib Abdullah — second author",
  abstract:
    "A study benchmarking Logistic Regression, SVM, Random Forest, and XGBoost for stress-level classification from psychological (USS-21) and non-psychological survey features.",
  method: [
    "Survey-based study: 110 completed responses; 21 University Stress Scale (USS-21) items plus demographics and lifestyle variables.",
    "Four classifiers × three feature configurations (non-psychological, psychological-only, combined); 80:20 train/test split.",
    "Evaluated with accuracy, weighted F1, and Matthews Correlation Coefficient (MCC).",
  ],
  results: [
    "XGBoost on the full feature set: Accuracy 0.695 · MCC 0.557 · Weighted F1 0.694.",
    "Psychological-only (USS-21) model: Accuracy 0.739.",
    "Self-reported vs USS-derived stress diverged for a subset of students, supporting structured scales + ML over self-report alone.",
  ],
  links: [
    {
      label: "Read the paper",
      url: "https://drive.google.com/file/d/1l2QhNG4DW_pXLyqfU9wB9QUgBdiHusWC/view?usp=drive_link",
      status: "real" as LinkStatus,
    },
  ],
};

export const capabilities = [
  {
    icon: "neurology",
    title: "AI & Machine Learning",
    items: [
      "LLM fine-tuning (PyTorch, Hugging Face)",
      "LLM application & MCP tooling",
      "Prompt engineering",
      "Recommendation systems",
      "Applied ML research",
    ],
  },
  {
    icon: "database",
    title: "Data",
    items: [
      "Pandas / NumPy / SciPy",
      "EDA & statistical analysis",
      "Matplotlib / Seaborn / Plotly",
      "Tableau",
      "Power BI",
    ],
  },
  {
    icon: "code_blocks",
    title: "Software",
    items: [
      "FastAPI / Flask",
      "SQLAlchemy / Prisma / PostgreSQL",
      "REST APIs, WebSockets, JWT",
      "React / Next.js / TypeScript",
      "CI/CD & deployment",
    ],
  },
  {
    icon: "view_quilt",
    title: "Product",
    items: [
      "AI product design (scoring + fallback)",
      "Dual-persona onboarding flows",
      "Platform / ecosystem scoping",
      "Gated, compliance-aware rollouts",
    ],
  },
  {
    icon: "science",
    title: "Research",
    items: [
      "Published ML research (JICS, 2026)",
      "Experiment design & evaluation",
      "Data collection & analysis",
    ],
  },
];

export const roleTracks = [
  {
    index: "01",
    title: "AI / ML Engineer",
    description:
      "Fine-tuning language models, building LLM tooling and MCP servers, and shipping AI products with reliable fallbacks.",
    evidence: "MeTalks · mcp-openidea-search · Open-Barter · ONDC LLM integration",
    resume: "AI / ML ENGINEER",
  },
  {
    index: "02",
    title: "Data Scientist / Analyst",
    description:
      "Turning messy data into decisions — recommendation systems, analytics pipelines, and published ML research.",
    evidence: "Recipe Recommender · Trader Behaviour · JICS research",
    resume: "DATA SCIENTIST / ANALYST",
  },
  {
    index: "03",
    title: "Product Manager",
    description:
      "Defining, scoping, and shipping AI + automation products — platform decisions, scoring models, and gated rollouts.",
    evidence: "ONDC BAP · Open-Barter · n8n LeadGen",
    resume: "PRODUCT MANAGER",
  },
];

export const capabilitiesUnderlying = {
  title: "Underlying capability",
  text: "Strong software engineering is an underlying capability across everything above — not a separate primary role.",
  items: [
    "Scalable backend services",
    "API design (REST, WebSockets)",
    "Data modelling & migrations",
    "Idempotency, caching & fallback patterns",
    "Deployment & CI/CD",
  ],
};

export const achievements = {
  items: [
    {
      title: "State-ranked Table Tennis player",
      detail: "2022 · Represented Gautam Buddha University at the All India National University Games.",
    },
    {
      title: "Published research",
      detail: "Second author, Journal of Intelligent Computing System, May 2026.",
    },
  ],
  certifications: [
    { name: "IBM Data Science Professional Certificate", url: "https://drive.google.com/drive/folders/112CIDhPhGnD-icdXtWvgQYVis0xxG1ST?usp=drive_link", status: "real" as LinkStatus },
    { name: "McKinsey Forward Program", url: "https://drive.google.com/drive/folders/112CIDhPhGnD-icdXtWvgQYVis0xxG1ST?usp=drive_link", status: "real" as LinkStatus },
    { name: "160 Days of DSA Problem Solving (GeeksforGeeks)", url: "https://drive.google.com/drive/folders/112CIDhPhGnD-icdXtWvgQYVis0xxG1ST?usp=drive_link", status: "real" as LinkStatus },
    { name: "Mastering GenAI and ChatGPT (GeeksforGeeks)", url: "https://drive.google.com/drive/folders/112CIDhPhGnD-icdXtWvgQYVis0xxG1ST?usp=drive_link", status: "real" as LinkStatus },
  ],
};

export const contactLinks: SiteLink[] = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/aaqib-abdullah-8620b2292/", status: "real" },
  { label: "GitHub", url: "https://github.com/afx786", status: "real" },
  { label: "Instagram", url: "https://instagram.com/afx.exe", status: "real" },
  { label: "Email", url: "mailto:aaqibabdullah2006@gmail.com", status: "real" },
];

export const resumeOptions = [
  {
    title: "AI / ML ENGINEER",
    description: "AI systems, LLM fine-tuning, MCP tooling, model development, and intelligent automation.",
    url: "https://drive.google.com/file/d/1bWHOOYZiG7icwgxhQKIS4LJa0OLCe4p4/view?usp=drivesdk",
    status: "real" as LinkStatus,
  },
  {
    title: "DATA SCIENTIST / ANALYST",
    description: "Data analysis, machine learning, experimentation, statistics, and turning data into decisions.",
    url: "https://drive.google.com/file/d/1FJO1_g-gI-ds9ob_gJlWygsWRznoRRIT/view?usp=drivesdk",
    status: "real" as LinkStatus,
  },
  {
    title: "PRODUCT MANAGER",
    description: "Product strategy, technical product development, user problems, and cross-functional execution.",
    url: LINK_PENDING,
    status: "pending" as LinkStatus,
  },
];

export const aiSuggestions = [
  "What has Aaqib built?",
  "Tell me about the ONDC BAP.",
  "What is the JICS paper about?",
  "What roles is he suited for?",
  "Which resume for an ML role?",
];

export const fallbackPhrase = "I don't have verified information about that.";

export const visitor = {
  key: "aaqib_portfolio_visitors",
  label: "VISITORS",
};