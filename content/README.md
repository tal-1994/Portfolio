# Editing the website copy

All the written content of the portfolio lives in this folder. Change the text
here, save, and refresh the page in your browser — no build step, no terminal.

## Which file holds what

| File | What it controls |
| --- | --- |
| `home.js` | The **homepage** (`index.html`): hero, the four work cards, the About section |
| `case-studies/design-system.js` | The **Agora Design System case study** (`design-system-case-study.html`): hero, My role, and the five chapters |
| `shared.js` | The **nav bar** and the **contact / footer** — shown on every page, so they're written once here |
| `inject.js` | The little script that puts your copy onto the page. **You don't edit this one.** |

Each file is organised top-to-bottom in the same order the sections appear on
the page, with comments marking each part.

## How to edit

1. Open the file for the page you want to change (see the table above).
2. Find the section by its comment header, then the field by its name.
3. Change the text **between the quotes**. Keep the quotes and the comma.
4. Save.
5. Refresh the page in your browser to see the change.

A heading, a paragraph, and a caption all look the same here — a `name:` followed
by `"your text"`. The field name tells you which is which (`heading`, `lead`,
`caption`, `imageAlt`, …).

### Editing a heading or a paragraph

```js
heading: "A system we actively use",
```

Just replace the words inside the quotes:

```js
heading: "A design system the whole team relies on",
```

### A section with several paragraphs

When a section has more than one paragraph, they're written as a list — one line
per paragraph, shown in order:

```js
body: [
  "The biggest change is in how we work day to day.",
  "Designers now know which components exist and what they support…",
],
```

To add a paragraph, copy a line, paste it below, and edit it (keep the commas).

### Bold, line breaks, links, and symbols

You can use a little HTML inside the quotes:

| You want | Write | Shows as |
| --- | --- | --- |
| **Bold** | `a <strong>living</strong> system` | a **living** system |
| A line break | `Rebuilding<br>Agora&rsquo;s system` | two lines |
| A link | `email me at <a href="mailto:you@x.com">here</a>` | a clickable link |
| A curly apostrophe ’ | `didn&rsquo;t` | didn’t |
| An & symbol | `design &amp; code` | design & code |

The apostrophes, `&nbsp;` (a space that won't break across lines), and the small
`<span>…</span>` bits you'll see in a few fields are there on purpose — leave
them unless you mean to change them, and just edit the words around them.

### Changing a link's address

Links have a label and an address (`href`). For example the resume link:

```js
resumeLabel: "Resume",
resumeHref: "#",     // ← paste your resume URL here
```

Your email is written once (in `shared.js`, `contact.email`) and reused by the
big heading, the “Email me” button, and the nav — change it there and it updates
everywhere.

### Image descriptions (alt text)

The image **files** live in `assets/` and are set in the HTML. Here you edit each
image's **alt text** — the description used by screen readers and search engines —
in fields named `imageAlt`, `artAlt`, `trackerAlt`, etc.

## A real example

Say you want to reword the first line of the case study's **Outcome** chapter.

1. Open `case-studies/design-system.js`.
2. Scroll to the `/* ----- 05 · OUTCOME & EVOLUTION ----- */` comment.
3. Under `outcome:`, find `body:` and its first line:
   ```js
   body: [
     "The biggest change is in how we work day to day.",
   ```
4. Edit it:
   ```js
   body: [
     "The biggest change is in how the whole team works day to day.",
   ```
5. Save, refresh `design-system-case-study.html`. Done.

## Two small things that are NOT in these files (on purpose)

A couple of strings live in the page's own HTML/JavaScript because they're tied
to how a control behaves, not editorial copy:

- The **before/after slider's** spoken read-out (“50% before, 50% after”) and the
  **lightbox's** full-size image descriptions are built inside
  `design-system-case-study.html`'s `<script>`, because they change as you drag
  or toggle.
- The little **“Enlarge”** word on the slider sits next to an icon in the HTML.

Everything else — every heading, paragraph, caption, label, and alt text — is
here in the content files.

## If a change doesn't show up

- Make sure you kept the quotes `"…"` and the comma at the end of the line.
- If a spot on the page looks empty, open the browser console (right-click →
  Inspect → Console): a line like `[content] missing value for: home.hero.headline`
  means a field name was mistyped or removed.
- Hard-refresh to dodge the browser cache (⌘⇧R on Mac).
