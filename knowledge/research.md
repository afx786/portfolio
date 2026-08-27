# knowledge/research.md — Research Database

**Version:** v1.0 · Status: CANONICAL

## Published Paper (feature in portfolio)

- **Title:** *A Machine Learning Approach to Classifying Stress Levels Using Psychological and Non-Psychological Features*
- **Venue:** Journal of Intelligent Computing System (JICS), Vol. 1, Issue 2, pp. 08–13, May 2026. `[verified-paper]`
- **Authors:** Siddharth Kumar, **Aaqib Abdullah (2nd author)**, Maneet Singh* — Dept. of Information Technology, Gautam Buddha University, Greater Noida, India. `[verified-paper]`
- **Co-author approval to feature on personal portfolio: CONFIRMED.** `[user-confirmed]`
- **Link:** Google Drive — https://drive.google.com/file/d/1l2QhNG4DW_pXLyqfU9wB9QUgBdiHusWC/view?usp=drive_link `[user-confirmed]`
- **Journal issue page / DOI:** [[PH-02]]

### Summary (for accurate description)
- **Data:** self-administered online survey (1–10 Nov 2025), **110 completed responses**; demographic + lifestyle + all 21 USS (University Stress Scale) items + self-reported stress. `[verified-paper]`
- **Method:** 4 classifiers (Logistic Regression, SVM, Random Forest, XGBoost) × 3 feature configurations (Model A: non-psychological only; Model B: USS-21 psychological only; Full: combined). 80:20 train/test. Metrics: accuracy, weighted F1, MCC. `[verified-paper]`
- **Results:** Full feature set → XGBoost best (Accuracy 0.695, MCC 0.557, weighted F1 0.694). Model B (psychological only) → highest accuracy/F1 (0.739/0.739) but lower MCC (0.355). Model A → 0.565/0.363/0.564. `[verified-paper]`
- **Additional finding:** self-reported vs USS-derived stress disagreed for a subset of students (43 high/high, 35 low/low, 23 self-high/USS-low, 9 self-low/USS-high), supporting the paper's argument that structured scales + ML are more reliable than self-report alone. `[verified-paper]`
- **Dataset:** available from corresponding author on reasonable request. `[verified-paper]` `[user-confirmed]`

### Accurate headline numbers (safe to use)
- XGBoost on full feature set: **Accuracy 0.695, MCC 0.557, F1 0.694**.
- Psychological-only (USS-21) model: **Accuracy 0.739**.
- Sample: **110 survey responses**.

### Forbidden (contradicted by the paper)
- "IEEE Access" (venue is JICS) — REMOVE.
- "2022" (paper is May 2026) — REMOVE.
- "wearable sensor data" (study used survey data, not wearables) — REMOVE.
- "92% F1-score" (no such result in the paper) — REMOVE.

## Ongoing / Excluded
- **"Evaluating LLM Biases in Automated Code Review Systems":** ongoing study — **DO NOT INCLUDE in portfolio.** `[user-confirmed]`

## Internal Research (OpenIdea internship, optional context)
- ONDC Buyer App UX research document (deep-research harness: 69 claims extracted, 25 verified — 18 confirmed / 7 refuted). `[verified-code]` — may be cited as part of internship work if desired; not required. `[user-confirmed scope]`