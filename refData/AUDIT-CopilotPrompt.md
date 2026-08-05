Audit the completed IntegrITS GitHub Pages design-showcase project as a senior frontend engineer, accessibility reviewer, deployment engineer, and client-facing design-quality reviewer.

Do not assume the implementation report is correct. Inspect the repository and verify the actual files, configuration, routes, tests, and build output.

The project requirements are:

* One showcase landing page
* Five buttons or cards
* Five distinct full-site design concepts
* Same shared IntegrITS content across all concepts
* Unique route slug for each concept
* GitHub Pages-compatible routing
* Placeholder imagery
* SVG icons from a maintained icon package
* Responsive layouts
* Skeleton loading and tasteful interaction
* Accessibility support
* Automated tests
* GitHub Actions CI
* GitHub Pages deployment workflow
* README with valid badges
* No unsupported factual claims

Primary source files:

* `/refData/IntegrITS_WebsitePlan-content.md`
* `/refData/themeDesign.md`

Perform the following audit.

# 1. Source Fidelity

Read both source files.

Verify:

* Company facts match the content source
* Leadership names and titles are accurate
* Statistics are not altered
* Unsupported customers, contracts, certifications, or claims were not invented
* Caveated facts are not presented as permanent certainty
* All five concepts use a shared content source rather than copied and independently edited content

Report every unsupported or altered claim with:

* File
* Line or component
* Current text
* Source-supported correction

# 2. Architecture

Inspect:

* Project structure
* Routing architecture
* Content architecture
* Shared components
* Concept boundaries
* TypeScript configuration
* Build configuration

Flag:

* Duplicate content
* Giant components
* Weak type safety
* Excessive `any`
* Unnecessary dependencies
* Tight coupling
* Dead code
* Fragile routing
* Concept CSS leaking into other concepts

# 3. Visual Differentiation

Review all five concepts.

Determine whether they are truly distinct in:

* Layout
* Typography
* Color
* Spacing
* Navigation
* Content hierarchy
* Imagery treatment
* Interaction
* Section order
* Component styling
* Overall emotional tone

A color or font change alone does not count as a distinct concept.

For each concept, provide:

* Strongest distinguishing traits
* Similarities that weaken differentiation
* Specific changes needed to make it more unique
* Client-presentation quality rating from 1–10

# 4. Routing and GitHub Pages

Verify:

* Landing route
* All five concept routes
* Unknown-route handling
* Direct-link behavior
* Refresh behavior
* Repository subpath behavior
* Vite base configuration
* Asset paths
* Hash routing or SPA fallback implementation
* Return-to-showcase navigation
* Previous/next concept navigation

Identify any condition that could produce a blank page or 404 after deployment.

# 5. Responsive Design

Inspect or run the application at:

* 360 × 800
* 390 × 844
* 768 × 1024
* 1024 × 768
* 1440 × 900

Check:

* Horizontal overflow
* Mobile menus
* Heading wrapping
* Card collapse
* Tables
* Interactive diagrams
* Maps
* Leadership cards
* Buttons
* Touch target size
* Fixed-position elements
* Demo toolbar
* Footer layout

Provide exact component-level fixes.

# 6. Accessibility

Verify:

* Heading hierarchy
* Landmark structure
* Skip link
* Keyboard navigation
* Visible focus
* Accessible buttons
* Icon labels
* Image alt text
* Form labels if applicable
* Accordion semantics
* Dialog semantics
* Color contrast
* Reduced-motion behavior
* Screen-reader route titles
* No color-only meaning
* Touch target size

Run available automated accessibility tests.

Do not claim accessibility compliance based solely on automated tooling.

# 7. Interaction and Motion

Review:

* Skeleton loading
* Hover states
* Focus states
* Route transitions
* Scroll reveals
* Count-up effects
* Image reveals
* Navigation transitions
* Reduced-motion behavior
* Layout stability

Flag:

* Artificially long loading
* Distracting motion
* Animation that blocks interaction
* Missing reduced-motion handling
* Motion-induced layout shifts
* Hover-only information
* Inconsistent timing
* Excessive animation libraries

# 8. Placeholder Media

Verify:

* All placeholder assets resolve
* No broken image URLs
* Aspect ratios are stable
* Alt text is meaningful
* Placeholder media does not imply it depicts actual IntegrITS operations or employees
* Sample imagery is labeled where necessary
* Remote assets do not create deployment fragility
* SVG files are valid

# 9. Testing

Run:

```bash
npm ci
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
```

Run any end-to-end test suite that exists.

Inspect tests for actual value.

Flag tests that:

* Only snapshot trivial output
* Never exercise routes
* Do not verify all five concepts
* Do not check shared content
* Ignore accessibility
* Pass while navigation is broken
* Mock away the behavior they are meant to verify

Add or repair tests where necessary.

# 10. GitHub Actions

Inspect:

* `.github/workflows/ci.yml`
* `.github/workflows/deploy-pages.yml`

Verify:

* Valid YAML
* Correct triggers
* Correct Node version
* `npm ci`
* Formatting
* Lint
* Type check
* Tests
* Production build
* Correct Pages permissions
* Official Pages actions
* Artifact upload
* Deployment environment
* Correct output directory
* No missing build dependency
* No secret requirement
* No deployment from untrusted pull requests

Repair invalid workflows.

# 11. README

Verify the README includes:

* Project purpose
* Stack
* Routes
* Local setup
* Verification command
* Build command
* Deployment instructions
* Source-file references
* GitHub Pages configuration
* Valid badge syntax
* Placeholder media note
* Accessibility and performance goals

Check that badge paths match actual workflow filenames.

Remove badges for nonexistent services.

# 12. Performance and Production Quality

Inspect:

* Bundle sizes
* Route-level code splitting
* Lazy loading
* Image sizing
* Layout shifts
* Duplicate dependencies
* External fonts
* External scripts
* Render-blocking assets
* Unnecessary rerenders
* Oversized SVGs
* Excessive JavaScript
* Console warnings
* Source-map behavior
* Production error boundaries

Use Lighthouse or equivalent tooling when available.

# 13. Security and Dependency Review

Check:

* No committed secrets
* No credentials
* No unsafe HTML injection
* No unknown remote script
* External links use safe attributes
* Dependencies are maintained
* Lockfile exists
* CI uses `npm ci`
* No accidental analytics
* No development-only code exposed in production

# 14. Repair Phase

After identifying issues, fix all issues that can be corrected safely within the repository.

Do not only write a report.

After repairs, rerun the entire verification suite.

# 15. Final Report

Return a structured report with:

## Executive Result

* Pass
* Pass with minor issues
* Fail

## Verification Table

| Area                       | Result | Evidence |
| -------------------------- | ------ | -------- |
| Source fidelity            |        |          |
| Landing page               |        |          |
| Five concepts              |        |          |
| Visual differentiation     |        |          |
| Routing                    |        |          |
| GitHub Pages compatibility |        |          |
| Responsive design          |        |          |
| Accessibility              |        |          |
| Testing                    |        |          |
| CI                         |        |          |
| Deployment workflow        |        |          |
| README                     |        |          |
| Production build           |        |          |

## Commands Run

Include exact commands and exit results.

## Repairs Made

List changed files and reasons.

## Remaining Issues

Only include real unresolved issues.

## Manual Verification Checklist

Provide a concise checklist for a human reviewer to complete in the browser.

Do not declare success unless all required commands pass and all five concept routes render correctly.
