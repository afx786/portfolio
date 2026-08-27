# PORTFOLIO_CONTENT_MAP.md — Verified Content → Stitch Design

**Purpose:** Complete content specification mapping every Stitch design section to verified Aaqib content, before any UI code is written.
**Status:** Phase 2 (mapping) · No UI implemented · No new facts generated.

---

## 0. GLOBAL RULES

### 0.1 Source priority
1. `PORTFOLIO_KNOWLEDGE_BASE.md` — canonical factual source
2. `knowledge/*.md` — structured content source
3. `screen.png` / `code.html` — visual & structural reference
4. `DESIGN.md` — design-system source of truth

**Rule:** Content inside Stitch `code.html` is NEVER treated as factual unless it also exists in the knowledge base. Stitch-generated placeholders/fabrications must not return.

### 0.2 Confidence legend
- **HIGH** — `[verified-code]` / `[verified-paper]` / `[user-confirmed]`
- **MED** — `[resume-claim]` + user-confirmed
- **PENDING** — `[prior-audit]`, `[LINK_PENDING]`, or waiting on user-supplied value

### 0.3 Content removed (must NOT return)
| Removed item | Reason |
|---|---|
| "Reduced latency by 40%" | No verified evidence `[user-confirmed]` |
| "Software Engineer Intern, OpenIdea, 2023–Present" | Wrong role/dates |
| TechCorp Analytics · University AI Lab | Template placeholders |
| General Secretary / Open Source Initiative | Template placeholders |
| "IEEE Access · 2022 · wearable sensors · 92% F1" | Contradicted by actual JICS paper |
| Pyramids = "Web3 / decentralized / AI reputation" | Contradicted by code (deterministic engine) |
| PredictoPay, KMRL, HousePrice, SpaceX, Timetable | Dropped `[user-confirmed]` |
| X/Twitter, ResearchGate, Kaggle socials | Excluded `[user-confirmed]` |
| "Real Maximo", trader sentiment, predicto metrics, fabricated attendee/user counts | Known defects / not confirmed |
| Software Engineer as a primary role | Underlying capability only |

### 0.4 Link placeholder convention
Any URL not yet supplied is written as **`[LINK_PENDING]`** and tracked in the link register. Never fabricate a URL.

### 0.5 Naming note (minor variance)
Resumes/knowledge base spell the company **"Ecosysz Core Solutions Pvt Ltd"**; the Phase 2 prompt wrote "Ecosyz". Knowledge base spelling is canonical — use **"OpenIdea (Ecosysz Core Solutions Pvt Ltd)"**. Flag to user for a final decision. `[PENDING]`

---

## 1. SITE-WIDE CHROME (Stitch structural elements)

### 1.1 Top navigation (sticky, blurred)
| Item | Content | Source | Confidence | Link req | Visual priority | CTA | Cross-links |
|---|---|---|---|---|---|---|---|
| Brand | **AAQIB ABDULLAH** | knowledge/profile.md | HIGH | — | High | — | → all sections |
| Nav links | About · Experience · Leadership · Work · Research · Education · Capabilities · Where I Fit · Achievements · Contact | Section map (§2) | HIGH | anchor | Med | scroll | each anchor |
| Resume selector | "Resume" → opens modal (3 options) | knowledge/roles.md | HIGH | `[LINK_PENDING]` per option | High | open modal | §8 Resume Selector |
| Ask Aaqib AI | Opens/focuses AI assistant | knowledge base | HIGH | — | High | open widget | §12 AI Assistant |
| Mobile | brand + menu (as Stitch) | Stitch structure | HIGH | — | Med | menu | — |

### 1.2 Footer
| Item | Content | Source | Confidence | Link req | Visual priority | CTA | Cross-links |
|---|---|---|---|---|---|---|---|
| Brand | AAQIB ABDULLAH | profile.md | HIGH | — | Med | — | — |
| Socials | **LinkedIn · GitHub · Instagram · Email** (only these) | links.md | HIGH | LinkedIn real, GitHub real, Instagram real, email real | Med | external | contact |
| Copyright | © Aaqib Abdullah · Built with precision (as Stitch) | Stitch structure | HIGH | — | Low | — | — |
| Mascot toggle | Keep interactive cat + toggle | Stitch JS | HIGH | — | Low | toggle | — |

### 1.3 Resume modal (Stitch "Choose your view of Aaqib")
| Item | Content | Source | Confidence | Link req | Visual priority | CTA | Cross-links |
|---|---|---|---|---|---|---|---|
| Heading | Choose your view of Aaqib · Different roles, different ways of working | Stitch structure | HIGH | — | Med | — | — |
| Option 1 | **AI / ML ENGINEER** | knowledge/roles.md | HIGH | `[LINK_PENDING]` | High | view resume | §9 |
| Option 2 | **DATA SCIENTIST / ANALYST** | knowledge/roles.md | HIGH | `[LINK_PENDING]` | High | view resume | §9 |
| Option 3 | **PRODUCT MANAGER** | knowledge/roles.md | HIGH | `[LINK_PENDING]` | High | view resume | §9 |
| Close | Close button (Stitch) | Stitch structure | HIGH | — | Low | close | — |

> Exactly three options. No Software Engineer option. `[user-confirmed]`

---

## 2. SECTION MAP (numbered as specified)

### 01 / HERO
**Goal:** communicate immediately: **AAQIB ABDULLAH · AI / DATA / PRODUCT** and the positioning statement. Left-aligned headline. No photograph (do not reintroduce). Keep interactive cat.

| Item | Content | Source | Confidence | Link req | Visual priority | CTA | Cross-links |
|---|---|---|---|---|---|---|---|
| Meta row | **AI · DATA · PRODUCT** (hero scope; RESEARCH surfaced in Capabilities) | user Phase-2 brief + roles.md | HIGH | — | High | — | §08 |
| Eyebrow/positioning | *"A data/AI builder who bridges AI, software engineering, and product."* | knowledge/roles.md | HIGH | — | High | — | §09 |
| Headline (H1) | AAQIB ABDULLAH — **AI / DATA / PRODUCT** (Stitch display-xl style) | profile.md | HIGH | — | High | — | — |
| Subline | "Computer Science (Data Science) undergraduate building intelligent systems across AI/ML, data, and product." *(paraphrase — must be grounded in profile.md/education.md)* | profile.md/education.md | MED | — | Med | — | §07 |
| Current status card | **AI / LLM Systems Engineer Intern · OpenIdea (Ecosysz Core Solutions Pvt Ltd) · Full-time · Since June 2026 · Reporting to the Founder · ~10-person company** | knowledge/experience.md | HIGH | — | High (must be visible in first viewport) | — | §03 |
| Education line | Final-year B.Tech CSE / Data Science · Gautam Buddha University · 2023–2027 | education.md | HIGH | — | Med | — | §07 |
| Ask Aaqib AI | Embedded AI assistant widget | §12 | HIGH | — | High | ask | §12 |
| Resume selector | "Resume" button → modal | §1.3 | HIGH | `[LINK_PENDING]` | High | open modal | §8 |
| Scroll cue | "Scroll to explore" (Stitch) | Stitch structure | HIGH | — | Low | — | — |
| Cat mascot | Keep (Stitch) | Stitch | HIGH | — | Low | — | — |

**Current status — prohibited:** "reduced latency by 40%". `[user-confirmed]`

### 02 / ABOUT
| Item | Content | Source | Confidence | Link req | Visual priority | CTA | Cross-links |
|---|---|---|---|---|---|---|---|
| Label | 01 / About (per Stitch numbering style — see note §2.0) | Stitch | HIGH | — | Low | — | — |
| Headline | Positioning statement as lead line | roles.md | HIGH | — | High | — | §09 |
| Body | Bridge between AI/data science and product engineering; final-year CS (Data Science) undergraduate; ships end-to-end systems under real constraints | profile.md, education.md | MED | — | Med | — | §03, §05 |
| Principles | Structural rigor / proof-over-claims (grounded only; no invented philosophy) | PENDING — keep minimal | MED | — | Low | — | — |

### 03 / EXPERIENCE (primary: OpenIdea)
**Structure:** Stitch vertical timeline. Lead with OpenIdea; then FnF; then GDSC & AWS (leadership-adjacent, may live under Leadership).

| Item | Content | Source | Confidence | Link req | Visual priority | CTA | Cross-links |
|---|---|---|---|---|---|---|---|
| Label | 02 / Experience | Stitch | HIGH | — | Low | — | — |
| Role 1 | **AI / LLM Systems Engineer Intern — OpenIdea (Ecosysz Core Solutions Pvt Ltd) · June 2026 – Present · Full-time · Reports to Founder · ~10-person company** | experience.md | HIGH | — | High | — | status card |
| ONDC Buyer App / BAP | Built/contributed: ONDC open-network commerce BAP — search/select/init/confirm/status/cancel/update/track/support/rating + callbacks; multi-tenant; signing; idempotency; payments; logistics. **Status: implemented, self-tested, certified, live in production.** Do NOT call prototype. | projects.md | HIGH | `[LINK_PENDING]` (none public confirmed) | High | — | §05-02 |
| Open-Barter / BarterEngine | **Prototype built during the internship.** AI barter matching (Gemini 2.0 Flash + deterministic fallback; 14-factor scoring). | projects.md | HIGH | https://open-barter.vercel.app/ | High | — | §05-05 |
| mcp-openidea-search | **Contributed to OpenIdea.** MCP server (7 tools, 9 tests), live on PyPI. | projects.md | HIGH | `[LINK_PENDING]` confirm PyPI URL | High | — | §05-04 |
| WhatsApp → Website POC | Built as intern work (FastAPI scaffold). | projects.md | HIGH | `[LINK_PENDING]` | Med | — | — |
| n8n LeadGen | Built as intern work. **Only verified facts; metrics are `[prior-audit]` → mark PENDING, do NOT display publicly.** | projects.md | PENDING | `[LINK_PENDING]` | Med | — | — |
| job-automation | Built as intern work. Same PENDING rule. | projects.md | PENDING | `[LINK_PENDING]` | Med | — | — |
| Bhojpatra | Built as intern work. Same PENDING rule. | projects.md | PENDING | `[LINK_PENDING]` | Med | — | — |
| Role 2 | **Research & Development Intern — FnF Coliving · Jan–Feb 2026** · Market intelligence · competitor benchmarking · flexible-rental research · strategic product-expansion recommendations · **Delivered report + presentation** | experience.md | HIGH | LOR `[LINK_PENDING]` | Med | — | — |
| — | Prohibited: invented FnF outcomes | — | — | — | — | — | — |

### 04 / LEADERSHIP
| Item | Content | Source | Confidence | Link req | Visual priority | CTA | Cross-links |
|---|---|---|---|---|---|---|---|
| Label | 03 / Leadership & Ownership | Stitch | HIGH | — | Low | — | — |
| President | **Official Film & Photography Club, GBU · 2025–2026 · ~35 members** — led media team for **Abhivyanjana Cultural Fest** & **Ignition Technical Fest**; movies, short films, reels | leadership.md | HIGH | achievements folder (real) | High | — | achievements |
| Media Team Lead | 4 university fests · 3 hackathons · 2 international conferences | leadership.md | MED | — | Med | — | — |
| GDSC | **Data Science Lead · 2025–2026** · ~1–2 workshops | leadership.md | HIGH (counts user-confirmed) | — | Med | — | — |
| AWS | **AI/ML Mentor · 2025–2026** · ~3 workshops | leadership.md | HIGH (counts user-confirmed) | — | Med | — | — |
| — | Prohibited: attendee numbers (not provided) | — | — | — | — | — | — |

### 05 / SELECTED WORK
**Order & weight:** 01–05 dominate; 06–07 lighter (optional secondary tier). No equal visual weight.

| # | Project | Content (verified) | Source | Confidence | Link req | Visual priority | CTA | Cross-links |
|---|---|---|---|---|---|---|---|---|
| 01 | **Pyramids** | Full-stack **student builder collaboration platform** with a **deterministic, explainable repo-intelligence engine**. Verified surface: **163 endpoints, 33 tables, 11 migrations, WebSockets, auth, CI/CD, repo-intelligence engine, hackathon discovery**. Status: **mature beta / undergoing beta testing.** NOT Web3/decentralized/AI-reputation; no user counts. | projects.md | HIGH | https://pyramids-connect.vercel.app/ + github.com/afx786/pyramids | **Highest** | open site | §09 |
| 02 | **ONDC Buyer App / BAP** | OpenIdea intern work. Implemented, self-tested, **certified**, **live in production**; multi-tenant BAP; protocol lifecycle; idempotency; payments. | projects.md | HIGH | `[LINK_PENDING]` | **Highest** | — | §03 |
| 03 | **MeTalks** | Personalized chatbot **fine-tuned from DistilGPT-2** (PyTorch, Hugging Face, tokenizer extension 50,257→50,261, controlled decoding). Pipeline: **11,781 raw → 9,295 cleaned → 4,924 turns → 2,462 training pairs**. Eval qualitative only — **no quantitative quality claims**. | projects.md | HIGH | github.com/afx786/MeTalks | **High** | view repo | — |
| 04 | **mcp-openidea-search** | MCP server **contributed to OpenIdea**; 7 search tools; live on PyPI. | projects.md | HIGH | `[LINK_PENDING]` PyPI | **High** | — | §03 |
| 05 | **Open-Barter / BarterEngine** | **Prototype built during the OpenIdea internship.** AI barter matching: Gemini 2.0 Flash + deterministic fallback; 14-factor scoring; dual onboarding. | projects.md | HIGH | https://open-barter.vercel.app/ | **High** | open site | §03 |
| 06 | **Trader Behaviour Insights** | DEX trade analytics (211,224 fills; 32 accounts; risk segmentation). **Do NOT claim sentiment analysis** (defect recorded). | projects.md | HIGH (framed) | github.com/afx786/trader_behaviour_insights | Low–Med | view repo | — |
| 07 | **FAANG Stock Market Analysis** | Descriptive equity analytics (volatility/drawdown). **Do NOT claim 9/9 tickers or ML.** | projects.md | HIGH (framed) | github.com/afx786/stock_analysis_project | Low–Med | view repo | — |

**Dropped (never appear):** PredictoPay, KMRL, HousePrice, SpaceX, Timetable. `[user-confirmed]`

### 06 / RESEARCH
| Item | Content | Source | Confidence | Link req | Visual priority | CTA | Cross-links |
|---|---|---|---|---|---|---|---|
| Label | 05 / Research | Stitch | HIGH | — | Low | — | — |
| Featured | **A Machine Learning Approach to Classifying Stress Levels Using Psychological and Non-Psychological Features** — Journal of Intelligent Computing System, **Vol. 1, Issue 2, May 2026** · **2nd author** (3 authors) | research.md | HIGH | paper file link (real) + `[LINK_PENDING]` journal issue/DOI | High | read paper | — |
| Method | Survey (110 responses) · USS-21 · 4 classifiers (LR/SVM/RF/XGBoost) × 3 feature configs | research.md | HIGH | — | Med | — | — |
| Results | XGBoost full: **Acc 0.695 · MCC 0.557 · F1 0.694**; psychological-only: **Acc 0.739**; self-report vs USS mismatch analysis | research.md | HIGH | — | Med | — | — |
| Dataset | Available on request | research.md | HIGH | `[LINK_PENDING]` (or "on request") | Low | — | — |
| Prohibited | IEEE Access · 2022 · wearable sensors · 92% F1 | research.md | HIGH | — | — | — | — |

### 07 / EDUCATION
| Item | Content | Source | Confidence | Link req | Visual priority | CTA | Cross-links |
|---|---|---|---|---|---|---|---|
| Label | 06 / Education | Stitch | HIGH | — | Low | — | — |
| Institution | **Gautam Buddha University** | education.md | HIGH | — | High | — | — |
| Degree | **B.Tech Computer Science Engineering (Data Science)** | education.md | MED | — | High | — | — |
| Dates | **2023–2027** | education.md | HIGH | — | Med | — | — |
| Status | **Final-year** | profile.md | HIGH | — | Med | — | — |
| — | Remove `[Course Placeholder]` / `[Achievement Placeholder]` | Stitch placeholders | HIGH | — | — | — | — |

### 08 / CAPABILITIES
**Organize around: AI/ML · DATA · SOFTWARE · PRODUCT · RESEARCH.** Software = capability, not identity.

| Item | Content | Source | Confidence | Link req | Visual priority | CTA | Cross-links |
|---|---|---|---|---|---|---|---|
| Label | 07 / Capabilities | Stitch | HIGH | — | Low | — | — |
| AI / ML | LLM fine-tuning, Hugging Face, PyTorch, Gemini application, MCP, prompt engineering, recommendation systems, ML research | skills.md | HIGH | — | High | — | §05 |
| Data | Pandas/NumPy/SciPy, EDA, statistical analysis, matplotlib/seaborn/plotly, **Tableau (used), Power BI (used)** | skills.md | HIGH | — | High | — | §05 |
| Software | FastAPI/Flask, SQLAlchemy/Prisma, PostgreSQL, REST/WebSockets, JWT, Alembic, React/Next.js, CI/CD — **as capability** | skills.md | HIGH | — | Med | — | §05 |
| Product | Barter matching product design, ONDC platform scoping, lead-scoring/gating (n8n, pending), dual-persona UX, admin workflow design (Bhojpatra, pending) | roles.md/projects.md | MED–PENDING | — | Med | — | §09 |
| Research | Applied ML research, published JICS paper | research.md | HIGH | — | Med | — | §06 |
| Excluded | Go, GraphQL, D3.js, RAG, AWS/GCP (unconfirmed); Java/R (unconfirmed) | skills.md | PENDING | — | — | — | — |

### 09 / WHERE I FIT
| Item | Content | Source | Confidence | Link req | Visual priority | CTA | Cross-links |
|---|---|---|---|---|---|---|---|
| Label | 08 / Where I Fit | Stitch | HIGH | — | Low | — | — |
| Core line | *"A data/AI person who bridges AI, software engineering and product."* | roles.md | HIGH | — | High | — | §02 |
| Track 1 | **01 — AI / ML ENGINEER** | roles.md | HIGH | `[LINK_PENDING]` resume | High | view resume | §05 |
| Track 2 | **02 — DATA SCIENTIST / ANALYST** | roles.md | HIGH | `[LINK_PENDING]` resume | High | view resume | §05 |
| Track 3 | **03 — PRODUCT MANAGER** | roles.md | HIGH | `[LINK_PENDING]` resume | High | view resume | §05 |
| Underlying | Software engineering = strong underlying capability (NOT a 4th primary role) | roles.md | HIGH | — | Med | — | §08 |
| Audience | Built for recruiters · hiring managers · startup founders | roles.md | HIGH | — | Low | — | — |

### 10 / ACHIEVEMENTS *(new section — Stitch left this slot blank)*
| Item | Content | Source | Confidence | Link req | Visual priority | CTA | Cross-links |
|---|---|---|---|---|---|---|---|
| Label | 09 / Achievements (numbering per new spec) | — | HIGH | — | Low | — | — |
| Sports | **State-ranked Table Tennis player (2022)** · **Represented GBU at the All India National University Games** | leadership.md | MED | achievements folder (real) | Med | — | §04 |
| Research | Published JICS paper (2nd author) | research.md | HIGH | paper link | Med | read paper | §06 |
| Certifications | IBM Data Science Professional Certificate · McKinsey Forward Program · 160 Days of DSA (GfG) · Mastering GenAI and ChatGPT (GfG) | skills.md | HIGH (existence); links PENDING | `[LINK_PENDING]` ×4 | Med | view cert | — |
| — | No invented awards | — | HIGH | — | — | — | — |

### 11 / CONTACT
| Item | Content | Source | Confidence | Link req | Visual priority | CTA | Cross-links |
|---|---|---|---|---|---|---|---|
| Label | 10 / Contact | Stitch | HIGH | — | Low | — | — |
| Headline | "Let's build something worth talking about." (Stitch) | Stitch structure | HIGH | — | High | — | — |
| Meta row | AI · DATA · PRODUCT (aligns with hero) | roles.md | HIGH | — | Low | — | §01 |
| Socials | **LinkedIn · GitHub · Instagram · Email** (only these) | links.md | HIGH | all four real | High | external | footer |
| Primary CTA | "Get in touch" → mailto:aaqibabdullah2006@gmail.com | links.md | HIGH | email real | High | email | — |
| Secondary CTA | "Download resume" → `[LINK_PENDING]` | links.md | PENDING | `[LINK_PENDING]` | Med | download | §8 |

---

## 12. AI ASSISTANT (Ask Aaqib AI) — behavior spec

**Source of truth:** knowledge base files. **Rules:** never invent; if evidence unavailable → *"I don't have verified information about that."* `[user-confirmed]`

| Question category | Answers from | Example intents |
|---|---|---|
| Experience | experience.md | "What did you do at OpenIdea?" · "What did you do at FnF?" |
| Projects | projects.md | "Tell me about Pyramids / MeTalks / the ONDC BAP." |
| Research | research.md | "What is your paper about?" · "What were the results?" |
| Leadership | leadership.md | "Were you a club president?" |
| Skills | skills.md | "What frameworks do you use?" |
| Role-fit | roles.md | "What role are you suited for?" |
| Resume recommendation | roles.md + §8 | "Which resume for an ML role?" → recommend AI/ML Engineer · Data role → Data Scientist/Analyst · Product role → Product Manager |
| Unknown | — | Fallback: *"I don't have verified information about that."* |

**Suggested chips (grounded, from KB):** "What has Aaqib built?", "Tell me about the ONDC BAP.", "What is the JICS paper about?", "What roles is he suited for?", "Which resume should I view for an ML position?"

**Remove from old AI logic:** "92% F1", "wearable sensors", "latency 40%", "decentralized Pyramids", "roles suited → includes anything not in roles.md", "View Pyramids" → point to real live URL.

---

## 13. SECTION NUMBERING NOTE (Stitch → new spec)
Stitch numbered: About 01, Experience 02, Leadership 03, Work 04, Research 05, Education 06, Capabilities 07, Where I Fit 08, (09 blank), Contact 10. New spec renumbers: **Hero 01 · About 02 · Experience 03 · Leadership 04 · Selected Work 05 · Research 06 · Education 07 · Capabilities 08 · Where I Fit 09 · Achievements 10 · Contact 11** (applied to nav + section labels at implementation time).

---

## 14. LINK REGISTER (consolidated)
| Link | Value | Status |
|---|---|---|
| LinkedIn | https://www.linkedin.com/in/aaqib-abdullah-8620b2292/ | REAL |
| GitHub | https://github.com/afx786 | REAL |
| Instagram | instagram.com/afx.exe | REAL |
| Email | aaqibabdullah2006@gmail.com | REAL |
| Pyramids live | https://pyramids-connect.vercel.app/ | REAL |
| Open-Barter live | https://open-barter.vercel.app/ | REAL |
| JICS paper | Google Drive file link (knowledge/links.md) | REAL |
| Achievements folder | Google Drive folder link | REAL |
| LORs folder | Google Drive folder link | REAL |
| mcp-openidea-search PyPI | `[LINK_PENDING]` (confirm pypi.org/project/mcp-openidea-search/0.1.1) | PENDING |
| ONDC BAP / WhatsApp POC / n8n / job-automation / Bhojpatra | `[LINK_PENDING]` | PENDING |
| Journal issue page / DOI | `[LINK_PENDING]` | PENDING |
| 4 certificate links | `[LINK_PENDING]` | PENDING |
| 3 resume downloads | `[LINK_PENDING]` | PENDING |
| FnF LOR (specific) | `[LINK_PENDING]` (optional) | PENDING |

---

**STOPPED.** PORTFOLIO_CONTENT_MAP.md created. No UI implemented; knowledge base untouched. Ready for audit or explicit Phase 3 instruction.