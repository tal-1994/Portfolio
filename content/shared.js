/* ============================================================================
   SHARED CONTENT  —  the nav bar and the contact / footer.
   ----------------------------------------------------------------------------
   These appear on BOTH the homepage and the case study with the same wording,
   so they live here once. Edit a value and it updates on every page.

   • Plain quotes "..." hold the text.
   • A few values contain small bits of HTML on purpose:
       <br>            = line break
       <b>...</b>      = bold
       &#8217;         = curly apostrophe (’)
       &copy;          = © symbol
     Leave those as they are unless you mean to change them.
   ========================================================================== */
window.CONTENT = window.CONTENT || {};

window.CONTENT.shared = {

  /* ----- NAV (top bar) --------------------------------------------------- */
  nav: {
    // The wordmark keeps its small role label in a <span>; edit either word.
    wordmark: "Tal Yanay <span>Product Designer</span>",
    work: "Work",
    about: "About",
    getInTouch: "Get in touch",
  },

  /* ----- CONTACT / FOOTER ------------------------------------------------ */
  contact: {
    // One email address, reused by the big heading link, the "Email me"
    // button, and the nav's "Get in touch". Change it once here.
    email: "mailto:talyanay10@gmail.com",

    heading: "Let&#8217;s build something.",
    lead: "Currently looking for my next opportunity to help teams ship better products.",

    // The three pill links. Each has a label and the address it points to.
    emailLabel: "Email me",
    linkedinLabel: "LinkedIn",
    linkedinHref: "https://www.linkedin.com/in/tal-yanay/",
    resumeLabel: "Resume",
    resumeHref: "#",                      // ← paste your resume link here later

    // The two small lines at the very bottom.
    colophonLeft: "<b>Tal Yanay</b>, Product Designer",
    colophonRight: "&copy; 2025, Tel Aviv. Designed and built with a little AI.",
  },
};
