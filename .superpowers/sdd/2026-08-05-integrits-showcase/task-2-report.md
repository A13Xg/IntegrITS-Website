# Task 2 Report: Content Model & Data Layer

## Status: DONE

## Summary

Built the typed, single-source-of-truth content model consumed by all five
design concepts via `useContent()`. All facts were manually transcribed from
`/refData/IntegrITS_WebsitePlan-content.md`; nothing was invented. Every
field traces back to a specific section of that document (see inline
`// Source: section N, "..."` comments in `integritsContent.ts`).

## Files Created

1. `src/content/contentTypes.ts` — All TypeScript interfaces (`Brand`, `Hero`,
   `HeroHeadlineOption`, `Statistic`, `ServiceGroup`, `Capability`,
   `Differentiator`, `LifecycleStage`, `Leader`, `WorkforceContent`,
   `Location`, `ContractVehicle`, `ContractIdentifiers`, `ContractContent`,
   `CareersContent`, `ContactAddress`, `SeaportContact`, `ContactContent`,
   `AccuracyNote`, `CompanyContent`). Strict, no `any`. Literal unions used
   where the source is closed-ended (capability ids, lifecycle stage names,
   location type, hero headline option id).
2. `src/content/integritsContent.ts` — The populated `CompanyContent` object.
3. `src/content/validation.ts` — `validateContent(data: unknown): CompanyContent`
   (throws descriptive `Error` on structural violations) plus
   `getCapabilityById`, `getLeaderById`, `getLocationById` accessors.
4. `src/hooks/useContent.ts` — `useContent()` hook, memoized with `useMemo`,
   wraps `validateContent(integritsContent)`.
5. `src/test/fixtures/mockContent.ts` — Minimal, structurally-complete
   `CompanyContent` mock with clearly-labeled placeholder values (not real
   IntegrITS facts) for component-level tests.
6. `tests/unit/contentTypes.test.ts` — 30 tests covering structure
   validation, capability/leader/location accessors and counts, exact-value
   checks (founded 2000, veteran % 70, CAGE `1LVF2` not `1LVF22`, UEI
   `QVMYLK59N3G2`, OASIS+ contract `47QRCA25DS352` / expiry Dec 18 2029), and
   "no unsupported facts" checks (no hard employee count, no invented
   certifications, every accuracy-note topic present, Vanessa Valdez's
   `sourceLimitation` preserved with an empty `background`).

## Files Modified (config only, to support `tests/` outside `src/`)

- `vitest.config.ts` — added `'tests/**/*.test.{ts,tsx}'` to `test.include`
  (previously only matched `src/**/*.test.{ts,tsx}`, which would not have
  discovered `tests/unit/contentTypes.test.ts`).
- `tsconfig.json` — added `"tests"` to `include` so `tsc --noEmit` /
  `tsc -b` actually type-check the new test file instead of silently
  skipping it.

## Key Modeling Decisions

- **Capabilities**: 3 items, `id` restricted to
  `'range-engineering' | 'program-management' | 'it-cybersecurity'`. Each
  capability's full service/system lists are grouped under `serviceGroups`
  (titled sublists) exactly matching the source's subsections (e.g. Range
  Engineering has "Core Systems and Environments", "Engineering and Test
  Services", "Mission Areas").
- **Differentiators**: included all 6 from source section 8 (Veteran-Powered
  Workforce, Deep Range Specialization, Full-Life-Cycle Support, Technical
  and Administrative Integration, Established Defense Presence, Prime and
  Subcontract Execution) — the brief's list ("veteran workforce,
  specialization, full-lifecycle, integration") was illustrative, not
  exhaustive, so all six were kept to avoid dropping real, sourced content.
  The veteran-workforce differentiator carries a `caveat` field with the
  source's explicit "do not claim active clearances" warning.
- **Leadership**: exactly 8 leaders. Vanessa Valdez has `background: []` and
  a populated `sourceLimitation` field per the source's explicit statement
  that no detailed public biography exists — no invented experience,
  education, or tenure. Steve Fox's title is set to the *current* "President
  & Chief Operating Officer" (not the outdated contracts-page "Vice
  President and COO"), per the source's resolved-conflict guidance.
- **Locations**: exactly 9, one `type: 'headquarters'` (San Diego) and 8
  `type: 'field'`. Fort Irwin, Hill AFB, Phoenix, and Raleigh have
  `capabilities: []` because the source lists them under "Other Field
  Operations" without location-specific capability detail — left empty
  rather than fabricated.
- **Contracts**: `identifiers.cageCode` is `'1LVF2'` (verified correct form;
  the source explicitly flags `1LVF22` as an error in two reports).
  `vehicles` includes SeaPort-NxG (all 9 published capability areas) and
  OASIS+ Small Business (`47QRCA25DS352`, expiring December 18, 2029). Other
  source-documented programs (Joint Range Technical Services, Mobile At-Sea
  Sensor System award, NAVWAR/PMW 170, the $102.1M cumulative-awards figure)
  were intentionally left out of the typed `ContractVehicle[]` list because
  the source itself flags them as time-sensitive/unverified for permanent
  publication — that caution is instead captured in `accuracyNotes`
  (`federal-awards`) rather than presented as a stable structured fact.
- **Workforce**: `veteranPercentage: 70` (numeric floor of "more than 70%"),
  with `employeeCountCaveat` explicitly stating the 51–200 range is
  third-party-only and not a company-published statistic — no `employeeCount`
  field exists on the type, so it structurally cannot be misused as a hard
  number.
- **Accuracy notes**: 10 entries transcribing section 17 ("Accuracy,
  Conflict, and Publication Notes") verbatim in spirit — Steve Fox title,
  CAGE code, headquarters address conflict, NAICS codes, business
  designations, employee count, federal awards, SAM expiration, security
  clearances, and certifications (explicitly: no ISO/CMMI/etc. are
  established in source, so none are claimed anywhere in the content model).

## Test Verification

```
npm run test        →  2 test files, 31 tests passed (30 in contentTypes.test.ts + 1 pre-existing App.test.tsx)
npm run typecheck   →  clean, no errors
npm run build       →  tsc -b && vite build succeeded, 35 modules transformed
npm run lint         →  clean, no errors (checked, not required by task but part of project verify pipeline)
npm run format:check →  clean after running `npm run format` once (Prettier auto-wrapped the new files' long lines)
```

Full output was not pasted here per instructions; all four required
commands (test, typecheck, build, plus lint/format as a courtesy check)
were run directly and returned success as shown above.

## Concerns / Follow-ups for Later Tasks

1. **`tests/` vs `src/` test convention**: The scaffolded project (Task 1)
   only wired up `src/**/*.test.{ts,tsx}` in `vitest.config.ts` and only
   included `"src"` in `tsconfig.json`. Since the brief explicitly asked for
   `tests/unit/contentTypes.test.ts`, I extended both configs to also cover
   `tests/`. If later tasks want all tests colocated under `src/`, this
   convention should be decided once and applied consistently — right now
   both patterns are supported.
2. **`tsconfig.app.json`** appears to be an orphaned file (no `references`
   from `tsconfig.json`, not used by any script in `package.json`). Left
   untouched since it's out of scope for this task, but worth a cleanup
   pass later.
3. **Contract vehicles beyond SeaPort-NxG/OASIS+**: Joint Range Technical
   Services and the Mobile At-Sea Sensor System IDIQ are real, sourced
   programs with good narrative value, but the source explicitly cautions
   against presenting them as confirmed current contract labels without
   company confirmation. They are omitted from `ContractContent.vehicles`
   by design. If a later task wants to display them (e.g., as "Selected
   Programs" narrative blocks, not identifiers), that content should be
   added as a new, clearly-caveated field rather than folded into
   `ContractVehicle[]`.
4. **`validateContent` enforces exact counts** (3 capabilities, 7 lifecycle
   stages, 8 leaders, 9 locations, 1 headquarters). This matches the task's
   explicit test requirements but means `validateContent` is intentionally
   coupled to this specific content set, not a generic reusable schema
   validator. `mockContent.ts` therefore is NOT passed through
   `validateContent` in tests (it intentionally has fewer leaders/locations
   for brevity) — component tests should inject `mockContent` directly as
   props/hook-mocks rather than running it through `validateContent`.

## Commits

Not yet committed — awaiting confirmation this report satisfies the task
before creating the commit (repo state has these files staged/untracked
only; no commit created by this agent run).
