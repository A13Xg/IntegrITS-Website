export type ConceptSlug =
  'mission-command' | 'human-integrity' | 'precision-grid' | 'modern-defense' | 'editorial-legacy';

export interface Statistic {
  label: string;
  value: string;
  detail: string;
}

export interface Capability {
  id: string;
  title: string;
  summary: string;
  proof: string;
  services: ReadonlyArray<string>;
  assetPath: string;
}

export interface LifecycleStep {
  id: string;
  title: string;
  summary: string;
}

export interface LeaderProfile {
  id: string;
  name: string;
  title: string;
  intro: string;
  theme: string;
  highlights: ReadonlyArray<string>;
  portraitPath: string;
}

export interface LocationProfile {
  id: string;
  name: string;
  region: string;
  summary: string;
  specialties: ReadonlyArray<string>;
}

export interface ContractVehicle {
  name: string;
  detail: string;
  code: string;
  capabilities: ReadonlyArray<string>;
}

export interface Identifier {
  label: string;
  value: string;
}

export interface CareerBenefit {
  title: string;
  description: string;
}

export interface ValueStatement {
  title: string;
  description: string;
}

export interface ContactPath {
  label: string;
  value: string;
}

export interface ConceptSummary {
  slug: ConceptSlug;
  path: string;
  number: string;
  title: string;
  styleLabel: string;
  description: string;
  iconKey: 'crosshair' | 'users' | 'grid' | 'shield' | 'book';
  heroHeadlineIndex: 0 | 1 | 2;
}

export interface CompanyContent {
  brand: {
    name: string;
    publicName: string;
    tagline: string;
    promise: string;
    intro: string;
    founded: string;
    headquarters: string;
    ownership: string;
  };
  heroHeadlines: ReadonlyArray<{
    title: string;
    body: string;
  }>;
  statistics: ReadonlyArray<Statistic>;
  capabilities: ReadonlyArray<Capability>;
  lifecycle: ReadonlyArray<LifecycleStep>;
  leadership: ReadonlyArray<LeaderProfile>;
  locations: ReadonlyArray<LocationProfile>;
  contracts: {
    vehicles: ReadonlyArray<ContractVehicle>;
    identifiers: ReadonlyArray<Identifier>;
  };
  careers: {
    headline: string;
    intro: string;
    veteranMessage: string;
    balanceMessage: string;
    benefits: ReadonlyArray<CareerBenefit>;
    careerFamilies: ReadonlyArray<string>;
  };
  values: ReadonlyArray<ValueStatement>;
  contact: {
    addressLines: ReadonlyArray<string>;
    mainPhone: string;
    fax: string;
    website: string;
    pointOfContact: {
      name: string;
      title: string;
      phone: string;
      email: string;
    };
    contactPaths: ReadonlyArray<ContactPath>;
  };
  concepts: ReadonlyArray<ConceptSummary>;
}
