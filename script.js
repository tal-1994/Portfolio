/* ==========================================================================
   TAL YANAY — PORTFOLIO CONTENT
   --------------------------------------------------------------------------
   ⭐ THIS IS THE ONLY PLACE YOU NEED TO EDIT CONTENT. ⭐
   Everything below (name, hero text, case studies, links) is rendered
   into the page automatically. Edit the portfolioData object and refresh.
   ========================================================================== */

const portfolioData = {

  /* ----- BASICS ----------------------------------------------------------- */
  name: "Tal Yanay",
  role: "Product Designer",

  /* ----- NAVIGATION -------------------------------------------------------
     aboutHref: where the "About" nav button goes.
     • Keep "#about" to scroll to the About section on this page.
     • Later, swap it for a Figma prototype URL or "about.html" —
       external links (starting with http) open in a new tab automatically. */
  nav: {
    aboutHref: "about.html",
  },

  /* ----- HERO -------------------------------------------------------------- */
  hero: {
    // The last word is wrapped in <em> so it renders in Lora italic.
    headline: "I’m Tal, a product designer who <em>builds</em>",
    lead:
      "I design complex product flows and build them into working products, with AI part of how I work.",
    sub:
      "Over 4+ years I’ve worked on products with complex workflows, many stakeholders, and endless edge cases. Now I can take an idea all the way to what ships and making it real was always the fun part.",
  },

  /* ----- WORK SECTION ------------------------------------------------------ */
  //workIntro: "A few problems I’ve enjoyed untangling.", 

  /* ----- CASE STUDIES ------------------------------------------------------
     To add a card: copy one { ... } block, paste it below, edit, done.
     figmaLink: paste your Figma prototype URL (replace the # placeholder). */
  caseStudies: [
    {
      title: "Import Experience",
      description:
        "Helping teams import complex data with more control, confidence, and fewer mistakes.",
      tags: ["UI/UX", "UX Research", "User Testing"],
      image: "assets/ImportExperience- thumbnail.png",     // ← swap for your image
      imageAlt: "Preview of the Import Experience case study",
      figmaLink: "https://www.figma.com/proto/7P5aqn9a7O2yC875AsKbrv/%F0%9F%8E%A8-Portfolio-design?page-id=308%3A1651&node-id=1701-15362&viewport=5214%2C75%2C0.19&t=JU3SU9oyW0ihEQv9-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1701%3A15362&show-proto-sidebar=1",
    },
    {
      title: "Custom Metrics: a KPI system you can trust",
      description:
        "Turning inconsistent, per-property KPIs into consistent portfolio numbers, without falling back to Excel.",
      tags: ["Product Design", "Financial Data", "UX Flows"],
      image: "assets/Custom metrics - thumbnail.png",
      imageAlt: "Preview of the Custom Metrics case study",
      figmaLink: "https://www.figma.com/proto/7P5aqn9a7O2yC875AsKbrv/%F0%9F%8E%A8-Portfolio-design?page-id=308%3A1651&node-id=1947-53513&viewport=12939%2C-9706%2C0.3&t=O3gqF4hnWTQw6NCf-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=607%3A16155&show-proto-sidebar=1",
    },
    {
      title: "Investor Portal: a modular data experience",
      description:
        "Turning complex investment data into a modular dashboard that adapts to how each investor works.",
      tags: ["UX Research", "Data Visualization", "Modular Design"],
      image: "assets/Investor portal - Thumbnail.png",
      imageAlt: "Preview of the Investor Portal case study",
      figmaLink: "https://www.figma.com/proto/7P5aqn9a7O2yC875AsKbrv/%F0%9F%8E%A8-Portfolio-design?page-id=308%3A1651&node-id=607-16155&viewport=19441%2C-4615%2C0.44&t=0j5tb5i1vIM3Wdwq-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=607%3A16155&show-proto-sidebar=1",
    },
  ],

  /* ----- ABOUT -------------------------------------------------------------
     aboutPhoto: portrait shown next to the About text.
     Each string in the about array becomes its own paragraph. */
  aboutPhoto: {
    image: "assets/דיוקן טל.jpg",       // ← swap for your photo, e.g. "assets/tal.jpg"
    imageAlt: "Portrait of Tal Yanay",
  },
  about: [
    "Hi, I’m Tal Yanay. I’m a product designer who genuinely enjoys the messy middle of building software.",
    "I care about the details, ask a lot of questions, and like working closely with PMs and engineers. These days I take an idea from a messy whiteboard all the way to something that actually runs, with AI as a real part of how I work. Over the past 4+ years I’ve designed SaaS products with complex workflows, multiple stakeholders, and plenty of edge cases.",
    "I’m endlessly curious and always picking up a new tool or skill. Away from the screen, I love trying things that are new and a little exciting. That itch got me surfing for a while. Right now it’s tennis, and I’m completely hooked.",
    "I’m currently looking for my next opportunity to help teams ship better products.",
  ],

  /* ----- FOOTER / SOCIAL LINKS ---------------------------------------------
     href examples:
     • Resume:   "assets/tal-yanay-resume.pdf"
     • LinkedIn: "https://www.linkedin.com/in/your-profile"
     • Email:    "mailto:tal@example.com"                                    */
  footerNote: "Thanks for stopping by.",
  social: [
    { label: "Resume", href: "#" },              // ← PASTE RESUME LINK HERE
    { label: "LinkedIn", href: "#" },            // ← PASTE LINKEDIN URL HERE
    { label: "Email", href: "mailto:tal@example.com" },  // ← YOUR EMAIL HERE
  ],
};

/* ==========================================================================
   RENDERING — you shouldn't need to touch anything below this line.
   ========================================================================== */

function isExternal(href) {
  return /^https?:\/\//i.test(href);
}

/* Small helpers so this one script can safely run on any page —
   home page (hero + cards) and About page (portrait + text) —
   without erroring on elements that only live on the other page. */
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}
function setHTML(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = value;
}

/* ----- Basics + hero (hero only exists on the home page) ----- */
setText("nav-logo", portfolioData.name);
setText("hero-role", portfolioData.role);
setHTML("hero-headline", portfolioData.hero.headline);
setText("hero-lead", portfolioData.hero.lead);
setText("hero-sub", portfolioData.hero.sub);

/* ----- About nav link (points to about.html; supports external URLs too) ----- */
const aboutLink = document.getElementById("nav-about");
if (aboutLink) {
  aboutLink.href = portfolioData.nav.aboutHref;
  if (isExternal(portfolioData.nav.aboutHref)) {
    aboutLink.target = "_blank";
    aboutLink.rel = "noopener noreferrer";
  }
}

/* ----- Case study cards (home page only) ----- */
const grid = document.getElementById("cards-grid");

if (grid) portfolioData.caseStudies.forEach((study, i) => {
  const card = document.createElement("a");
  card.className = "card";
  card.style.setProperty("--d", `${0.1 + i * 0.1}s`);  // staggered load-in
  card.href = study.figmaLink;
  card.target = "_blank";
  card.rel = "noopener noreferrer";
  card.setAttribute(
    "aria-label",
    `Open case study: ${study.title} — ${study.description} (opens in a new tab)`
  );

  /* Full-width cover image */
  const media = document.createElement("div");
  media.className = "card__media";

  const img = document.createElement("img");
  img.className = "card__image";
  img.src = study.image;
  img.alt = study.imageAlt || "";
  img.loading = "lazy";

  const badge = document.createElement("span");
  badge.className = "card__badge";
  badge.setAttribute("aria-hidden", "true");
  badge.textContent = "↗";

  media.append(img, badge);

  /* Title + description + link */
  const title = document.createElement("h3");
  title.className = "card__title";
  title.textContent = study.title;

  const desc = document.createElement("p");
  desc.className = "card__description";
  desc.textContent = study.description;

  card.append(media, title, desc);
  grid.appendChild(card);
});

/* ----- About photo + paragraphs (About page only) ----- */
const aboutImg = document.getElementById("about-image");
if (aboutImg) {
  aboutImg.src = portfolioData.aboutPhoto.image;
  aboutImg.alt = portfolioData.aboutPhoto.imageAlt;
}

const aboutContainer = document.getElementById("about-text");
if (aboutContainer) {
  aboutContainer.innerHTML = "";
  portfolioData.about.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    aboutContainer.appendChild(p);
  });
}

/* ----- Footer (present on every page) ----- */
setText("footer-note", portfolioData.footerNote);
setText("footer-copyright", `© ${new Date().getFullYear()} ${portfolioData.name}`);

const footerLinks = document.getElementById("footer-links");
if (footerLinks) portfolioData.social.forEach((link) => {
  const a = document.createElement("a");
  a.className = "footer__link";
  a.href = link.href;
  a.textContent = link.label;
  if (isExternal(link.href)) {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  }
  footerLinks.appendChild(a);
});

/* ----- Nav active state: highlight the section in view while scrolling.
   Work and About now live on separate pages, so on any given page only the
   sections actually present are observed. ----- */
const navWork = document.getElementById("nav-work");
const sections = [
  { el: document.getElementById("work"), link: navWork },
  { el: document.getElementById("about"), link: aboutLink },
].filter((s) => s.el && s.link);

const observable = sections;

if ("IntersectionObserver" in window && observable.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sections.forEach((s) => s.link.classList.remove("is-active"));
          const match = sections.find((s) => s.el === entry.target);
          if (match) match.link.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  observable.forEach((s) => observer.observe(s.el));
}

/* ==========================================================================
   INTRO LOAD-IN
   --------------------------------------------------------------------------
   The <html> element is given "intro-active" by a head script (skipped for
   reduced-motion / no-JS). Here we build the name, then run the timeline:
   name rises → brief hold → panel lifts (intro-done) → cleanup.
   ========================================================================== */
(function initIntro() {
  const root = document.documentElement;
  const intro = document.getElementById("intro");

  // If the intro isn't meant to play, make sure nothing lingers on screen.
  if (!root.classList.contains("intro-active") || !intro) {
    if (intro) intro.remove();
    return;
  }

  // --- Build the name letter-by-letter (reuses portfolioData.name) ---
  const LETTER_START = 0.2;  // seconds before the first letter appears
  const LETTER_STEP = 0.07;  // seconds between letters
  const nameEl = document.getElementById("intro-name");
  nameEl.innerHTML = "";

  let visibleIndex = 0;
  portfolioData.name.split("").forEach((ch) => {
    const span = document.createElement("span");
    if (ch === " ") {
      span.className = "intro__letter intro__letter--space";
      span.innerHTML = "&nbsp;";
    } else {
      span.className = "intro__letter";
      span.textContent = ch;
      span.style.animationDelay = `${LETTER_START + visibleIndex * LETTER_STEP}s`;
      visibleIndex++;
    }
    nameEl.appendChild(span);
  });

  // --- Role line, fading in just after the last letter ---
  const roleEl = document.getElementById("intro-role");
  roleEl.textContent = portfolioData.role;
  roleEl.style.animationDelay = `${LETTER_START + visibleIndex * LETTER_STEP + 0.15}s`;

  const REVEAL_AT = 1500;  // ms: panel begins fading, hero begins easing in
  const CLEANUP_AT = 2300; // ms: overlay removed, scroll unlocked

  window.setTimeout(() => root.classList.add("intro-done"), REVEAL_AT);

  window.setTimeout(() => {
    root.classList.remove("intro-active");
    intro.setAttribute("hidden", "");
  }, CLEANUP_AT);
})();
