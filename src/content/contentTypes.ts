/**
 * Typed content model for the IntegrITS Design Showcase.
 *
 * All facts represented by these types must originate from
 * `/refData/IntegrITS_WebsitePlan-content.md`. Where the source document
 * caveats a fact (using language like "infer", "may", "should verify", or
 * "do not present as a hard statistic"), the corresponding field here is
 * either optional or paired with a caveat/note field so the caveat travels
 * with the data into every consuming concept page.
 */

/** Company brand identity facts (source: section 1, "Brand Foundation"). */
export interface Brand {
  /** Registered legal entity name. */
  legalName: string;
  /** Public-facing brand style. */
  displayName: string;
  /** Primary tagline. */
  tagline: string;
  /** Expanded brand promise statement. */
  brandPromise: string;
  /** One-sentence company description. */
  oneSentenceDescription: string;
  /** Short homepage introduction paragraph. */
  shortIntroduction: string;
  /** Year the company was founded. */
  foundedYear: number;
  headquartersCity: string;
  headquartersState: string;
  /** Primary business designation, e.g. "Veteran-Owned Small Business". */
  designation: string;
}

/** One of the three hero headline options offered by the source (A/B/C). */
export interface HeroHeadlineOption {
  id: 'A' | 'B' | 'C';
  /** Short human label for the option, e.g. "Best Overall". */
  label: string;
  headline: string;
  supportingCopy: string;
  /** Only Option A publishes suggested calls to action in the source. */
  callsToAction?: string[];
}

/** Homepage hero and recognition-bar content (source: section 2). */
export interface Hero {
  headlineOptions: HeroHeadlineOption[];
  /** Ordered list of Statistic.id values to render in the recognition bar. */
  recognitionBarStatIds: string[];
  /** The shorter alternative recognition-bar phrasing using "25+ years". */
  alternateRecognitionLine: string;
  /**
   * Source caveat: only use the "25+ years" phrasing when the site is
   * maintained dynamically; the fixed founding year is safer long-term.
   */
  alternateRecognitionCaveat: string;
  overview: string;
  marketStatement: string;
}

/** A single labeled homepage/recognition-bar metric. */
export interface Statistic {
  id: string;
  label: string;
  value: string;
  description?: string;
}

/** A titled group of related service/system items within a capability. */
export interface ServiceGroup {
  title: string;
  items: string[];
}

/** One of the three core capability areas (source: section 4). */
export interface Capability {
  id: 'range-engineering' | 'program-management' | 'it-cybersecurity';
  name: string;
  quickDescription: string;
  summary: string;
  serviceGroups: ServiceGroup[];
  shortCard: string;
  proofStatement: string;
}

/** A public differentiator (source: section 8, "Experience and Differentiators"). */
export interface Differentiator {
  id: string;
  title: string;
  description: string;
  /** Present when the source explicitly cautions against overstating this claim. */
  caveat?: string;
}

/** One stage of the seven-stage integrated mission-support life cycle (source: section 5). */
export interface LifecycleStage {
  id: string;
  order: number;
  name: 'Define' | 'Engineer' | 'Prepare' | 'Execute' | 'Protect' | 'Analyze' | 'Sustain';
  description: string;
}

/** An executive leadership profile (source: section 11). */
export interface Leader {
  id: string;
  name: string;
  title: string;
  /** Present only for leaders with a second published title (e.g. Jim Lyon). */
  secondaryTitle?: string;
  introduction: string;
  /** Bulleted "Key background" facts, copied verbatim from the source. */
  background: string[];
  affiliations?: string[];
  humanElement?: string;
  theme: string;
  /**
   * Present only when the source explicitly states the public biography is
   * limited (e.g. Vanessa Valdez). When set, consuming UI must not imply a
   * fuller biography exists.
   */
  sourceLimitation?: string;
}

/** Workforce/culture facts feeding the Careers page and homepage blocks (source: section 12). */
export interface WorkforceContent {
  /** "More than 70%" — represented as the numeric floor stated in the source. */
  veteranPercentage: number;
  veteranPercentageLabel: string;
  veteranCopy: string;
  workLifeBalanceCopy: string;
  benefits: string[];
  careerFamilies: string[];
  /**
   * Source caveat: a third-party profile lists 51-200 employees, but the
   * company does not publish an exact headcount. Do not surface a hard
   * employee-count statistic without this caveat.
   */
  employeeCountCaveat: string;
}

/** One of the nine operational locations (source: section 7). */
export interface Location {
  id: string;
  name: string;
  state: string;
  type: 'headquarters' | 'field';
  description?: string;
  /**
   * Capability/activity bullets specific to this location. Empty when the
   * source lists the location without location-specific capability detail
   * (e.g. Fort Irwin, Hill AFB, Phoenix, Raleigh under "Other Field
   * Operations") — left empty rather than invented.
   */
  capabilities: string[];
}

/** A named contract vehicle IntegrITS holds or supports (source: section 9). */
export interface ContractVehicle {
  id: string;
  name: string;
  description: string;
  contractNumber?: string;
  expirationDate?: string;
  capabilityAreas?: string[];
}

/** Verified federal contracting identifiers (source: section 10). */
export interface ContractIdentifiers {
  legalEntity: string;
  /** Unique Entity Identifier. */
  uei: string;
  /** CAGE code — verified as 1LVF2 (NOT 1LVF22, an error in two source reports). */
  cageCode: string;
  primaryNaics: string;
  additionalNaics: string;
}

/** Contracting-page content (source: sections 9 and 10). */
export interface ContractContent {
  supportedTypes: string[];
  vehicles: ContractVehicle[];
  identifiers: ContractIdentifiers;
}

/** Careers-page headline content (source: section 12). Benefits and career
 * families live on WorkforceContent per the task brief's grouping. */
export interface CareersContent {
  headline: string;
  copy: string;
  /** Location.id values relevant to the careers page. */
  locationIds: string[];
}

/** Corporate headquarters mailing/contact details (source: section 19). */
export interface ContactAddress {
  name: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  fax?: string;
  website?: string;
}

/** SeaPort-NxG point of contact (source: section 19). */
export interface SeaportContact {
  name: string;
  title: string;
  phone: string;
  email: string;
}

/** Contact-page content (source: section 19). */
export interface ContactContent {
  headquarters: ContactAddress;
  seaportContact: SeaportContact;
  contactPaths: string[];
}

/**
 * A caveat carried over from source section 17 ("Accuracy, Conflict, and
 * Publication Notes"). Consuming pages should treat these as constraints,
 * not as content to display verbatim by default.
 */
export interface AccuracyNote {
  id: string;
  topic: string;
  note: string;
}

/** Root content object — single source of truth for all five design concepts. */
export interface CompanyContent {
  brand: Brand;
  hero: Hero;
  statistics: Statistic[];
  capabilities: Capability[];
  differentiators: Differentiator[];
  lifecycle: LifecycleStage[];
  leadership: Leader[];
  workforce: WorkforceContent;
  locations: Location[];
  contracts: ContractContent;
  careers: CareersContent;
  contact: ContactContent;
  accuracyNotes: AccuracyNote[];
}
