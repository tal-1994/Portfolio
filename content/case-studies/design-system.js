/* ============================================================================
   CASE STUDY  —  Agora Design System  (design-system-case-study.html)
   ----------------------------------------------------------------------------
   All the written content of the case study, in the same order as the page:
     hero → My role → 01 The challenge → 02 Foundations →
     03 Component rebuild → 04 Leading the rebuild across teams →
     05 Outcome & evolution (incl. the before/after slider & captions)
   The nav and the contact/footer at the bottom live in shared.js.

   Editing tips:
   • Edit the words between the quotes; keep the quotes and the comma.
   • "body" is a list of paragraphs — each item in [ ... ] is one paragraph,
     shown in order. To add a paragraph, copy a line and edit it.
   • Small HTML you may see inside the text (leave as-is unless intended):
       <br> line break · <strong>bold</strong> · &rsquo; ’ · &amp; & ·
       &ndash; – · &lsquo; ‘ · — em dash
   • Image files live in assets/ and are set in the HTML. Here you edit each
     image's alt text (its description) and the caption shown beneath it.

   NOTE — a few strings are NOT here on purpose. The before/after slider's
   live "50% before, 50% after" readout and the lightbox's full-size image
   descriptions are built inside the page's JavaScript because they change as
   you drag/toggle. Those are the only pieces of copy that live in the HTML
   file's <script>, not in this file.
   ========================================================================== */
window.CONTENT = window.CONTENT || {};
window.CONTENT.caseStudies = window.CONTENT.caseStudies || {};

window.CONTENT.caseStudies.designSystem = {

  /* ----- HERO ----------------------------------------------------------- */
  hero: {
    label: "Design System / Agora",
    title: "Rebuilding<br>Agora&rsquo;s<br>Design System",
    sub: "From an outdated Figma library to a shared system that designers and developers actually use.",
    // The three fact pairs under the title.
    meta: [
      { label: "Role", value: "Design System Lead" },
      { label: "Team", value: "4 designers + Frontend Lead" },
      { label: "Timeline", value: "One quarter" },
    ],
    artAlt: "Agora's design system in Figma and Storybook: the Input and Select family built across every size and state, its component-properties panel, the semantic colour tokens, and the coded component in Storybook.",
  },

  /* ----- MY ROLE -------------------------------------------------------- */
  role: {
    kicker: "My role",
    lead: "I led the design-side execution of Agora&rsquo;s design system rebuild, coordinating contributions across four designers while personally designing more than 20 components. I established the review process and shared conventions, and worked closely with frontend to keep Figma and Storybook aligned.",
  },

  /* ----- 01 · THE CHALLENGE --------------------------------------------- */
  challenge: {
    kicker: "The challenge",
    heading: "The product had outgrown its design system",
    body: [
      "As Agora grew, its design system stopped keeping pace. The Figma library was outdated, components were inconsistent, and there was no reliable shared reference between design and development.",
      "That gap showed up in the product and in the way we worked. Developers often rebuilt UI that already existed elsewhere, leading to duplicate work and different implementations of the same components across the product.",
      "We had known the system would eventually need a proper rebuild as the product matured. Once it became a roadmap priority, I took over the design-side execution, building on the initial audit-and-rebuild approach defined by our design team lead.",
    ],
  },

  /* ----- 02 · FOUNDATIONS ----------------------------------------------- */
  foundations: {
    kicker: "Foundations",
    heading: "Building the foundation the system needed",
    body: [
      "We started with a two-tier token structure: primitives for raw values and semantic tokens for how those values are used. The new foundation included 133 primitives and 151 semantic tokens.",
      "We worked with frontend to establish naming conventions that made sense in both Figma and code.",
      "The architecture evolved as we applied it. Our initial semantic names were fairly generic, but once we started using them in real components, we found cases where they weren&rsquo;t specific enough. We introduced component-specific tokens where they made the system clearer and easier to work with.",
      "We also made a deliberate decision not to support light and dark themes. The product didn&rsquo;t need them, and adding that complexity wouldn&rsquo;t have solved a real problem.",
    ],
    imageAlt: "The Figma Variables panel for Agora's design system: collections for 133 primitives, 151 tokens, 22 typography and 52 text styles, with the brand agora_orange ramp from 100 (#FEF3E6) down to 1000 (#6D3E02).",
    insetAlt: "Close-up of semantic colour tokens: text roles — error, warning, success, info and pro — each mapped to a primitive such as supporting/red/600 or supporting/orange/600.",
    caption: "The token foundation in Figma: 133 primitives feeding 151 semantic tokens, with a closer look at how a semantic name maps back to a primitive value.",
  },

  /* ----- 03 · COMPONENT REBUILD ----------------------------------------- */
  rebuild: {
    kicker: "Component rebuild",
    heading: "Rebuilding components for real product use",
    // Paragraphs above the full-width component sheet image.
    intro: [
      "With the foundations in place, we rebuilt around 65 components. My role was not only to design parts of the system, but to help shape how those components should be structured, named, and used.",
      "I personally designed more than 20 components, including some of the more complex ones, and helped establish the standards the rest of the library would follow.",
    ],
    imageAlt: "The Agora Atomic Design System file in Figma: the full controls library listed down the side — button, split button, checkbox, radio, switch, input and select, menu and more — beside the base component's architecture flow chart and the input field families built out across every state.",
    caption: "The working component file in Figma: the controls library down the side, the base component&rsquo;s architecture, and each family built out across every state.",
    // Paragraphs below the image.
    body: [
      "A big part of the work was untangling existing patterns, clarifying component behavior, and defining consistent variants and states. Some decisions involved distinguishing overlapping patterns, such as Select, Menu, and Dropdown. Others came from testing components in real product screens and discovering missing states or behaviors we hadn&rsquo;t accounted for.",
      "This rebuild wasn&rsquo;t just about visual consistency. It was about creating a component library that designers could understand, reuse, and rely on.",
    ],
  },

  /* ----- 04 · LEADING THE REBUILD ACROSS TEAMS -------------------------- */
  leading: {
    kicker: "Leading the rebuild across teams",
    heading: "Keeping the work consistent",
    processCaption: "The shared process behind the rebuild",
    body: [
      "Because four designers were contributing to the system alongside their regular product work, one of my biggest responsibilities was keeping the work consistent across different people.",
      "I created a Notion tracker to manage ownership and progress, and established a review process to make sure components followed the same standards, from variant naming and component structure to states and behavior.",
      "That process often required several rounds of feedback. Even when a component looked right in isolation, placing it in real product screens often exposed gaps or edge cases. I used those reviews to keep refining the system and maintaining a consistent standard across the library.",
      "I also kept the initiative moving through a dedicated Slack channel, team check-ins, and one-on-one reviews, making sure the design system kept progressing alongside our feature work.",
    ],
    trackerAlt: "The Notion tracker &lsquo;DS Components 2025&ndash;26&rsquo;: each component in a row — attachment, avatar, badge, banner, button, card, checkbox and more — with its design owner, developer, Storybook state, component status, epic, priority and Figma link. Owner and developer names are blurred.",
    trackerCaption: "The tracker I ran the initiative from: every component with an owner, a status, and its handoff state.",

    // The sub-section "Bringing design and code together".
    subheading: "Bringing design and code together",
    codeBody: [
      "Another key part of my role was keeping design and development aligned.",
      "Together with our frontend lead, we decided to introduce Storybook as a shared reference for the actual coded components. Since there was no automated sync between Figma and Storybook, I worked closely with frontend to review implementations, identify visual or behavioral gaps, and make sure the coded components matched the system we were building.",
    ],
    storybookAlt: "The Agorabook (Storybook) view of the coded BaseSelect component: a live preview above its controls table — placeholder, size, variant, status, disabled, loading and clearable — checked against the Figma component.",
    storybookCaption: "Storybook as the shared reference: the coded component with its states and live controls, checked against Figma.",
  },

  /* ----- 05 · OUTCOME & EVOLUTION --------------------------------------- */
  outcome: {
    kicker: "Outcome &amp; evolution",
    heading: "A system we actively use",
    body: [
      "The biggest change is in how we work day to day.",
      "Designers now know which components exist and what they support, which makes it much easier to design new features without recreating the basics.",
      "Developers actively use Storybook as their implementation reference instead of independently rebuilding UI. New work starts from the shared system, while older parts of the product continue to be migrated gradually.",
      "The system also continues to evolve. When we discover that a component is missing a state or behavior, I review whether it should be extended, design the addition, and turn it into a clear development task.",
      "The rebuild gave us a stronger foundation, but maintaining and improving it is still part of my work.",
    ],

    // The before/after slider ("The system in practice").
    practiceHead: "The system in practice",
    afterAlt: "The redesigned CRM contact workspace: a cleaner activity timeline with pinned items, grouped sections and consistent components built from the new design system.",
    beforeAlt: "The same CRM contact workspace before the redesign, using the older filter-pill layout and less consistent components.",
    handleAria: "Drag to compare the CRM workspace before and after the redesign",
    // These two words label the slider tags, the mobile toggle and the lightbox toggle.
    beforeLabel: "Before",
    afterLabel: "After",
    zoomAria: "Open the CRM screenshots at full size",
    zoomLabel: "Enlarge",
    caption: "One example from Agora&rsquo;s CRM: the same screen before and after its redesign, showing the updated components in a real product context.",

    // The closing line.
    statement: "The design system is no longer just a Figma library. It has become part of how we build the product.",

    // The full-size pop-up (lightbox) controls.
    lightbox: {
      dialogAria: "CRM workspace screenshots, full size",
      closeAria: "Close enlarged view",
    },
  },
};
