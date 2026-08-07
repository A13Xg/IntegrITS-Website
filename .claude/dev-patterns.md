# Dev Patterns & Working Conventions — IntegrITS Website

Behavioral patterns and conventions established while working on this repo with Claude Code. Read this before starting new work here.

## Screenshot workflow

- Save browser/Playwright screenshots to `docs/screenshots/` with a detailed, descriptive filename (e.g. `footprint-edwards-active-pin.png`), not the repo root and not a scratchpad.
- Diagnostic/"before" screenshots taken to investigate or verify a bug fix must be **deleted once the fix is confirmed working**. Don't leave bug-documentation screenshots sitting in the repo — `docs/screenshots/` should stay empty/near-empty between sessions unless a screenshot has lasting reference value beyond the fix that prompted it.

## Git workflow

- Ask before `git push` / committing by default. If the user explicitly says to commit and push (e.g. "override the restriction"), proceed for that batch of work without re-asking each time.
- After a feature branch is fully merged into `main` (verify with `git branch --merged main`), delete it both locally and on `origin` — don't let merged branches linger.
- Always run `git status` before any command that could discard uncommitted work.
- Don't assume prior conversation turns landed changes — if asked what was in the last push, or asked to commit, check `git status`/`git log` against `origin` directly rather than trusting context, since sessions can be interrupted mid-edit.

## Testing / verification workflow

- This is a static site: plain HTML/CSS/JS, no build step, no framework, no package.json. Serve locally with `python3 -m http.server <port>` to test.
- Always verify changes live in a real browser (Playwright) before calling a task done — check both a desktop viewport (~1440x900) and a mobile viewport (~390x844).
- Check browser console for errors/warnings after any JS change.
- If a visual bug is subtle or hard to judge from a screenshot alone, sample actual pixel colors (e.g. via PIL) or inspect computed styles via `page.evaluate` rather than guessing. Example: a "line doesn't go all the way across" bug turned out to be `vector-effect: non-scaling-stroke` reinterpreting `stroke-dasharray`/`pathLength` in raw screen pixels instead of the SVG path's normalized units — only pixel sampling revealed the real repeating dash pattern.
- Watch for browser cache serving stale JS/CSS during testing — if computed values look wrong/stale, force a fresh navigation rather than trusting a reload.
- If Playwright errors with "Browser is already in use", a stale headless Chrome process is likely holding the profile lock (common after a session resume) — find and kill it (`pkill -9 -f "user-data-dir=<profile-dir>"`), clear the `Singleton*` lock files in that profile dir, then retry.
- For rapid-interaction bugs (e.g. "switching quickly leaves stale content"), reproduce with an automated rapid-click loop in Playwright and assert the *final* state matches the *last* action, not just that no error was thrown.
- Clean up any stray screenshot/test artifacts from the repo root at the end of a session.

## Site conventions

- Brand name: legal entity is **Integrits Corporation**; public-facing brand style is **IntegrITS**. Both are correct depending on context — see `refData/IntegrITS_WebsitePlan-content.md` §1.
- Color semantics (from the token comments at the top of `assets/css/style.css`): **red** = status, action, live/selected state; **blue** = structure, data, trace, default state. Apply this consistently to new interactive elements (e.g. map pins default blue, turn red when active/selected).
- `.img-slot` is the general image-frame utility class (border, aspect-ratio, overflow hidden, `object-fit: cover` so photos fill/crop rather than letterbox). With no `<img>` inside, it renders an orange hazard-stripe pattern that is an explicit "replace me" placeholder — never leave that showing once a real photo exists for a slot, but it's the correct, deliberate way to represent a still-needed asset.
- Location photos live in `assets/img/locations/`, named `<Location-Name>_location.jpg` (JPEG, resized to ~1000px wide — the originals were 1536x1024 PNGs at 2-2.8MB each, which caused slow-loading complaints; always downsize and JPEG-compress photographic assets before adding them, PNG is for graphics/line art only).
- Interactive card-swap pattern used repeatedly on this site: elements carry `data-*` attributes (`data-name`, `data-note`, `data-photo`, etc.) and a click handler swaps a single shared panel's content, rather than duplicating markup per item (see footprint pins → readout panel, leader cards → modal). When swapping an `<img src>` this way, preload the new image (`new Image()`, wait for `onload`/`onerror`/a timeout fallback) before revealing it, and guard against out-of-order async resolution with a request-id counter — otherwise fast repeated clicks can leave a stale image showing.
- When choosing dasharray/dashoffset units on an SVG stroke with `vector-effect: non-scaling-stroke`, remember the values resolve in screen pixels, not the viewBox's user units — size them relative to the actual rendered pixel dimensions, not the viewBox numbers.

## Working style

- Requests often arrive as dense, multi-part lists covering several unrelated fixes at once — implement and verify all of them in one pass, tracked with TodoWrite.
- Follow-up instructions frequently arrive mid-turn while a previous batch is still in progress — fold them into the current work rather than deferring to a separate turn.
