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
  work (sticky project index left + 4 covers right, from workshop option E),
  About (workshop A3 "Side facts", strip layout on a #f2f2f2 band, with a small
  green "available" dot, the one non-thumbnail colour), and Contact footer
  (with the address written out), all on one page. CSS and
  behaviour (JS) are inline; the **written copy is externalized** to `content/`
  (see below) and injected on load, so the body text here is empty elements
  carrying `data-c="…"` hooks. Edit styling/behaviour here (design tokens live in
  the `:root` block near the top of its `<style>`); edit **copy in `content/`**.
- `design-system-case-study.html` — the one subpage, linked from work card #01.
  Same arrangement (inline CSS/JS, copy injected from `content/`). Its nav links
  back to `index.html#work` and `index.html#about`.

## content/ (centralized, editable website copy)
Plain commented JS loaded as classic `<script>`s (no build step; works under
`file://`). Edit copy here, refresh the page, done. See `content/README.md`.
- `content/home.js` — homepage copy (hero, 4 work cards, About).
- `content/case-studies/design-system.js` — the case study's copy (hero, My role,
  5 chapters, slider captions/labels).
- `content/shared.js` — nav + contact/footer copy (shown on both pages, written once).
- `content/inject.js` — the shared injector that writes each value into the element
  whose `data-c` attribute points at it. (Infrastructure — not copy.)
- Exceptions kept in the page JS on purpose: the before/after slider's live
  "% before/after" read-out, the lightbox's full-size image descriptions, and the
  slider's inline "Enlarge" label (tied to a control/icon, not editorial copy).
- `assets/` — images used by the live pages, organized by purpose:
  - `assets/favicon.svg` — site favicon.
  - `assets/thumbnails/` — homepage work-card covers (`import-experience.png`,
    `custom-metrics.png`, `investor-portal.png`). Card #01's cover is the design
    system hero (`design system images/hero/full-hero.webp`).
  - `assets/portrait/` — personal photos (`greet-color.png` for the hero greeting,
    `about.png` for the About section).
  - `assets/design system images/` — case-study imagery, grouped by chapter
    (`hero/`, `foundations/`, `components/`, `collaboration/`, `outcome/`). Each
    chapter serves a `.webp` to the page and keeps the lossless PNG master in a
    sibling `source/` folder.
  - `assets/templates/` — the case-study cover template used to render card covers.
  - `assets/Screen Recording 2026-11-06 .mov` — stray screen recording, not
    referenced by the site (left in place pending review).

## archive/ (not published — kept on disk only)
Git-ignored, so it stays locally for reference but is not deployed:
- `archive/old-design/` — the previous design: old `about.html` plus its
  `script.js` / `styles.css` / `support.js`. No longer used by the live site.
- `archive/explorations/` — past design explorations, including
  `portfolio-v1.html` (the source the current `index.html` was built from) and
  `old/` concept experiments.
- `archive/old-assets/` — superseded standalone images: the old design-system
  thumbnail, retired case-cover SVGs (`case-*.svg`), the `hero-placeholder.svg`,
  the unused B/W greet photo, old portrait iterations, and `portrait.jpg` (now
  only referenced by `archive/old-design/about.html`).
- `archive/design-system-images/` — earlier hero experiments and the superseded
  flat PNGs replaced by the chaptered `assets/design system images/` structure.
- `archive/review-screenshots/` — QA/inspector screenshots, never part of the
  live site.

## Conventions
- Work cards are single `<a>` elements. Card #01 opens the case study page in the
  same tab; the other three open Figma prototypes in a new tab
  (`target="_blank" rel="noopener noreferrer"`).
- Keep accessibility intact: semantic HTML, aria-labels on cards, alt text on
  images, visible focus states, `prefers-reduced-motion` respected.

## Open items
- The "Resume" link in the contact footer is still a `#` placeholder.
- Contact email is the personal `talyanay10@gmail.com` (consistent across pages).
