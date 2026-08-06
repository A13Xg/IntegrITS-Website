import { describe, it, expect } from 'vitest';
import { integritsContent } from '../../src/content/integritsContent';
import {
  validateContent,
  getCapabilityById,
  getLeaderById,
  getLocationById,
} from '../../src/content/validation';

describe('CompanyContent structure', () => {
  it('validates without throwing', () => {
    expect(() => validateContent(integritsContent)).not.toThrow();
  });

  it('rejects a structurally invalid object', () => {
    expect(() => validateContent({})).toThrow(/Invalid CompanyContent/);
    expect(() => validateContent(null)).toThrow(/Invalid CompanyContent/);
    expect(() => validateContent('not an object')).toThrow(/Invalid CompanyContent/);
  });
});

describe('Capabilities', () => {
  it('has exactly 3 capabilities', () => {
    expect(integritsContent.capabilities).toHaveLength(3);
  });

  it('has the correct capability ids', () => {
    const ids = integritsContent.capabilities.map((c) => c.id).sort();
    expect(ids).toEqual(['it-cybersecurity', 'program-management', 'range-engineering'].sort());
  });

  it('resolves each capability by id via the accessor', () => {
    expect(getCapabilityById(integritsContent, 'range-engineering')?.name).toBe(
      'Range Engineering & Technical Services'
    );
    expect(getCapabilityById(integritsContent, 'program-management')?.name).toBe(
      'Program Management'
    );
    expect(getCapabilityById(integritsContent, 'it-cybersecurity')?.name).toBe(
      'Information Technology & Cybersecurity'
    );
  });

  it('gives each capability a non-empty summary and at least one service group', () => {
    for (const capability of integritsContent.capabilities) {
      expect(capability.summary.length).toBeGreaterThan(0);
      expect(capability.serviceGroups.length).toBeGreaterThan(0);
    }
  });
});

describe('Lifecycle', () => {
  it('has exactly 7 stages in order Define..Sustain', () => {
    expect(integritsContent.lifecycle).toHaveLength(7);
    const names = integritsContent.lifecycle.sort((a, b) => a.order - b.order).map((s) => s.name);
    expect(names).toEqual([
      'Define',
      'Engineer',
      'Prepare',
      'Execute',
      'Protect',
      'Analyze',
      'Sustain',
    ]);
  });
});

describe('Leadership', () => {
  it('has exactly 8 leaders', () => {
    expect(integritsContent.leadership).toHaveLength(8);
  });

  it('renders every leader with a name, title, and theme', () => {
    for (const leader of integritsContent.leadership) {
      expect(leader.name.length).toBeGreaterThan(0);
      expect(leader.title.length).toBeGreaterThan(0);
      expect(leader.theme.length).toBeGreaterThan(0);
    }
  });

  it('resolves a known leader by id via the accessor', () => {
    const leader = getLeaderById(integritsContent, 'clarence-carter');
    expect(leader?.name).toBe('Clarence Carter');
    expect(leader?.title).toBe('Chairman & Chief Executive Officer');
  });

  it('returns undefined for an unknown leader id', () => {
    expect(getLeaderById(integritsContent, 'not-a-real-leader')).toBeUndefined();
  });

  it('includes all 8 named leaders from the source document', () => {
    const names = integritsContent.leadership.map((l) => l.name).sort();
    expect(names).toEqual(
      [
        'Clarence Carter',
        'Steve Fox',
        'Ivy Carter',
        'Michael Sosamon',
        'Vanessa Valdez',
        'Jim Lyon',
        'Sarah Carter',
        'Ana Basada',
      ].sort()
    );
  });

  it('carries a sourceLimitation caveat for Vanessa Valdez and does not invent her background', () => {
    const leader = getLeaderById(integritsContent, 'vanessa-valdez');
    expect(leader?.sourceLimitation).toBeTruthy();
    expect(leader?.background).toEqual([]);
  });

  it('gives Steve Fox the current title, not the outdated contracts-page title', () => {
    const leader = getLeaderById(integritsContent, 'steve-fox');
    expect(leader?.title).toBe('President & Chief Operating Officer');
    expect(leader?.title).not.toBe('Vice President and COO');
  });
});

describe('Locations', () => {
  it('has exactly 9 locations', () => {
    expect(integritsContent.locations).toHaveLength(9);
  });

  it('renders every location with a name and id', () => {
    for (const location of integritsContent.locations) {
      expect(location.id.length).toBeGreaterThan(0);
      expect(location.name.length).toBeGreaterThan(0);
    }
  });

  it('has exactly one headquarters location, San Diego', () => {
    const hqLocations = integritsContent.locations.filter((l) => l.type === 'headquarters');
    expect(hqLocations).toHaveLength(1);
    expect(hqLocations[0].name).toBe('San Diego');
  });

  it('resolves a known location by id via the accessor', () => {
    expect(getLocationById(integritsContent, 'pearl-harbor')?.state).toBe('Hawaii');
  });

  it('returns undefined for an unknown location id', () => {
    expect(getLocationById(integritsContent, 'not-a-real-location')).toBeUndefined();
  });
});

describe('Verified facts (exact values from source)', () => {
  it('states the founding year as 2000', () => {
    expect(integritsContent.brand.foundedYear).toBe(2000);
  });

  it('states the veteran workforce percentage as 70', () => {
    expect(integritsContent.workforce.veteranPercentage).toBe(70);
  });

  it('uses the corrected CAGE code 1LVF2, not the erroneous 1LVF22', () => {
    expect(integritsContent.contracts.identifiers.cageCode).toBe('1LVF2');
    expect(integritsContent.contracts.identifiers.cageCode).not.toBe('1LVF22');
  });

  it('states the correct UEI', () => {
    expect(integritsContent.contracts.identifiers.uei).toBe('QVMYLK59N3G2');
  });

  it('references the OASIS+ contract number and expiration', () => {
    const oasis = integritsContent.contracts.vehicles.find((v) => v.id === 'oasis-plus');
    expect(oasis?.contractNumber).toBe('47QRCA25DS352');
    expect(oasis?.expirationDate).toBe('December 18, 2029');
  });

  it('uses the legal name Integrits Corporation and display name IntegrITS', () => {
    expect(integritsContent.brand.legalName).toBe('Integrits Corporation');
    expect(integritsContent.brand.displayName).toBe('IntegrITS');
  });
});

describe('No unsupported facts', () => {
  it('does not state a hard employee-count number and carries the caveat instead', () => {
    expect(Object.prototype.hasOwnProperty.call(integritsContent.workforce, 'employeeCount')).toBe(
      false
    );
    expect(integritsContent.workforce.employeeCountCaveat.length).toBeGreaterThan(0);
  });

  it('does not claim any certifications (ISO, CMMI, etc.)', () => {
    const serialized = JSON.stringify(integritsContent);
    expect(serialized).not.toMatch(/ISO 9001|CMMI Level/);
    const certNote = integritsContent.accuracyNotes.find((n) => n.id === 'certifications');
    expect(certNote).toBeDefined();
  });

  it('carries an accuracy note for every caveated topic named in the source', () => {
    const topics = integritsContent.accuracyNotes.map((n) => n.id).sort();
    expect(topics).toEqual(
      [
        'steve-fox-title',
        'cage-code',
        'headquarters-address',
        'naics-codes',
        'business-designations',
        'employee-count',
        'federal-awards',
        'sam-expiration',
        'security-clearances',
        'certifications',
      ].sort()
    );
  });

  it('caveats the veteran-powered-workforce differentiator against overstating clearances', () => {
    const differentiator = integritsContent.differentiators.find(
      (d) => d.id === 'veteran-powered-workforce'
    );
    expect(differentiator?.caveat).toBeTruthy();
  });

  it('does not include any leader with an empty/placeholder name', () => {
    expect(integritsContent.leadership.every((l) => l.name.trim().length > 0)).toBe(true);
  });
});
