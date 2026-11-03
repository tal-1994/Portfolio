# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience is **mixed**, and the portfolio must serve all three reader types at once:

- **Hiring managers & design leads** — review the work in depth, care about process, craft, and how Tal thinks. They are the ones who make the call.
- **Recruiters & talent teams** — first-pass screeners who skim fast for fit and signal. The pitch must be legible in seconds.
- **Founders & product leaders** — hiring a versatile designer who can own and ship end-to-end.

All of them are evaluating Tal Yanay for her next product-design role. She is actively job-seeking ("currently looking for my next opportunity to help teams ship better products").

## Product Purpose

A personal portfolio landing experience whose job is to win Tal her next product-design role. It must simultaneously reward a deep reviewer (enough substance and craft to justify an interview) and survive a 10-second skim (the pitch clear immediately). Success = qualified interest and interviews from the kinds of teams Tal wants to work with.

## Positioning

The differentiating claim is the **combination**, carried in balance rather than over-indexing on any one leg:

1. **A designer who ships real products** — takes an idea from a messy whiteboard all the way to working software, with AI as a real part of how she works (design *and* build, end-to-end).
2. **Rigor on complex SaaS** — can untangle genuinely hard product problems: complex workflows, many stakeholders, endless edge cases.
3. **Systems & craft depth** — design systems, data-heavy UI, meticulous craft (design-ops / systems thinking).

A neighboring "product designer" portfolio could claim any one of these; the position is holding all three credibly at once — the designer who also builds, on hard SaaS surfaces, with systems discipline.

## Operating Context

- Reviewers arrive from LinkedIn, a resume, or a referral and land on the home page.
- They skim on both desktop and mobile; scanability matters as much as depth.
- Depth lives one click away: each case study opens a Figma prototype (or a dedicated case-study page) in a new tab.
- The portrait + About page carry the personal, human read of who Tal is.

## Capabilities and Constraints

- Static site: plain HTML/CSS/JS, no framework and no build step — open the HTML directly in a browser to preview.
- All home/About content is centralized in the `portfolioData` object in `script.js` (single source of truth), rendered into both `index.html` and `about.html`.
- Four case studies are real and backed by live Figma prototype links; one (Design System) also has a dedicated HTML case-study page. **These case studies and their links must be preserved** across any future design work.
- Open product facts still unresolved (do not fabricate): real Resume link, LinkedIn URL, and final email are placeholders in `social`; some imagery is still placeholder SVGs.
- A redesign exploration is in progress under `explorations/` (four concept directions); no direction has been chosen yet.

## Brand Commitments

- Name **Tal Yanay**, role **Product Designer** — fixed.
- Voice is warm, personal, and first-person ("Hi, I'm Tal…") — curious, detail-oriented, candid. Keep it personal, not corporate.
- The **visual system is not locked** — the current editorial look (Inter, warm off-white, electric-blue accent) is open to being reimagined. Only product truth, content, and the case studies carry forward.

## Evidence on Hand

- Four real case studies drawn from Tal's work at Agora (a real-estate investment-management SaaS): rebuilding Agora's design system, the Import Experience, Custom Metrics (a trustworthy KPI system), and the Investor Portal (modular data dashboard). All have live Figma prototypes; paths in `script.js`.
- Dedicated case-study page: `design-system-case-study.html`.
- Portrait photo of Tal (`assets/`).
- No testimonials, named clients, hiring-outcome metrics, or benchmark claims are currently asserted — none exist on hand, so future work must not invent them.

## Product Principles

- **Legible in seconds, rewarding on a scroll** — serve the fast skim and the deep review from the same page; never force a reader to dig for the pitch.
- **Show the shipping, not just the pixels** — prioritize evidence that Tal takes work all the way to something real; let the case studies and prototypes do the proving.
- **Hold the three legs in balance** — builds, complex-SaaS rigor, and systems/craft; don't let one swallow the others.
- **Personal over corporate** — the warmth and first-person candor are an asset, not a liability; keep them.
- **Preserve the proof** — case studies, prototype links, and factual content survive any redesign untouched.

## Accessibility & Inclusion

Existing, intended to persist: semantic HTML, aria-labels on interactive cards, alt text on all imagery, visible focus states, and `prefers-reduced-motion` honored for the intro animation and hover motion.
