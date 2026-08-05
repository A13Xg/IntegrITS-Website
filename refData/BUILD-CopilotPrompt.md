You are the lead frontend engineer and visual design system architect for a client-facing website concept project.

Build a polished, production-structured GitHub Pages website that acts as a design showcase for IntegrITS Corporation.

The project must contain:

1. A simple landing page that introduces the design showcase
2. Five prominent buttons or cards
3. Each button must open a different full website concept
4. All five concepts must use the same core company content
5. Each concept must have a dramatically different visual style, layout system, interaction model, typography treatment, and visual hierarchy
6. Each concept must be directly accessible through its own stable URL slug
7. The complete site must build, test, and deploy automatically through GitHub Actions to GitHub Pages

Do not build five small variations of the same template. These must feel like five different agencies designed the same company website independently.

---

# Source Files

Treat the following files as the primary source of truth:

## Website Content

`/refData/IntegrITS_WebsitePlan-content.md`

Use this file for:

* Company description
* Brand positioning
* Hero messaging
* Capability descriptions
* Leadership and employee information
* Careers content
* Contracting information
* Operational locations
* Statistics
* Calls to action
* Page hierarchy
* Website recommendations
* Accuracy notes

Do not invent unsupported company facts, contract values, certifications, employees, locations, customer claims, or performance metrics.

You may shorten, reorganize, and present the content differently between concepts, but preserve its factual meaning.

## Design Direction

`/refData/themeDesign.md`

Use this file as the source for:

* Visual direction
* Color ideas
* Typography guidance
* Layout principles
* Interface behaviors
* Animation direction
* Brand tone
* Background treatments
* Card styles
* Decorative motifs
* Design constraints

Interpret this file creatively rather than mechanically. Use it as design guidance, not as a reason to make every concept visually similar.

Read both files completely before making architectural or visual decisions.

---

# Primary Goal

The website is a client demo stack.

A client should be able to open the landing page, select one of five concepts, and immediately understand how the same company content can be transformed through very different design systems.

The experience should feel polished enough to use in a real client presentation.

It should not feel like:

* A coding tutorial
* A template gallery
* A collection of wireframes
* Five color swaps
* A generic AI-generated landing page
* An unfinished proof of concept

It should feel like a curated interactive design presentation.

---

# Recommended Technical Stack

Use a static-site-compatible frontend stack suitable for GitHub Pages.

Preferred default:

* Vite
* React
* TypeScript
* React Router using hash-based routing or another GitHub Pages-safe routing strategy
* CSS Modules, scoped CSS, or a carefully structured global CSS architecture
* Lucide React for icons
* Vitest
* React Testing Library
* ESLint
* Prettier
* GitHub Actions
* GitHub Pages deployment

You may use another modern static-compatible stack only when there is a strong technical reason.

Do not use:

* A backend
* Server-side runtime dependencies
* Database services
* Runtime API keys
* Paid UI services
* Remote CMS dependencies
* Authentication
* Next.js server features
* Routing that breaks when refreshing a GitHub Pages subpath

All functionality must work as a static deployment.

---

# Required Routes

Create one showcase landing page and five unique concept routes.

Recommended routes:

* `/`
* `/concept/mission-command`
* `/concept/human-integrity`
* `/concept/precision-grid`
* `/concept/modern-defense`
* `/concept/editorial-legacy`

Because GitHub Pages does not provide arbitrary server-side route rewriting, implement routing safely.

Preferred option:

* Use `HashRouter`
* Public URLs may render as:

  * `/#/concept/mission-command`
  * `/#/concept/human-integrity`
  * `/#/concept/precision-grid`
  * `/#/concept/modern-defense`
  * `/#/concept/editorial-legacy`

Alternatively, implement a verified GitHub Pages SPA fallback using `404.html`, but only if it is robust and thoroughly tested.

Do not leave routing vulnerable to direct-link or refresh failures.

---

# Landing Page

Create a deliberately simple but refined landing page.

Its role is to frame the five concepts, not compete with them.

Include:

* IntegrITS design exploration title
* One concise explanation of the demo
* Five large concept buttons or cards
* A brief style descriptor for each concept
* Visual thumbnails or abstract preview treatments
* Keyboard-accessible navigation
* A restrained footer
* A clear indication that all concepts use the same source content

Suggested headline:

`IntegrITS Website Design Exploration`

Suggested supporting copy:

`Five distinct visual directions built from one shared company story. Select a concept to explore how layout, typography, interaction, and brand expression can reshape the same content.`

Each concept card should contain:

* Concept number
* Concept title
* One-sentence style description
* Representative icon
* Enter concept action
* Optional small tags such as:

  * Operational
  * Human
  * Technical
  * Corporate
  * Editorial

Do not use a plain vertical list of generic buttons. Make the selection experience visually intentional while keeping it simple.

---

# Shared Content Architecture

Create a shared typed content layer rather than duplicating company copy across five pages.

Recommended structure:

```text
src/
  content/
    integritsContent.ts
    contentTypes.ts
  components/
    shared/
  concepts/
    mission-command/
    human-integrity/
    precision-grid/
    modern-defense/
    editorial-legacy/
```

Parse or manually structure the source markdown into a typed content model.

Suggested content model:

```ts
type CompanyContent = {
  brand: {
    legalName: string
    displayName: string
    tagline: string
    summary: string
  }
  hero: {
    headlineOptions: string[]
    supportingCopy: string[]
  }
  statistics: Statistic[]
  capabilities: Capability[]
  differentiators: Differentiator[]
  lifecycle: LifecycleStage[]
  leadership: Leader[]
  workforce: WorkforceContent
  locations: Location[]
  contracts: ContractContent
  careers: CareersContent
  contact: ContactContent
  accuracyNotes: AccuracyNote[]
}
```

Each concept should consume the same shared content object.

Concepts may:

* Select different headline options
* Reorder sections
* Use different content density
* Show different supporting details
* Collapse or expand information differently
* Use different visual storytelling techniques

Concepts may not:

* Alter facts
* Invent client names
* Change employee titles without source support
* Add unsupported statistics
* Present caveated facts as certain

---

# Five Required Concepts

The names below are recommended. You may improve the names, but preserve the five distinctly different design directions.

---

## Concept 1: Mission Command

### Theme

A premium mission-operations interface inspired by test ranges, flight operations, telemetry systems, command centers, and technical data environments.

### Visual Character

* Dark navy or near-black background
* Controlled cyan, teal, amber, or red indicators
* Fine technical grid overlays
* Coordinate markers
* Telemetry lines
* Data panels
* Mission-status indicators
* Restrained glow effects
* Monospaced secondary type
* Strong sans-serif primary type
* Technical but readable

### Layout

* Full-screen hero
* Fixed or semi-fixed navigation
* Mission dashboard statistics
* Capability modules resembling operational systems
* Interactive geographic footprint
* Lifecycle presented as a mission sequence
* Leadership presented as command profiles
* Contract information presented as access channels

### Interactions

* Subtle scanning lines
* Animated telemetry traces
* Number count-up animations
* Hover states that reveal supporting information
* Section progress indicator
* Smooth panel transitions
* Skeleton loading panels
* Reduced-motion fallback

### Avoid

* Excessive neon
* Cyberpunk clichés
* Fake classified markings
* Illegible tiny text
* Video-game HUD overload
* Fake live data

---

## Concept 2: Human Integrity

### Theme

A people-first, veteran-powered corporate experience centered on trust, service, leadership, employee culture, and mission impact.

### Visual Character

* Warm neutral background
* Deep navy, forest, bronze, or muted red accents
* Large human-focused imagery
* Generous whitespace
* Editorial photography framing
* Rounded or softly structured cards
* Humanist typography
* Personal quotes and leadership storytelling
* Calm, credible, and welcoming

### Layout

* Human-centered hero
* Veteran workforce proof point early on the page
* Integrity principles as a major storytelling section
* Leadership profiles with strong visual prominence
* Capabilities explained through outcomes and people
* Careers section treated as a primary experience
* Community and culture woven throughout

### Interactions

* Soft image reveals
* Gentle card elevation
* Expandable biographies
* Testimonial-style content transitions
* Smooth scroll-linked section reveals
* Skeleton image placeholders
* Subtle hover motion

### Avoid

* Generic recruiting-site appearance
* Artificial employee quotes
* Excessive friendliness that weakens technical credibility
* Stock-photo-heavy presentation
* Overuse of rounded “startup” cards

---

## Concept 3: Precision Grid

### Theme

A highly structured Swiss-modernist and systems-engineering presentation focused on clarity, hierarchy, information architecture, and technical precision.

### Visual Character

* Bright or off-white background
* Black, graphite, and one strong accent color
* Strict grid system
* Strong typography
* Fine divider lines
* Numbered sections
* Minimal decoration
* Deliberate asymmetry
* Dense but readable information
* Precise spacing

### Layout

* Editorial grid hero
* Modular capability matrix
* Large numeric proof points
* Indexed sections
* Timeline and lifecycle diagrams
* Leadership presented in a structured directory
* Locations shown as a clean data table and map abstraction
* Contracts displayed with strong information hierarchy

### Interactions

* Grid cells animate into place
* Precise underline and rule animations
* Section-index navigation
* Expandable technical details
* Animated diagrams
* Fast, subtle transitions
* Skeleton blocks matching the grid structure

### Avoid

* Sterile appearance
* Tiny text
* Excessive black-and-white severity
* Generic Tailwind dashboard styling
* Random decorative gradients

---

## Concept 4: Modern Defense

### Theme

A polished, contemporary defense and aerospace corporate website designed to appeal to government customers, partners, recruits, and prime contractors.

### Visual Character

* Cinematic full-width imagery
* Dark blue, steel, white, and restrained accent colors
* Layered atmospheric backgrounds
* Strong section transitions
* Premium enterprise typography
* Confident visual scale
* Subtle aerospace and range motifs
* Professional and highly marketable

### Layout

* Cinematic hero
* Large capability overviews
* Alternating image-and-copy sections
* Mission lifecycle visualization
* Contract vehicle strip
* Operational footprint map
* Veteran workforce feature
* Leadership preview
* Strong careers call to action

### Interactions

* Parallax used sparingly
* Image masks and reveals
* Animated capability tabs
* Scroll-triggered statistics
* Smooth navigation transitions
* Refined button microinteractions
* Skeleton image and card states

### Avoid

* Looking like a weapons manufacturer
* Unsupported military imagery
* Excessive patriotic symbolism
* Aggressive animations
* Generic government-contractor template appearance

---

## Concept 5: Editorial Legacy

### Theme

A sophisticated corporate history and institutional-experience presentation inspired by premium annual reports, engineering journals, archival documents, and long-established professional firms.

### Visual Character

* Cream, parchment, charcoal, navy, or oxblood palette
* Serif display typography
* Sans-serif supporting typography
* Strong editorial hierarchy
* Pull quotes
* Timelines
* Archival-style image framing
* Fine rules
* Page-number motifs
* Subtle paper or print-inspired texture

### Layout

* Story-driven hero
* Founding narrative
* Meaning of IntegrITS
* Company timeline
* Capability chapters
* Leadership profiles as editorial features
* Veteran workforce as institutional identity
* Operational locations as field notes
* Contracts as reference appendices

### Interactions

* Page-like section transitions
* Animated timeline
* Expandable footnotes
* Pull-quote reveals
* Image-caption interactions
* Subtle ink or rule animations
* Skeleton states resembling article blocks

### Avoid

* Fake historical documents
* Artificial aging
* Overly ornate typography
* Low contrast
* Making the company appear outdated

---

# Placeholder Media

Use placeholder content for images because production assets are not yet available.

Acceptable approaches:

* Local SVG placeholders
* Abstract gradients
* Purpose-built geometric compositions
* CSS-generated image treatments
* Placeholder image components
* Clearly labeled sample imagery
* Public-domain or royalty-safe remote imagery only when legally and technically appropriate

Preferred approach:

Create local placeholder SVG files so the demo is deterministic and does not depend on external services.

Recommended placeholder categories:

* Flight-test environment
* Radar or telemetry
* Mission-control room
* Engineering team
* Leadership portrait
* Veteran workforce
* Enterprise infrastructure
* Cloud operations
* Mobile sensor vessel
* Geographic footprint
* Careers environment

Use realistic aspect ratios and meaningful `alt` text.

Do not use broken image links.

Do not use blank gray rectangles without visual treatment.

Do not imply that placeholder images depict actual IntegrITS employees, facilities, contracts, or customers.

Add a small unobtrusive “Sample imagery” treatment where appropriate.

---

# Icons

Use a maintained SVG icon package.

Preferred:

* `lucide-react`

Use icons consistently for:

* Navigation
* Capability categories
* Statistics
* Locations
* Contracting
* Leadership metadata
* Careers
* Contact actions
* Buttons
* Expand/collapse controls
* External links

Do not manually draw arbitrary SVG icons when a suitable package icon exists.

All icon-only controls must include:

* Accessible name
* Tooltip where meaning is not obvious
* Focus state
* Hover state
* Sufficient hit area

Use icons alongside text for primary actions whenever practical.

---

# Animation and Interaction Requirements

Use tasteful animation to make the concepts feel advanced and interactive.

Animations must support comprehension rather than distract from it.

Include a reusable motion system with:

* Standard durations
* Standard easing values
* Entrance transitions
* Hover transitions
* Section reveal behavior
* Reduced-motion handling

Recommended durations:

* Microinteraction: 120–180 ms
* Component transition: 180–280 ms
* Section entrance: 300–600 ms
* Large atmospheric transition: no more than 800 ms

Implement:

* Skeleton loading states
* Section entrance animations
* Card hover and focus animations
* Button press feedback
* Animated navigation states
* Content expansion transitions
* Number animation where appropriate
* Image reveal treatments
* Loading transitions between concepts
* Active section highlighting where appropriate

Skeleton loading must:

* Match the approximate geometry of real content
* Avoid large layout shifts
* Use accessible semantics
* Stop promptly
* Respect reduced motion
* Be implemented as part of the reusable component system

Because content is local and loads quickly, use a short controlled demo loading state only when it meaningfully improves presentation. Do not artificially delay every page for several seconds.

Add:

```css
@media (prefers-reduced-motion: reduce) {
  /* Disable or substantially reduce nonessential animation */
}
```

Do not use animation libraries unless they provide material value. Prefer CSS transitions and the Web Animations API where sufficient.

---

# Responsive Design

All six pages must work well at:

* 360 px
* 390 px
* 768 px
* 1024 px
* 1280 px
* 1440 px and above

Requirements:

* No horizontal overflow
* No clipped headings
* No inaccessible offscreen navigation
* No hover-only functionality
* Touch-friendly controls
* Responsive typography using `clamp()`
* Responsive section spacing
* Mobile navigation
* Logical content reflow
* Tables converted or adapted for narrow screens
* Maps and diagrams remain legible
* Leadership cards work without fixed heights

The five concepts should remain visually distinct on mobile, not collapse into the same generic stacked card layout.

---

# Accessibility

Target WCAG 2.2 AA where practical.

Required:

* Semantic HTML
* Logical heading hierarchy
* Skip-to-content link
* Keyboard-accessible navigation
* Visible focus states
* Proper buttons and links
* Accurate labels
* Accessible dialogs or accordions
* Color contrast
* Alt text
* Reduced-motion support
* No essential information conveyed only through color
* Sufficient control target sizes
* Screen-reader-friendly route titles
* Descriptive page titles
* ARIA only where native semantics are insufficient

Add automated accessibility checks where practical.

Recommended:

* `eslint-plugin-jsx-a11y`
* `vitest-axe` or `jest-axe`

---

# SEO and Metadata

Each route must have a unique:

* Document title
* Meta description
* Open Graph title
* Open Graph description
* Canonical or route-aware metadata where practical
* Theme color

Include:

* Favicon
* Basic social preview placeholder
* `robots.txt`
* `sitemap.xml` when compatible with the selected routing approach
* Structured organization metadata only using facts supported by the source content

Because this is a client demo, make it clear in metadata or footer that these are design concepts unless instructed otherwise.

---

# Performance

Target a strong Lighthouse result.

Requirements:

* Avoid unnecessary dependencies
* Lazy-load concept bundles
* Lazy-load large images
* Use local SVGs where possible
* Avoid layout shifts
* Avoid oversized animations
* Minimize blocking CSS and JavaScript
* Use route-level code splitting
* Keep shared code truly shared
* Avoid rendering all five concepts simultaneously
* Use responsive image dimensions
* Set width and height or aspect ratio for media
* Avoid runtime markdown parsing unless needed

Suggested targets:

* Performance: 90+
* Accessibility: 95+
* Best Practices: 95+
* SEO: 90+

Do not manipulate the audit or disable meaningful checks to achieve these numbers.

---

# Code Quality

Use TypeScript strict mode.

Required:

* Clear component contracts
* Typed content models
* Reusable shared components where appropriate
* Concept-specific components where necessary
* No giant single-file components
* No copied content blobs across five concepts
* No dead code
* No unresolved TODOs
* No placeholder functions
* No fake API integrations
* No ignored TypeScript errors
* No excessive `any`
* No console errors
* No React key warnings
* No invalid DOM nesting
* No duplicated IDs

Add useful code comments around:

* GitHub Pages routing
* Content architecture
* Shared content transformations
* Animation utilities
* Accessibility behavior
* Complex layout logic
* Deployment configuration

Do not add comments that merely restate obvious code.

---

# Suggested Project Structure

```text
/
├─ .github/
│  └─ workflows/
│     ├─ ci.yml
│     └─ deploy-pages.yml
├─ public/
│  ├─ placeholders/
│  ├─ favicon.svg
│  ├─ robots.txt
│  └─ social-preview.svg
├─ refData/
│  ├─ IntegrITS_WebsitePlan-content.md
│  └─ themeDesign.md
├─ src/
│  ├─ app/
│  │  ├─ App.tsx
│  │  ├─ routes.tsx
│  │  └─ routeMetadata.ts
│  ├─ components/
│  │  ├─ shared/
│  │  └─ showcase/
│  ├─ concepts/
│  │  ├─ mission-command/
│  │  ├─ human-integrity/
│  │  ├─ precision-grid/
│  │  ├─ modern-defense/
│  │  └─ editorial-legacy/
│  ├─ content/
│  │  ├─ integritsContent.ts
│  │  └─ contentTypes.ts
│  ├─ hooks/
│  ├─ motion/
│  ├─ styles/
│  ├─ test/
│  ├─ main.tsx
│  └─ vite-env.d.ts
├─ tests/
│  ├─ routing.test.tsx
│  ├─ accessibility.test.tsx
│  └─ content-integrity.test.ts
├─ .editorconfig
├─ .gitignore
├─ .prettierignore
├─ .prettierrc
├─ eslint.config.js
├─ index.html
├─ package.json
├─ README.md
├─ tsconfig.json
├─ tsconfig.app.json
├─ vite.config.ts
└─ vitest.config.ts
```

Adjust this structure where needed, but retain clear separation between:

* Source content
* Shared UI
* Concept-specific UI
* Routing
* Styles
* Tests
* Deployment

---

# Testing Requirements

Set up automated testing.

At minimum, test:

## Build and Static Analysis

* TypeScript compilation
* ESLint
* Prettier formatting check
* Production build

## Unit and Component Tests

* Shared content loads correctly
* All five concept definitions exist
* Concept cards render
* Routes resolve correctly
* Navigation buttons target correct routes
* Leadership data renders
* Capability content renders
* Missing optional content does not crash pages

## Routing Tests

Verify:

* Landing page renders
* All five concept routes render
* Direct hash navigation works
* Unknown routes show a useful not-found experience
* Return-to-showcase navigation works
* Refresh-safe routing behavior is documented

## Accessibility Tests

Check:

* No obvious automated accessibility violations
* Buttons have accessible names
* Navigation landmarks exist
* Heading structure is reasonable
* Images have alt text
* Interactive elements are keyboard reachable

## Content Integrity Tests

Create tests that verify:

* Five concepts use the shared content source
* Required company name appears
* All core capability groups exist
* No concept silently omits all leadership content
* No broken placeholder image paths exist
* No duplicate HTML IDs exist where testable

## Optional Browser Tests

Prefer adding a small Playwright suite if practical.

Suggested Playwright tests:

* Landing page loads
* Each concept can be opened
* Back-to-showcase works
* Mobile menu works
* No horizontal overflow at mobile width
* No console errors
* Key screenshots can be generated locally

Do not over-engineer end-to-end testing, but include enough to catch broken navigation and deployment.

---

# GitHub Actions

Create two workflows.

## 1. Continuous Integration

File:

`.github/workflows/ci.yml`

Run on:

* Pull requests
* Pushes to the default branch

Steps:

1. Checkout
2. Set up Node using the version declared in the project
3. Restore npm cache
4. Install with `npm ci`
5. Run formatting check
6. Run lint
7. Run type checking
8. Run unit tests
9. Run production build
10. Upload build or test artifacts when useful

The workflow must fail on errors.

## 2. GitHub Pages Deployment

File:

`.github/workflows/deploy-pages.yml`

Use the official GitHub Pages actions.

Expected actions:

* `actions/checkout`
* `actions/setup-node`
* `actions/configure-pages`
* `actions/upload-pages-artifact`
* `actions/deploy-pages`

Required permissions:

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

Use:

```yaml
environment:
  name: github-pages
  url: ${{ steps.deployment.outputs.page_url }}
```

Deploy only after successful build and preferably only from the default branch.

Configure Vite’s base path correctly for both:

* Repository project pages
* Optional custom domain or root deployment

Document exactly where the repository name must be inserted or derive it safely from GitHub environment values.

Do not leave GitHub Pages deployment as a manual future task.

---

# Package Scripts

Include at least:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier . --write",
    "format:check": "prettier . --check",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage",
    "verify": "npm run format:check && npm run lint && npm run typecheck && npm run test && npm run build"
  }
}
```

Add Playwright scripts if Playwright is included.

The command below must provide a complete local quality gate:

```bash
npm run verify
```

---

# README

Create a concise but useful `README.md`.

Include:

* Project title
* One-paragraph purpose
* Live demo placeholder
* Screenshot or preview placeholder
* CI badge
* GitHub Pages deployment badge
* License badge only if a license exists
* Tech stack
* Available routes
* Local development steps
* Verification command
* Build command
* Deployment explanation
* GitHub Pages setup notes
* Source-content file references
* Project structure summary
* Accessibility and performance goals
* Placeholder-media disclaimer

Recommended badges:

```md
![CI](https://github.com/OWNER/REPOSITORY/actions/workflows/ci.yml/badge.svg)
![Deploy](https://github.com/OWNER/REPOSITORY/actions/workflows/deploy-pages.yml/badge.svg)
```

Use obvious placeholders such as `OWNER/REPOSITORY` only when repository metadata is not available. Document how to replace them.

Do not include badges that point to nonexistent services.

---

# Navigation Requirements Inside Every Concept

Every concept must include:

* IntegrITS logo or wordmark placeholder
* Primary section navigation
* Return to Showcase action
* Visible indication of the current concept
* Optional concept switcher
* Contact call to action
* Responsive mobile navigation

A visitor must never become trapped inside a concept.

The concept switcher should not visually dominate the client website itself. It can be placed in a small demo toolbar or discreet floating control.

Suggested demo toolbar:

* `Back to Showcase`
* `Concept 1 of 5`
* Previous concept
* Next concept
* Open concept list

Ensure it remains accessible and usable on mobile.

---

# Error and Empty States

Implement:

* Custom not-found route
* Graceful fallback for missing placeholder assets
* Safe behavior if optional content fields are absent
* Error boundary for concept rendering
* Useful development errors
* No blank white screens

Do not expose raw stack traces in production.

---

# Browser Support

Support current stable versions of:

* Chrome
* Edge
* Firefox
* Safari
* Mobile Safari

Avoid experimental APIs without a fallback.

---

# Security and Dependency Hygiene

* Avoid `dangerouslySetInnerHTML`
* Do not expose secrets
* Do not commit credentials
* Do not add unnecessary tracking
* Pin or lock dependency versions through `package-lock.json`
* Use `npm ci` in CI
* Avoid abandoned packages
* Do not load scripts from unknown CDNs
* Use `rel="noopener noreferrer"` for external links
* Sanitize any generated markup if runtime markdown rendering is used

---

# Creativity Directive

Use your own creative judgment to elevate the result beyond these instructions.

You are encouraged to add:

* Custom SVG backgrounds
* Interactive maps
* Animated lifecycle diagrams
* Capability visualizations
* Elegant scroll choreography
* Distinctive section transitions
* Contextual tooltips
* Responsive navigation innovations
* Concept preview thumbnails
* Tasteful ambient motion
* Loading-state choreography
* Small interactive details
* Better naming for the concepts
* Additional reusable components
* Visual comparison aids on the showcase page

Do not add features merely to increase complexity.

Every creative addition must improve at least one of:

* Client comprehension
* Brand expression
* Visual differentiation
* Usability
* Accessibility
* Credibility
* Presentation quality

---

# Implementation Sequence

Follow this order:

1. Inspect repository contents
2. Read both `/refData/` source files completely
3. Confirm the selected technical architecture
4. Set up the frontend project
5. Build the typed shared-content model
6. Build the showcase landing page
7. Build shared layout and accessibility primitives
8. Implement each concept independently
9. Add placeholder media
10. Add animations and skeleton states
11. Add responsive behavior
12. Add metadata and SEO
13. Add tests
14. Add GitHub Actions
15. Add README and badges
16. Run the complete verification suite
17. Fix all discovered issues
18. Perform a final production-build inspection

Do not stop after scaffolding.

Do not leave the website in a partially implemented state.

---

# Definition of Done

The project is complete only when:

* The landing page exists
* It clearly presents five concept choices
* All five buttons work
* All five distinct concept routes work
* Each concept is visually and structurally different
* Each concept uses the same shared factual content
* Placeholder media renders correctly
* Icons come from a proper SVG icon package
* Responsive layouts work
* Keyboard navigation works
* Reduced-motion behavior exists
* Skeleton loading exists where appropriate
* No route breaks on GitHub Pages
* TypeScript passes
* Lint passes
* Formatting passes
* Tests pass
* Production build passes
* GitHub Actions are valid
* GitHub Pages deployment is configured
* README contains valid instructions and badges
* Browser console contains no errors
* No obvious factual invention is present
* No unresolved TODO or placeholder implementation remains

---

# Final Verification

Before reporting completion, run:

```bash
npm ci
npm run verify
```

If Playwright is configured, also run:

```bash
npx playwright install --with-deps
npm run test:e2e
```

Inspect the production output locally:

```bash
npm run preview
```

Verify each route manually.

Verify at minimum:

* Desktop landing page
* Mobile landing page
* Every concept route
* Direct-link route behavior
* Return-to-showcase navigation
* Mobile menus
* Placeholder images
* Leadership sections
* Capability sections
* Contract sections
* Keyboard focus
* Reduced-motion mode
* No horizontal overflow
* No console errors

When finished, provide a concise implementation report containing:

1. Architecture selected
2. Routes created
3. Five design concepts
4. Major shared components
5. Tests added
6. GitHub Actions added
7. Verification commands and results
8. Any remaining limitations
9. Exact GitHub Pages activation steps, if repository settings cannot be changed directly
