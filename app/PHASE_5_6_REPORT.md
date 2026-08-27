# PHASE 5.6 — Make "EXPLORE MY PROFILE" Header Bar Black

## Change
- `components/track-selector.tsx`: Changed header bar from `border-b border-line` with `text-mid` to `bg-ink` with `text-canvas`

## Before
```tsx
<div className="border-b border-line px-5 py-3 md:px-6 md:py-3.5">
  <div className="font-mono text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] text-mid">
```

## After
```tsx
<div className="bg-ink px-5 py-3 md:px-6 md:py-3.5">
  <div className="font-mono text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] text-canvas">
```

## Test Results

| Check | Result |
|-------|--------|
| Lint | PASS |
| Build | PASS |
| Blacklist | 15/15 PASS |
| Header black bg | PASS (rgb(0, 0, 0)) |
| Header white text | PASS (rgb(255, 255, 255)) |
| Tabs unchanged | PASS |
| Mobile 320px | PASS (no overflow) |
| Mobile 375px | PASS (no overflow) |
| Track pages | PASS (all 3 routes) |
| Navigation | PASS |
| Console errors | 0 |

## Screenshot Verification
- Desktop 1440px: Black header bar visible, white text readable, tabs unchanged
- Mobile 320px: Black header bar visible, stacked tabs unchanged

## Do NOT deploy.
