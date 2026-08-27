# PHASE 5.7 — Replace Resume Links with Google Drive

## Files Changed
- `lib/content.ts`: Updated resume URLs to exact Google Drive links
- `components/resume-modal.tsx`: "Link pending" → "COMING SOON", "Download" → "VIEW RESUME"

## Changes

### AI/ML Engineer
- Old: `https://drive.google.com/file/d/1bWHOOYZiG7icwgxhQKIS4LJa0OLCe4p4/view?usp=drive_link`
- New: `https://drive.google.com/file/d/1bWHOOYZiG7icwgxhQKIS4LJa0OLCe4p4/view?usp=drivesdk`

### Data Scientist / Analyst
- Old: `https://drive.google.com/file/d/1FJO1_g-gI-ds9ob_gJlWygsWRznoRRIT/view?usp=sharing`
- New: `https://drive.google.com/file/d/1FJO1_g-gI-ds9ob_gJlWygsWRznoRRIT/view?usp=drivesdk`

### Product Manager
- Status: COMING SOON (not clickable, visually disabled)
- No URL, no fake link

## Test Results

| Check | Result |
|-------|--------|
| Lint | PASS |
| Build | PASS |
| Blacklist | 15/15 PASS |
| Modal opens | PASS |
| 3 options | PASS |
| AI/ML link correct | PASS |
| AI/ML new tab | PASS |
| Data link correct | PASS |
| Data new tab | PASS |
| Product COMING SOON | PASS |
| Product no link | PASS |
| VIEW RESUME buttons | 2 |
| All routes 200 | PASS |
| Console errors | 0 |

## Do NOT deploy.
