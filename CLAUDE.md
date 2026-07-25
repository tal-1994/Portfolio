# Tal Yanay — Personal Portfolio

Personal portfolio landing page for Tal Yanay, Product Designer. Plain HTML/CSS/JS — no framework, no build step. Open index.html directly in a browser to preview.

## Design direction
"Modern editorial": Inter (Google Fonts, weights 400–700), near-black ink (#141414) on warm off-white (#fafaf8), a single electric-blue accent (#2545ee), hairline-bordered flat cards that lift subtly on hover, outlined tag chips, generous whitespace. Keep it minimal and calm — no gradients, no flashy animation. It should feel personal, not corporate.

## Files
- `index.html` — home page (hero + case studies). Semantic structure only; most visible text is fallback content overwritten by script.js on load.
- `about.html` — standalone About page (portrait + about paragraphs). Shares `styles.css` and `script.js` with the home page. The "About" nav item links here; "Work" links back to `index.html#work`. Content still comes from the `portfolioData` object in script.js (`aboutPhoto`, `about`).
- `script.js` — **single source of truth for all content**, loaded by both `index.html` and `about.html`. The `portfolioData` object at the top holds name, role, hero text, case studies (title/description/tags/image/figmaLink), about paragraphs, and footer links. Edit content here, not in the HTML. Rendering code below the object is guarded so the same script runs safely on either page (it only touches elements that exist on the current page); it shouldn't need changes.
- `styles.css` — all design tokens (colors, type, spacing, radii, shadows) are CSS variables in `:root` at the top. Tweak there first before touching rules. Breakpoints: ≤1024px tablet (2-col cards), ≤640px mobile (stacked hero, 1-col cards).
- `assets/` — placeholder SVGs awaiting real images (hero photo + 4 case study covers).

## Conventions
- Case study cards are single `<a>` elements opening Figma prototypes in a new tab (`figmaLink` in portfolioData — currently "#" placeholders).
- The About nav button target is `portfolioData.nav.aboutHref` — "about.html" now; can be swapped to an external Figma URL (external links open in a new tab automatically).
- Keep accessibility intact: semantic HTML, aria-labels on cards, alt text on images, visible focus states, `prefers-reduced-motion` respected.

## Open items
- Replace "#" placeholders: 4 Figma links, Resume link, LinkedIn URL, real email in `social`.
- Replace placeholder SVGs with real imagery.
