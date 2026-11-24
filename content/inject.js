/* ============================================================================
   CONTENT INJECTOR  —  you don't need to edit this file.
   ----------------------------------------------------------------------------
   This small script copies the copy you write in the other content/*.js files
   into the page when it loads. It runs on both the homepage and the case study.

   How it finds where each piece of copy goes: every editable element in the
   HTML carries a data-c="..." attribute that points at a field in the content
   files. For example data-c="home.hero.headline" means "put the value of
   CONTENT.home.hero.headline here".

   Directive forms (used inside data-c, separated by ";" if there's more than one):
     "home.hero.headline"        -> sets the element's rich text   (default)
     "text:home.work.heading"    -> sets plain text only
     "html:shared.contact.lead"  -> sets rich text (same as default, explicit)
     "@alt:home.about.heading"   -> sets an attribute (here: alt)
     "@href:shared.contact.email" + ";" + "shared.nav.getInTouch"
                                 -> an <a> whose link AND label both come from content
   ========================================================================== */
(function () {
  "use strict";

  var CONTENT = window.CONTENT || {};

  // Walk a dotted path ("home.hero.headline") into the content object.
  function valueAt(path) {
    return path.split(".").reduce(function (obj, key) {
      return obj == null ? undefined : obj[key];
    }, CONTENT);
  }

  function apply(el, spec) {
    spec = spec.trim();
    if (!spec) return;

    var kind = "html"; // default: innerHTML, so inline <em>/<strong>/<br>/<a> work
    var path = spec;
    var attr = null;

    if (spec.charAt(0) === "@") {
      // attribute form: "@alt:path" or "@href:path"
      var colon = spec.indexOf(":");
      attr = spec.slice(1, colon);
      path = spec.slice(colon + 1);
      kind = "attr";
    } else {
      // optional "text:" / "html:" prefix
      var sep = spec.indexOf(":");
      var prefix = sep > -1 ? spec.slice(0, sep) : "";
      if (prefix === "text" || prefix === "html") {
        kind = prefix;
        path = spec.slice(sep + 1);
      }
    }

    var value = valueAt(path);
    if (value == null) {
      // Loud in the console so a typo in a path is easy to spot, but the page
      // still renders everything else.
      if (window.console) console.warn("[content] missing value for:", path, el);
      return;
    }

    if (kind === "attr") el.setAttribute(attr, value);
    else if (kind === "text") el.textContent = value;
    else el.innerHTML = value;
  }

  function hydrate() {
    var nodes = document.querySelectorAll("[data-c]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var specs = el.getAttribute("data-c").split(";");
      for (var j = 0; j < specs.length; j++) apply(el, specs[j]);
    }
  }

  // The content <script>s load right before this one, at the end of <body>,
  // so the DOM and CONTENT are both ready — run immediately.
  hydrate();
})();
