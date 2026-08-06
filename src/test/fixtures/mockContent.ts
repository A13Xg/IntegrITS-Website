/**
 * Minimal mock CompanyContent for component tests.
 *
 * Values are placeholders (NOT real IntegrITS facts) but the object is
 * structurally complete and satisfies CompanyContent, including the
 * literal-union constraints on capability ids and lifecycle stage names.
 * Use this fixture instead of the real `integritsContent` in component
 * tests so tests don't couple to source-document wording changes.
 */
import type { CompanyContent } from '../../content/contentTypes';

export const mockContent: CompanyContent = {
  brand: {
    legalName: 'Mock Corporation',
    displayName: 'MockCo',
    tagline: 'Mock Tagline',
    brandPromise: 'Mock brand promise.',
    oneSentenceDescription: 'Mock one-sentence description.',
    shortIntroduction: 'Mock short introduction paragraph.',
    foundedYear: 2000,
    headquartersCity: 'Mock City',
    headquartersState: 'Mock State',
    designation: 'Mock Designation',
  },
  hero: {
    headlineOptions: [
      {
        id: 'A',
        label: 'Mock Option A',
        headline: 'Mock Headline A',
        supportingCopy: 'Mock supporting copy A.',
        callsToAction: ['Mock CTA'],
      },
    ],
    recognitionBarStatIds: ['mock-stat'],
    alternateRecognitionLine: 'Mock alternate recognition line.',
    alternateRecognitionCaveat: 'Mock caveat.',
    overview: 'Mock overview.',
    marketStatement: 'Mock market statement.',
  },
  statistics: [{ id: 'mock-stat', label: 'Mock Stat', value: '100%' }],
  capabilities: [
    {
      id: 'range-engineering',
      name: 'Mock Range Engineering',
      quickDescription: 'Mock quick description.',
      summary: 'Mock summary.',
      serviceGroups: [{ title: 'Mock Group', items: ['Mock Item'] }],
      shortCard: 'Mock short card.',
      proofStatement: 'Mock proof statement.',
    },
    {
      id: 'program-management',
      name: 'Mock Program Management',
      quickDescription: 'Mock quick description.',
      summary: 'Mock summary.',
      serviceGroups: [{ title: 'Mock Group', items: ['Mock Item'] }],
      shortCard: 'Mock short card.',
      proofStatement: 'Mock proof statement.',
    },
    {
      id: 'it-cybersecurity',
      name: 'Mock IT & Cybersecurity',
      quickDescription: 'Mock quick description.',
      summary: 'Mock summary.',
      serviceGroups: [{ title: 'Mock Group', items: ['Mock Item'] }],
      shortCard: 'Mock short card.',
      proofStatement: 'Mock proof statement.',
    },
  ],
  differentiators: [
    { id: 'mock-differentiator', title: 'Mock Differentiator', description: 'Mock description.' },
  ],
  lifecycle: [
    { id: 'define', order: 1, name: 'Define', description: 'Mock define.' },
    { id: 'engineer', order: 2, name: 'Engineer', description: 'Mock engineer.' },
    { id: 'prepare', order: 3, name: 'Prepare', description: 'Mock prepare.' },
    { id: 'execute', order: 4, name: 'Execute', description: 'Mock execute.' },
    { id: 'protect', order: 5, name: 'Protect', description: 'Mock protect.' },
    { id: 'analyze', order: 6, name: 'Analyze', description: 'Mock analyze.' },
    { id: 'sustain', order: 7, name: 'Sustain', description: 'Mock sustain.' },
  ],
  leadership: [
    {
      id: 'mock-leader-1',
      name: 'Mock Leader One',
      title: 'Mock Chief Executive Officer',
      introduction: 'Mock introduction.',
      background: ['Mock background bullet'],
      theme: 'Mock Integrity',
    },
    {
      id: 'mock-leader-2',
      name: 'Mock Leader Two',
      title: 'Mock Chief Operating Officer',
      introduction: 'Mock introduction.',
      background: [],
      theme: 'Mock Integrity',
      sourceLimitation: 'Mock source limitation note.',
    },
  ],
  workforce: {
    veteranPercentage: 50,
    veteranPercentageLabel: 'Mock 50% Veteran',
    veteranCopy: 'Mock veteran copy.',
    workLifeBalanceCopy: 'Mock work-life balance copy.',
    benefits: ['Mock benefit'],
    careerFamilies: ['Mock career family'],
    employeeCountCaveat: 'Mock employee count caveat.',
  },
  locations: [
    {
      id: 'mock-hq',
      name: 'Mock HQ City',
      state: 'Mock State',
      type: 'headquarters',
      capabilities: ['Mock capability'],
    },
    {
      id: 'mock-field-1',
      name: 'Mock Field One',
      state: 'Mock State',
      type: 'field',
      capabilities: [],
    },
  ],
  contracts: {
    supportedTypes: ['Mock Contract Type'],
    vehicles: [
      {
        id: 'mock-vehicle',
        name: 'Mock Vehicle',
        description: 'Mock vehicle description.',
        contractNumber: 'MOCK123',
        expirationDate: 'January 1, 2030',
      },
    ],
    identifiers: {
      legalEntity: 'Mock Corporation',
      uei: 'MOCKUEI000000',
      cageCode: '0MOCK',
      primaryNaics: '000000 — Mock NAICS',
      additionalNaics: '000001 — Mock Additional NAICS',
    },
  },
  careers: {
    headline: 'Mock Careers Headline',
    copy: 'Mock careers copy.',
    locationIds: ['mock-hq', 'mock-field-1'],
  },
  contact: {
    headquarters: {
      name: 'Mock Corporation',
      addressLine1: '1 Mock Way',
      addressLine2: '',
      city: 'Mock City',
      state: 'MS',
      zip: '00000',
      phone: '+1 000-000-0000',
      fax: '+1 000-000-0001',
      website: 'mock.example.com',
    },
    seaportContact: {
      name: 'Mock Contact',
      title: 'Mock President & COO',
      phone: '+1 000-000-0002',
      email: 'mock@mock.example.com',
    },
    contactPaths: ['Mock inquiries'],
  },
  accuracyNotes: [{ id: 'mock-note', topic: 'Mock topic', note: 'Mock note.' }],
};
