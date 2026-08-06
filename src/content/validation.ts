/**
 * Runtime validation and accessor helpers for CompanyContent.
 *
 * `validateContent` performs structural checks so that a malformed content
 * object fails fast (at import/hook time) rather than producing confusing
 * rendering bugs deep inside a design concept page.
 */
import type { Capability, CompanyContent, Leader, Location } from './contentTypes';

const EXPECTED_CAPABILITY_IDS: ReadonlyArray<Capability['id']> = [
  'range-engineering',
  'program-management',
  'it-cybersecurity',
];

const EXPECTED_LIFECYCLE_NAMES = [
  'Define',
  'Engineer',
  'Prepare',
  'Execute',
  'Protect',
  'Analyze',
  'Sustain',
];

function fail(message: string): never {
  throw new Error(`Invalid CompanyContent: ${message}`);
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string');
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

/**
 * Validates that `data` structurally matches `CompanyContent` and returns it
 * typed as such. Throws a descriptive Error on any structural violation.
 */
export function validateContent(data: unknown): CompanyContent {
  if (!isRecord(data)) {
    fail('root value must be an object');
  }

  const {
    brand,
    hero,
    statistics,
    capabilities,
    differentiators,
    lifecycle,
    leadership,
    workforce,
    locations,
    contracts,
    careers,
    contact,
    accuracyNotes,
  } = data;

  // --- brand ---
  if (!isRecord(brand)) fail('brand must be an object');
  if (!isNonEmptyString(brand.legalName)) fail('brand.legalName must be a non-empty string');
  if (!isNonEmptyString(brand.displayName)) fail('brand.displayName must be a non-empty string');
  if (typeof brand.foundedYear !== 'number' || !Number.isInteger(brand.foundedYear)) {
    fail('brand.foundedYear must be an integer');
  }

  // --- hero ---
  if (!isRecord(hero)) fail('hero must be an object');
  if (!Array.isArray(hero.headlineOptions) || hero.headlineOptions.length === 0) {
    fail('hero.headlineOptions must be a non-empty array');
  }

  // --- statistics ---
  if (!Array.isArray(statistics)) fail('statistics must be an array');

  // --- capabilities ---
  if (!Array.isArray(capabilities) || capabilities.length !== 3) {
    fail(
      `capabilities must be an array of exactly 3 items (got ${Array.isArray(capabilities) ? capabilities.length : typeof capabilities})`
    );
  }
  const capabilityIds = capabilities.map((c) => (isRecord(c) ? c.id : undefined));
  for (const expectedId of EXPECTED_CAPABILITY_IDS) {
    if (!capabilityIds.includes(expectedId)) {
      fail(`capabilities is missing required id "${expectedId}"`);
    }
  }
  for (const capability of capabilities) {
    if (!isRecord(capability)) fail('each capability must be an object');
    if (!isNonEmptyString(capability.name)) fail('capability.name must be a non-empty string');
    if (!Array.isArray(capability.serviceGroups)) fail('capability.serviceGroups must be an array');
  }

  // --- differentiators ---
  if (!Array.isArray(differentiators)) fail('differentiators must be an array');

  // --- lifecycle ---
  if (!Array.isArray(lifecycle) || lifecycle.length !== 7) {
    fail(
      `lifecycle must be an array of exactly 7 stages (got ${Array.isArray(lifecycle) ? lifecycle.length : typeof lifecycle})`
    );
  }
  const lifecycleNames = lifecycle.map((s) => (isRecord(s) ? s.name : undefined));
  for (const expectedName of EXPECTED_LIFECYCLE_NAMES) {
    if (!lifecycleNames.includes(expectedName)) {
      fail(`lifecycle is missing required stage "${expectedName}"`);
    }
  }

  // --- leadership ---
  if (!Array.isArray(leadership) || leadership.length !== 8) {
    fail(
      `leadership must be an array of exactly 8 leaders (got ${Array.isArray(leadership) ? leadership.length : typeof leadership})`
    );
  }
  for (const leader of leadership) {
    if (!isRecord(leader)) fail('each leader must be an object');
    if (!isNonEmptyString(leader.id)) fail('leader.id must be a non-empty string');
    if (!isNonEmptyString(leader.name)) fail('leader.name must be a non-empty string');
    if (!isNonEmptyString(leader.title)) fail('leader.title must be a non-empty string');
    if (!Array.isArray(leader.background)) fail('leader.background must be an array');
  }

  // --- workforce ---
  if (!isRecord(workforce)) fail('workforce must be an object');
  if (typeof workforce.veteranPercentage !== 'number')
    fail('workforce.veteranPercentage must be a number');
  if (!isStringArray(workforce.benefits)) fail('workforce.benefits must be a string array');
  if (!isStringArray(workforce.careerFamilies))
    fail('workforce.careerFamilies must be a string array');

  // --- locations ---
  if (!Array.isArray(locations) || locations.length !== 9) {
    fail(
      `locations must be an array of exactly 9 locations (got ${Array.isArray(locations) ? locations.length : typeof locations})`
    );
  }
  const headquartersCount = locations.filter(
    (loc) => isRecord(loc) && loc.type === 'headquarters'
  ).length;
  if (headquartersCount !== 1) {
    fail(`locations must contain exactly 1 headquarters entry (got ${headquartersCount})`);
  }
  for (const location of locations) {
    if (!isRecord(location)) fail('each location must be an object');
    if (!isNonEmptyString(location.id)) fail('location.id must be a non-empty string');
    if (!isNonEmptyString(location.name)) fail('location.name must be a non-empty string');
    if (!isStringArray(location.capabilities)) fail('location.capabilities must be a string array');
  }

  // --- contracts ---
  if (!isRecord(contracts)) fail('contracts must be an object');
  if (!isStringArray(contracts.supportedTypes))
    fail('contracts.supportedTypes must be a string array');
  if (!Array.isArray(contracts.vehicles)) fail('contracts.vehicles must be an array');
  if (!isRecord(contracts.identifiers)) fail('contracts.identifiers must be an object');

  // --- careers ---
  if (!isRecord(careers)) fail('careers must be an object');
  if (!isNonEmptyString(careers.headline)) fail('careers.headline must be a non-empty string');

  // --- contact ---
  if (!isRecord(contact)) fail('contact must be an object');
  if (!isRecord(contact.headquarters)) fail('contact.headquarters must be an object');
  if (!isRecord(contact.seaportContact)) fail('contact.seaportContact must be an object');

  // --- accuracyNotes ---
  if (!Array.isArray(accuracyNotes)) fail('accuracyNotes must be an array');

  return data as unknown as CompanyContent;
}

/** Returns the capability with the given id, or undefined if not found. */
export function getCapabilityById(
  content: CompanyContent,
  id: Capability['id']
): Capability | undefined {
  return content.capabilities.find((capability) => capability.id === id);
}

/** Returns the leader with the given id, or undefined if not found. */
export function getLeaderById(content: CompanyContent, id: string): Leader | undefined {
  return content.leadership.find((leader) => leader.id === id);
}

/** Returns the location with the given id, or undefined if not found. */
export function getLocationById(content: CompanyContent, id: string): Location | undefined {
  return content.locations.find((location) => location.id === id);
}
