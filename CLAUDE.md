# Tal Yanay — Personal Portfolio

Personal portfolio for Tal Yanay, Product Designer. Plain HTML/CSS/JS — no
framework, no build step. Open `index.html` directly in a browser to preview.
Hosted on GitHub Pages (`tal-1994/Portfolio`), served from the repo root.

## Design direction
"Gallery (light)": a bright white-cube feel. Display type is **Bricolage
Grotesque**, body is **Inter** (both Google Fonts). Near-black ink (#141414) on a
cool soft white (#f6f7f7); monochrome shell — the only colour comes from the work
thumbnails themselves. Hairline borders, generous whitespace, subtle reveal
motion (content "unveiled," not announced). Keep it minimal and calm — no
gradients, no flashy animation. `prefers-reduced-motion` is respected.

## Files (what's live)
- `index.html` — **THE main file.** The entire live homepage: hero, selected
  work (4 exhibits), About section, and Contact footer, all on one page. It is
  **self-contained** — all CSS and JS are inline. Edit content, styling, and
  behaviour directly in this file (design tokens live in the `:root` block near
  the top of its `<style>`).
- `design-system-case-study.html` — the one subpage, linked from work card #01.
  Also self-contained (its own inline CSS/JS). Its nav links back to
  `index.html#work` and `index.html#about`.
- `assets/` — images used by the live pages (work thumbnails, portrait, favicon,
  `tal dark image.png`). Also holds some unused placeholder SVGs from the old
  design.

## archive/ (not published — kept on disk only)
Git-ignored, so it stays locally for reference but is not deployed:
- `archive/old-design/` — the previous design: old `about.html` plus its
  `script.js` / `styles.css` / `support.js`. No longer used by the live site.
- `archive/explorations/` — past design explorations, including
  `portfolio-v1.html` (the source the current `index.html` was built from) and
  `old/` concept experiments.

## Conventions
- Work cards are single `<a>` elements. Card #01 opens the case study page in the
  same tab; the other three open Figma prototypes in a new tab
  (`target="_blank" rel="noopener noreferrer"`).
- Keep accessibility intact: semantic HTML, aria-labels on cards, alt text on
  images, visible focus states, `prefers-reduced-motion` respected.

## Open items
- The "Resume" link in the contact footer is still a `#` placeholder.
- Contact email is the personal `talyanay10@gmail.com` (consistent across pages).
