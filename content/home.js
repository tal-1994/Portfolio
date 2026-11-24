/* ============================================================================
   HOMEPAGE CONTENT  (index.html)
   ----------------------------------------------------------------------------
   Everything you can read on the homepage, in the same top-to-bottom order as
   the page: hero → selected work (4 cards) → about.
   The nav and the contact/footer live in shared.js.

   Editing tips:
   • Change the text between the quotes. Keep the quotes and the comma.
   • A few values contain small HTML on purpose:
       <br>                     = line break
       &#8217;                  = curly apostrophe (’)
       &amp;                    = & symbol
       &nbsp;                   = a space that never breaks across lines
       <span class="arrow">↗</span> on a card button = the little arrow icon
     Leave that markup as-is unless you mean to change it; just edit the words.
   • Image files (the card pictures, the portraits) are NOT here — they live in
     assets/ and are set in the HTML. Here you edit each image's alt text (the
     description used for accessibility and SEO).
   ========================================================================== */
window.CONTENT = window.CONTENT || {};

window.CONTENT.home = {

  /* ----- HERO (top of the page) ----------------------------------------- */
  hero: {
    greeting: "Hey,<br>I&#8217;m Tal",
    portraitAlt: "Portrait of Tal Yanay.",
    headline: "Senior Product Designer <br>&amp; Builder.",
    // The little bar before the words is decorative — edit "See the work".
    seeWork: "<span class=\"bar\" aria-hidden=\"true\"></span> See the work",
  },

  /* ----- SELECTED WORK -------------------------------------------------- */
  work: {
    heading: "Selected work",
    note: "Design systems, complex SaaS, and data products.",

    /* The four cards, in the order they appear. Each card has:
         number      – the 01–04 label
         category    – the small uppercase tags line
         title       – the card heading
         standfirst  – the one-line description under the title
         impact      – the quoted outcome line
         cta         – the button text (the ↗ arrow is decorative)
         href        – where the card links to
         ariaLabel   – spoken description for screen readers
         imageAlt    – description of the card's picture              */
    exhibits: {

      // Card 01 — opens the case study page (same tab)
      designSystem: {
        number: "01",
        category: "Design Systems, Design Ops, Tokens",
        title: "Rebuilding Agora&#8217;s Design System",
        standfirst: "One source of truth: leading the rebuild of an outdated Figma kit into a living design system shared by design and development.",
        impact: "One source of truth in Figma and Storybook that design and code build on.",
        cta: "Read the case study <span class=\"arrow\" aria-hidden=\"true\">&#8599;</span>",
        href: "design-system-case-study.html",
        ariaLabel: "Read the case study: One Source of Truth, Rebuilding Agora's Design System",
        imageAlt: "The rebuilt Agora design system: a matrix of Input component states in Figma, its properties panel, and the component documented in Storybook.",
      },

      // Card 02 — opens a Figma prototype (new tab)
      import: {
        number: "02",
        category: "UI/UX, UX Research, User Testing",
        title: "Import Experience",
        standfirst: "Helping teams import complex data with more control, confidence, and fewer mistakes.",
        impact: "Fewer failed imports and support tickets by giving teams control before their data lands.",
        cta: "Open the prototype <span class=\"arrow\" aria-hidden=\"true\">&#8599;</span>",
        href: "https://www.figma.com/proto/7P5aqn9a7O2yC875AsKbrv/%F0%9F%8E%A8-Portfolio-design?page-id=308%3A1651&node-id=1701-15362&viewport=5214%2C75%2C0.19&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1701%3A15362",
        ariaLabel: "Open the Figma prototype: Import Experience (opens in a new tab)",
        imageAlt: "The Import Experience, two data-import review tables floating on a blue field.",
      },

      // Card 03 — opens a Figma prototype (new tab)
      customMetrics: {
        number: "03",
        category: "Product Design, Financial Data, UX Flows",
        title: "Custom Metrics",
        standfirst: "A KPI system you can trust. Turning inconsistent, per-property KPIs into consistent portfolio numbers, without falling back to Excel.",
        impact: "Replaced spreadsheet workarounds with portfolio KPIs teams actually trust.",
        cta: "Open the prototype <span class=\"arrow\" aria-hidden=\"true\">&#8599;</span>",
        href: "https://www.figma.com/proto/7P5aqn9a7O2yC875AsKbrv/%F0%9F%8E%A8-Portfolio-design?page-id=308%3A1651&node-id=1947-53513&viewport=12939%2C-9706%2C0.3&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=607%3A16155",
        ariaLabel: "Open the Figma prototype: Custom Metrics, a KPI system you can trust (opens in a new tab)",
        imageAlt: "The Custom Metrics KPI table, financial figures on a yellow field.",
      },

      // Card 04 — opens a Figma prototype (new tab)
      investorPortal: {
        number: "04",
        category: "UX Research, Data Visualization, Modular Design",
        title: "Investor Portal",
        standfirst: "A modular data experience. Turning complex investment data into a modular dashboard that adapts to how each investor works.",
        impact: "A modular dashboard investors can shape around how they actually read their data.",
        cta: "Open the prototype <span class=\"arrow\" aria-hidden=\"true\">&#8599;</span>",
        href: "https://www.figma.com/proto/7P5aqn9a7O2yC875AsKbrv/%F0%9F%8E%A8-Portfolio-design?page-id=308%3A1651&node-id=607-16155&viewport=19441%2C-4615%2C0.44&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=607%3A16155",
        ariaLabel: "Open the Figma prototype: Investor Portal, a modular data experience (opens in a new tab)",
        imageAlt: "The Investor Portal dashboard, cashflow chart and a live offering card on a teal field.",
      },
    },
  },

  /* ----- ABOUT ---------------------------------------------------------- */
  about: {
    portraitAlt: "Portrait of Tal Yanay.",
    heading: "I like making sense of complicated things.",
    lead: "Hi, I&#8217;m Tal. I&#8217;m a product designer who asks a lot of questions, loves getting into the details, and enjoys making complicated things feel simple.",
    // The three main paragraphs, in order.
    body: [
      "I&#8217;ve spent the past 4+&nbsp;years designing complex B2B SaaS products, working closely with PMs and engineers. I love being involved in the whole process, from understanding the problem to seeing something we worked on come to life. AI is now part of how I think and work as a designer. It helps me explore different directions, challenge my ideas, and build working prototypes instead of just imagining how something might work.",
      "I have a master&#8217;s degree in Human-Computer Interaction from Reichman University, where I got to explore the research and psychology behind how people interact with technology. That curiosity is still a big part of how I approach design.",
      "Outside of work, I love trying new things and learning as I go. My latest obsession is tennis, and I&#8217;m getting pretty hooked.",
    ],
    status: "I&#8217;m currently looking for my next opportunity to work with good people and build great products together.",
  },
};
