# knowledge/projects.md — Project Database

**Version:** v1.0 · Status: CANONICAL

> Attribution rule: ONDC BAP, Open-Barter, MCP, WhatsApp POC, n8n, job-automation, Bhojpatra = **built/contributed as OpenIdea intern work**. Pyramids/MeTalks/analytics = personal projects. No invented user counts or usage metrics.

---

## TIER 1 — PRIMARY PORTFOLIO PROJECTS (priority order) `[user-confirmed]`

### 1. Pyramids — GitHub Repo-Intelligence & Builder-Collaboration Platform
- **Attribution:** Personal project. **Status:** Live, undergoing beta testing `[user-confirmed]`
- **URL:** https://pyramids-connect.vercel.app/ `[user-confirmed]`
- **Repo:** github.com/afx786/pyramids `[verified-code]`
- **Problem:** Students lack credible project proof and teammates.
- **What it does:** showcases projects; analyzes GitHub repos; teammates/teams/invites; hackathons; messaging; gamified rank ladder (Explorer→Builder→Creator→Architect→Pyramidion).
- **Tech:** FastAPI · SQLAlchemy · PostgreSQL · React 18 · Vite · Tailwind · Alembic · JWT (HS256, 60-min) · bcrypt · WebSocket presence.
- **Verified scale (code):** 163 endpoints (162 HTTP + 1 WebSocket) across 28 routers; 33 DB tables; 11 Alembic migrations; 28 pytest tests. `[verified-code]`
- **Repo-intelligence engine (deterministic rules, NOT ML):** detects 20 technologies across 5 categories; infers 8 skills; computes a 0–100 repo score over 10 categories. `[verified-code]`
- **Automation:** daily hackathon-discovery cron scraping 4 sources with 8 concurrent threads; auto-commit JSON. `[verified-code]`
- **Deployment:** Render (API + managed Postgres), GitHub Pages frontend, Netlify, Vercel; GitHub Actions CI/CD. `[verified-code]`
- **Caveats:** do NOT call it "Web3" or "decentralized" or "AI/ML engine" (it is a deterministic pattern engine). Resume once said "27 tests" — actual 28. No user-count claims. `[verified-code]`

### 2. ONDC Buyer App / BAP — OpenIdea
- **Attribution:** OpenIdea intern work. **Status:** Implemented, self-tested, certified, **live in production** with real production operation. `[user-confirmed]`
- **What it does:** ONDC Buyer App implementing the open-network commerce protocol — search/select/init/confirm/status/cancel/update/track/support/rating + all `on_*` callbacks + subscribe; multi-tenant storefronts; Ed25519 signing; registry verification; idempotency; payments ledger; Tocxi logistics integration; IGM flows.
- **Tech:** Next.js 16 · React 19 · TypeScript · Prisma 7 · PostgreSQL (Supabase) · Vercel.
- **Verified scale (code):** 21 ONDC protocol handlers (10 outbound + 10 inbound + subscribe); 59 API route files; ~34.3K lines TS/TSX; 6 DB tables; 3 SQL migrations; 7 Vitest unit files. `[verified-code]`
- **Test harness:** 259/259 self-run ONDC Workbench-style cases (local + prod). Official certification: PASSED (BAP certified). `[verified-code for harness; certification user-confirmed]`
- **Data layer:** PostgreSQL/Supabase **live in production**. `[user-confirmed]`
- **Caveats:** Do NOT add "reduced latency by 40%". Do not present as awaiting-first-transaction.

### 3. MeTalks — Personalized DistilGPT-2 Chatbot
- **Attribution:** Personal project. **Status:** Complete (local/Streamlit; no public deployment). `[user-confirmed]`
- **Repo:** github.com/afx786/MeTalks `[verified-code]`
- **What it does:** fine-tuned DistilGPT-2 on personal WhatsApp chats to reply in the user's own texting style (English + Hinglish).
- **Tech:** PyTorch · Hugging Face Transformers · pandas · Streamlit.
- **Verified metrics (code/notebook):** ETL: 11,781 raw → 9,295 cleaned → 4,924 speaker-merged turns → 2,462 friend→user pairs; 90/10 split (2,215 train / 247 val). Tokenizer extended 50,257→50,261. Two 5-epoch runs (2,770 steps each): loss 6.91→0.91, then 1.057→0.77 (best). Final safetensors ~312.5 MB. `[verified-code]`
- **Evaluation:** qualitative only (held-out style prompts); controlled decoding (temp 0.6, top_p 0.85, repetition penalty 1.3). `[verified-code]`
- **Caveats:** no public deployment; no quantitative eval; model weights local-only.

### 4. mcp-openidea-search — MCP Server (v0.1.1)
- **Attribution:** Contributed to OpenIdea. **Status:** Publicly live on PyPI. `[user-confirmed]`
- **URL:** [[PH-03]] (PyPI page; known from resume: pypi.org/project/mcp-openidea-search/0.1.1 — confirm live) `[resume-claim]`
- **What it does:** MCP server exposing OpenIdea's federated search (OpenAlex, arXiv, Zenodo, Software Heritage, GitHub, GitLab, HuggingFace, PapersWithCode, YouTube, CKAN, Figshare, Kaggle) to MCP clients (Claude, Cursor, MCP Inspector).
- **Tech:** Python · MCP SDK · httpx · pydantic v2 · Starlette/SSE · pytest · respx.
- **Verified scale (code):** 7 tools (search_papers/code/datasets/models/hardware/videos/all); resource URIs `openidea://<provider>:<id>`; 9 respx-mocked pytest tests; stdio + HTTP transports; wheel/sdist built. `[verified-code]`
- **Caveats:** thin client — federation/dedup/normalization happens on OpenIdea's side; "contributed" framing, not sole authorship.

### 5. Open-Barter / BarterEngine — AI Barter Matching
- **Attribution:** Prototype built during the OpenIdea internship — attribute to OpenIdea work, NOT an unrelated personal project. `[user-confirmed]`
- **URL:** https://open-barter.vercel.app/ `[user-confirmed]`
- **What it does:** matches businesses with Instagram creators for cash-free barter; dual multi-step onboarding → AI match results → campaign brief.
- **Tech:** Next.js 16 · React 19 · TypeScript · Tailwind v4 · shadcn/ui · Supabase · @google/generative-ai.
- **Verified (code):** BarterEngine = 14 scoring functions (compatibility, location, category, value balance, ROI, suitability, audience quality, reliability, content quality, brand alignment, offer attractiveness, risk, trust, negotiation) with weighted ranking; **Gemini 2.0 Flash with schema-validated outputs + deterministic fallback + 5-min TTL in-memory cache**; onboarding persisted to Supabase (note: RLS policies are wide-open — security caveat). 41 commits in 2 days, "Beta complete". `[verified-code]`
- **Caveats:** social/campaign features are mocked in-memory; no real matches/users on record; no tests.

---

## TIER 2 — KEPT ANALYTICS PROJECTS (honestly framed) `[user-confirmed]`

### Trader Behaviour Insights
- **Repo:** github.com/afx786/trader_behaviour_insights `[verified-code]`
- **Verified:** ETL of 211,224 on-chain DEX trade fills + 2,644 daily Fear&Greed rows; 32 trader accounts profiled into 11 behavior metrics (332–40,184 trades; −167K to +2.14M PnL); rule-based risk segmentation (8 High / 24 Low risk; 10 flagged for trade-sizing review; 1 auto-trade candidate); correlation heatmap. `[verified-code]`
- **DEFECT (do not claim):** Fear&Greed epoch parsing bug → sentiment join failed → all `sentiment_profile = Neutral`. Do NOT claim sentiment analysis was performed. Present as "pandas ETL + risk profiling". `[verified-code]`

### FAANG Stock Market Analysis
- **Repo:** github.com/afx786/stock_analysis_project `[verified-code]`
- **Verified:** yfinance + pandas pipeline, 2,517 daily rows / 9 big-tech tickers (2014–2024); annualized volatility (TSLA 56.1%, NVDA 48.2%, NFLX 44.0%); max drawdowns (META −76.7%, NFLX −75.9%, TSLA −73.6%); return-correlation heatmaps; normalized price curves. `[verified-code]`
- **DEFECT (do not claim):** 2 of 9 tickers empty (misspelled `ABDE`; GOOGL timeout → 5,034 NaN). Descriptive analytics only — no ML, no decisions. `[verified-code]`

---

## OPENIDEA INTERNSHIP SCOPE (built/contributed — include as context, low detail) `[user-confirmed]`

### WhatsApp → Website POC
- FastAPI scaffold demonstrating WhatsApp→OpenClaw→OpenIdea-engine→website flow; mocked backend behind clean interfaces; Meta webhook-shaped payloads; Dockerfile. `[verified-code]` `[user-confirmed inclusion]`
- Link: [[PH-05]]

### n8n LeadGen (OpenIdea)
- Automated B2B lead generation (discovery → dedupe → 0–100 scoring → no-website+phone filter → CRM). `[user-confirmed inclusion]`
- Detail metrics [[PH-04]] — previously audited (scoring rubric, 3 shipped generations, 606-lead output) but **files not in Phase 1 sources; verify before using numbers**. `[prior-audit]`

### job-automation (OpenIdea)
- Config-driven job-application automation with approval-gated outreach and a feedback loop. `[user-confirmed inclusion]`
- Detail metrics [[PH-04]]. `[prior-audit]`

### Bhojpatra (OpenIdea)
- Event/feast booking platform with marketing site, booking flow, and admin console (vendor KYC/approval, KPI dashboard). `[user-confirmed inclusion]`
- Link/detail [[PH-04]]. `[prior-audit]`

---

## DROPPED (not in portfolio) `[user-confirmed]`
- PredictoPay · KMRL Planner · House Price Prediction · SpaceX Falcon 9 · Timetable Automation

> Rationale recorded for future reference (do not advertise): PredictoPay (target leakage, model-contract mismatch); KMRL ("real Maximo" data fabricated, dummy ML); HousePrice (target was log living-area, not price); SpaceX (incomplete, no model); Timetable (core generator unimplemented, empty PRD/tests). `[verified-code]`
>
> **2026-08 update:** KMRL was re-added by user as "Automated Rail Management" (repo `automated_metro_rail_management`). It is shown with honest framing only — simulated Maximo connector, synthetic trainsets, no production claims. PredictoPay/HousePrice/SpaceX/Timetable remain dropped.

## NOT DEPLOYED (per user) `[user-confirmed]`
- MeTalks, Recipe Recommender, Dental Anomaly Detection: **no public deployment currently**. Do not claim live URLs for these. (2026-08: GitHub repos confirmed by user for Recipe Recommender and Dental Anomaly — link the repos, not a live site.)

---

## ADDED 2026-08 · Automated Rail Management (KMRL) `[user-confirmed]`
- **Repo:** github.com/afx786/automated_metro_rail_management
- **Status:** Prototype — **no public deployment** (repo only).
- **Note:** This repo contains the former `kmrl_planner_with_real_maximo` project, which was previously DROPPED. Re-added by user decision on 2026-08. Framing MUST stay honest.
- **What it is (verified README/code):** FastAPI + React prototype for KMRL (Kochi Metro) trainset maintenance planning. Consolidates trainset data, **simulated** IoT sensor readings, and job-card data; applies business rules plus ML predictions; generates an optimized nightly maintenance plan (service/standby/maintenance). 25 **synthetic** trainsets (KM01–KM25), SQLite + SQLAlchemy. Two scikit-learn models: certificate-expiry binary classifier and job-card urgency text scorer; rule-based fallback when model files missing. React (Vite) dashboard; API-key auth for admin. `[verified-code]`
- **Caveats (must not claim):** Maximo connector is **simulated/mock** — no real Maximo data; trainsets are synthetic; "production-grade metro system" is false. Do not claim real deployment or validated ML.

## ADDED 2026-08 · Dental Anomaly Detection `[user-confirmed]`
- **Repo:** github.com/afx786/dental-anomaly-detection
- **Status:** Designed & built — **no public deployment** (repo only).
- **What it is (verified code):** Streamlit app scoring dental X-rays for anomalies via a PyTorch convolutional autoencoder (256×512 grayscale, 128-dim latent); OpenCV CLAHE preprocessing; outputs anomaly score, reconstruction, anomaly heatmap. `[verified-code]`
- **Caveats:** designed/built only — **no validated results** (no accuracy/eval claims). Do not present validated clinical performance.

## ADDED 2026-08 · Recipe Recommender `[user-confirmed]`
- **Repo:** github.com/afx786/recipe_recommender_system
- **Status:** Built — **no public deployment** (repo only).
- **What it is (verified code):** Streamlit app with dual-mode recommendation — content-based (TF-IDF over ingredient lists + cosine kNN) and collaborative filtering (user-based kNN over a user-item rating matrix built from review data). `[verified-code]`
- **Caveats:** no deployment, no user metrics.