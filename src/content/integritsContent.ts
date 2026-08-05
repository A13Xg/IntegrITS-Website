import type {
  CompanyContent,
  ConceptSlug,
  ConceptSummary,
  LifecycleStep,
  LeaderProfile,
  LocationProfile,
  Capability,
  ValueStatement,
} from './contentTypes';

export const sectionLinks = [
  { id: 'stats', label: 'Stats' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'lifecycle', label: 'Lifecycle' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'locations', label: 'Locations' },
  { id: 'contracts', label: 'Contracts' },
  { id: 'careers', label: 'Careers' },
  { id: 'contact', label: 'Contact' },
] as const;

const capabilities: ReadonlyArray<Capability> = [
  {
    id: 'range-engineering',
    title: 'Range Engineering & Technical Services',
    summary:
      'Operate, maintain, modernize, and support the instrumentation, infrastructure, and mission systems behind military test and training environments.',
    proof:
      'IntegrITS supports the complete test mission—from requirements and instrumentation planning through integration, readiness review, mission execution, data collection, analysis, and sustainment.',
    services: [
      'Radar, telemetry, optical tracking, TSPI, and ACMI support',
      'Flight-test instrumentation and mission-control systems',
      'Test planning, readiness reviews, and data analysis',
      'Range safety, infrastructure planning, and modernization',
      'Operations, maintenance, repair, and sustainment',
    ],
    assetPath: 'placeholders/capability-range.svg',
  },
  {
    id: 'program-management',
    title: 'Program Management',
    summary:
      'Connect strategy, acquisition, resources, compliance, and day-to-day execution so complex programs can move forward with control and clarity.',
    proof:
      'IntegrITS helps customers manage the technical, financial, regulatory, logistical, and organizational demands surrounding complex government programs.',
    services: [
      'PMO, PEO, and acquisition life-cycle support',
      'Budgets, schedules, risk, and performance tracking',
      'Integrated logistics support and sustainment planning',
      'Quality assurance, compliance, and process improvement',
      'Training, workforce support, and business continuity',
    ],
    assetPath: 'placeholders/capability-program.svg',
  },
  {
    id: 'it-cybersecurity',
    title: 'IT & Cybersecurity',
    summary:
      'Design, operate, secure, and sustain enterprise technology environments that support mission and business operations.',
    proof:
      'IntegrITS spans both sides of enterprise technology: building and operating the environment while helping customers authorize, secure, recover, and sustain it.',
    services: [
      'Enterprise infrastructure, cloud, and network engineering',
      'RMF support, A&A, vulnerability assessments, and PKI',
      'Network operations, help desk, and managed services',
      'C4I integration, command-and-control, and ERP/CRM support',
      'Disaster recovery, defense-in-depth, and end-user operations',
    ],
    assetPath: 'placeholders/capability-cyber.svg',
  },
];

const lifecycle: ReadonlyArray<LifecycleStep> = [
  {
    id: 'define',
    title: 'Define',
    summary: 'Requirements, architecture, acquisition alignment, and mission planning.',
  },
  {
    id: 'engineer',
    title: 'Engineer',
    summary: 'Systems design, infrastructure engineering, and technical integration.',
  },
  {
    id: 'prepare',
    title: 'Prepare',
    summary: 'Readiness reviews, policies, training, and execution planning.',
  },
  {
    id: 'execute',
    title: 'Execute',
    summary: 'Mission support, test conduct, and day-to-day operational delivery.',
  },
  {
    id: 'protect',
    title: 'Protect',
    summary: 'Cybersecurity, safety, compliance, quality, and risk controls.',
  },
  {
    id: 'analyze',
    title: 'Analyze',
    summary: 'Data collection, performance metrics, reporting, and insight generation.',
  },
  {
    id: 'sustain',
    title: 'Sustain',
    summary: 'Maintenance, logistics, modernization, and continuity over time.',
  },
];

const leadership: ReadonlyArray<LeaderProfile> = [
  {
    id: 'clarence-carter',
    name: 'Clarence Carter',
    title: 'Chairman & Chief Executive Officer',
    intro:
      'Founder and strategic leader with more than 38 years of Department of Defense operational, engineering, management, and professional-services experience.',
    theme: 'Strategic Integrity',
    highlights: [
      'Founded IntegrITS in 2000 and led its long-range vision from day one.',
      'Former Litton/PRC executive manager and board member.',
      'Completed executive business programs at UVA Darden and MIT Sloan.',
    ],
    portraitPath: 'placeholders/leadership-clarence-carter.svg',
  },
  {
    id: 'steve-fox',
    name: 'Steve Fox',
    title: 'President & Chief Operating Officer',
    intro:
      'Defense-industry executive and engineer with more than 42 years of experience leading programs, contracts, technical teams, and corporate operations.',
    theme: 'Operational Integrity',
    highlights: [
      'Joined IntegrITS in 2001 and directs day-to-day operations.',
      'Led combat-system integration testing and CEC deployments.',
      'Supported MDA test events at PMRF, Edwards AFB, and NIWC Pacific.',
    ],
    portraitPath: 'placeholders/leadership-steve-fox.svg',
  },
  {
    id: 'ivy-carter',
    name: 'Ivy Carter',
    title: 'Chief Financial Officer',
    intro:
      'Finance leader with more than 45 years of accounting and financial experience, including 25 years as a defense-contractor CFO.',
    theme: 'Financial Integrity',
    highlights: [
      'Built the company accounting infrastructure at its founding.',
      'Oversees taxes, planning, cash management, and internal controls.',
      'Active in the American Accounting Association and NCMA.',
    ],
    portraitPath: 'placeholders/leadership-ivy-carter.svg',
  },
  {
    id: 'michael-sosamon',
    name: 'Michael Sosamon',
    title: 'Vice President & Chief Administration Officer',
    intro:
      'Defense professional with more than 33 years of industry experience across Navy operations, systems engineering, program management, administration, security, and safety.',
    theme: 'Administrative Integrity',
    highlights: [
      'Supported IntegrITS since its inception.',
      'Former Litton/PRC program manager and senior systems engineer.',
      'Retired from a 20-year U.S. Navy career as an Operations Specialist.',
    ],
    portraitPath: 'placeholders/leadership-michael-sosamon.svg',
  },
  {
    id: 'vanessa-valdez',
    name: 'Vanessa Valdez',
    title: 'Chief Human Resources Officer',
    intro:
      'Executive leader responsible for the people, workforce, and human-resources functions that support IntegrITS employees and organizational growth.',
    theme: 'People-Centered Integrity',
    highlights: [
      'Shapes workforce experience, hiring strategy, and organizational support.',
      'Centers people systems around respect, balance, and readiness.',
      'Represents the employee-focused side of mission delivery.',
    ],
    portraitPath: 'placeholders/leadership-vanessa-valdez.svg',
  },
  {
    id: 'jim-lyon',
    name: 'Jim Lyon',
    title: 'Corporate Operations & Compliance Officer / Facility Security Officer',
    intro:
      'Defense Industrial Base operations, compliance, security, and infrastructure leader with more than 36 years of experience.',
    theme: 'Security and Compliance Integrity',
    highlights: [
      'Leads industrial compliance, physical security, and facility oversight.',
      'Served as a U.S. Navy Cryptologic Technician and Northrop Grumman FSO.',
      'Brings network infrastructure and personnel-clearance experience.',
    ],
    portraitPath: 'placeholders/leadership-jim-lyon.svg',
  },
  {
    id: 'sarah-carter',
    name: 'Sarah Carter',
    title: 'Chief Communications Officer',
    intro:
      'Communications leader with more than 15 years of experience across defense professional services, higher education, and international nonprofit organizations.',
    theme: 'Communicating Integrity',
    highlights: [
      'Leads strategic communications, brand messaging, and campaign alignment.',
      'Returned to IntegrITS after beginning as a summer intern.',
      'Brings a Pepperdine background in international studies and social entrepreneurship.',
    ],
    portraitPath: 'placeholders/leadership-sarah-carter.svg',
  },
  {
    id: 'ana-basada',
    name: 'Ana Basada',
    title: 'Director of Contracts',
    intro:
      'Contracts and acquisition professional with approximately 29 years of defense-industry experience.',
    theme: 'Contractual Integrity',
    highlights: [
      'Leads teaming agreements, subcontracts, NDAs, and cost proposals.',
      'Oversees FAR-aligned contract compliance and teaming execution.',
      'Brings prior acquisition leadership experience from CSRA/GDIT.',
    ],
    portraitPath: 'placeholders/leadership-ana-basada.svg',
  },
];

const locations: ReadonlyArray<LocationProfile> = [
  {
    id: 'san-diego',
    name: 'San Diego HQ',
    region: 'California',
    summary:
      'Corporate headquarters supporting NAVWAR, NIWC Pacific, contracts, communications, and enterprise leadership.',
    specialties: ['Corporate operations', 'Program management', 'C4I support'],
  },
  {
    id: 'edwards-afb',
    name: 'Edwards AFB',
    region: 'California',
    summary:
      'Flight-test instrumentation, range systems administration, AWS cloud operations, and infrastructure engineering.',
    specialties: ['Flight test', 'Cloud ops', 'Infrastructure engineering'],
  },
  {
    id: 'fort-irwin',
    name: 'Fort Irwin',
    region: 'California',
    summary:
      'Operational support aligned to realistic training environments and mission rehearsal needs.',
    specialties: ['Training support', 'Operations', 'Mission systems'],
  },
  {
    id: 'hill-afb',
    name: 'Hill AFB',
    region: 'Utah',
    summary:
      'Technical support across sustainment-focused Air Force environments and long-range readiness work.',
    specialties: ['Sustainment', 'Systems support', 'Readiness'],
  },
  {
    id: 'kauai-pmrf',
    name: 'Kauai / PMRF',
    region: 'Hawaii',
    summary:
      'Missile defense and range instrumentation support connected to Pacific test events and telemetry-intensive missions.',
    specialties: ['PMRF support', 'Telemetry', 'Mission instrumentation'],
  },
  {
    id: 'nellis-afb',
    name: 'Nellis AFB',
    region: 'Nevada',
    summary:
      'Tactical range support, operational test environments, server administration, and training-system readiness.',
    specialties: ['Tactical ranges', 'Operational test', 'Systems administration'],
  },
  {
    id: 'phoenix',
    name: 'Phoenix',
    region: 'Arizona',
    summary:
      'Regional engineering and program support presence aligned to Western mission partners.',
    specialties: ['Regional support', 'Engineering', 'Program execution'],
  },
  {
    id: 'raleigh',
    name: 'Raleigh',
    region: 'North Carolina',
    summary:
      'Distributed operations and communications leadership presence supporting East Coast customers and recruiting.',
    specialties: ['Communications', 'Operations', 'Talent reach'],
  },
  {
    id: 'pearl-harbor',
    name: 'Pearl Harbor',
    region: 'Hawaii',
    summary:
      'Program location associated with mobile at-sea sensor system operations, sustainment, and maintenance.',
    specialties: ['Vessel sustainment', 'Maintenance', 'Maritime support'],
  },
];

const values: ReadonlyArray<ValueStatement> = [
  {
    title: 'Integrity',
    description: 'Sound practices, ethical conduct, and technical correctness.',
  },
  {
    title: 'Friendliness',
    description: 'Professional warmth that strengthens trust and teamwork.',
  },
  {
    title: 'Mutual respect',
    description: 'A workplace culture grounded in dignity, accountability, and listening.',
  },
  {
    title: 'Good citizenship',
    description: 'Commitment to communities, customers, and responsible stewardship.',
  },
  {
    title: 'Loyalty',
    description: 'Steadfast support for mission, teammates, and long-term partnerships.',
  },
  {
    title: 'Hard work',
    description: 'Disciplined effort applied consistently to meaningful outcomes.',
  },
  {
    title: 'Pursuit of excellence',
    description: 'Continuous improvement in execution, learning, and service quality.',
  },
];

const concepts = [
  {
    slug: 'mission-command',
    path: '/concept/mission-command',
    number: '01',
    title: 'Mission Command',
    styleLabel: 'Tactical cyber-tech',
    description:
      'A sharp, telemetry-rich command environment with wireframe panels, crimson status cues, and mission-dashboard discipline.',
    iconKey: 'crosshair',
    heroHeadlineIndex: 0,
  },
  {
    slug: 'human-integrity',
    path: '/concept/human-integrity',
    number: '02',
    title: 'Human Integrity',
    styleLabel: 'Warm editorial leadership',
    description:
      'An elegant, people-first interpretation built around veteran stories, generous whitespace, and leadership credibility.',
    iconKey: 'users',
    heroHeadlineIndex: 2,
  },
  {
    slug: 'precision-grid',
    path: '/concept/precision-grid',
    number: '03',
    title: 'Precision Grid',
    styleLabel: 'Swiss modernist systems',
    description:
      'A rigorous multi-column information system with red indexing, dense architecture, and disciplined motion.',
    iconKey: 'grid',
    heroHeadlineIndex: 1,
  },
  {
    slug: 'modern-defense',
    path: '/concept/modern-defense',
    number: '04',
    title: 'Modern Defense',
    styleLabel: 'Glassmorphic stealth',
    description:
      'A cinematic dark experience with glass panels, atmospheric depth, and controlled ambient glow.',
    iconKey: 'shield',
    heroHeadlineIndex: 0,
  },
  {
    slug: 'editorial-legacy',
    path: '/concept/editorial-legacy',
    number: '05',
    title: 'Editorial Legacy',
    styleLabel: 'Archival neo-brutalist',
    description:
      'A page-driven narrative with bold rules, pull quotes, archival framing, and commanding typographic structure.',
    iconKey: 'book',
    heroHeadlineIndex: 2,
  },
] satisfies ReadonlyArray<ConceptSummary>;

export const integritsContent: CompanyContent = {
  brand: {
    name: 'Integrits Corporation',
    publicName: 'IntegrITS',
    tagline: 'Turning Technology into Solutions',
    promise:
      'Comprehensive business, engineering, and technology solutions delivered with integrity, operational experience, and consistent quality.',
    intro:
      'Founded in 2000, IntegrITS brings experienced people, technical precision, and uncompromising integrity to the systems and missions customers depend on across defense and commercial environments.',
    founded: '2000',
    headquarters: 'San Diego, California',
    ownership: 'Veteran-owned small business',
  },
  heroHeadlines: [
    {
      title: 'Mission-Ready Engineering. Proven Integrity.',
      body: 'IntegrITS delivers range engineering, program management, enterprise IT, and cybersecurity solutions for complex defense and commercial missions.',
    },
    {
      title: 'Engineering the Systems Behind the Mission',
      body: 'From radar, telemetry, and flight-test instrumentation to acquisition support, cloud infrastructure, and cybersecurity, IntegrITS helps customers operate, modernize, and protect mission-critical environments.',
    },
    {
      title: 'Experience That Understands the Mission',
      body: 'A veteran-powered team delivering the technical expertise, disciplined execution, and integrity required for the systems that matter most.',
    },
  ],
  statistics: [
    { label: 'Founded', value: '2000', detail: 'More than two decades of delivery.' },
    {
      label: 'Veteran Workforce',
      value: '70%+',
      detail: 'Military experience embedded across teams.',
    },
    {
      label: 'Combined Experience',
      value: '400+',
      detail: 'Years of engineering and technical leadership.',
    },
    {
      label: 'Capability Areas',
      value: '3',
      detail: 'Engineering, programs, and IT/cyber integrated.',
    },
  ],
  capabilities,
  lifecycle,
  leadership,
  locations,
  contracts: {
    vehicles: [
      {
        name: 'SeaPort-NxG',
        detail:
          'Prime support provider positioned to serve Navy Systems Commands, PEOs, directorates, and field activities in all seven geographic zones.',
        code: 'All 7 geographic zones',
        capabilities: [
          'Systems engineering',
          'Test and evaluation',
          'Information assurance',
          'Program management support',
        ],
      },
      {
        name: 'OASIS+ Small Business',
        detail:
          'Current GSA record identifies IntegrITS as an OASIS+ Small Business contract holder with broad access for professional and technical services.',
        code: '47QRCA25DS352',
        capabilities: [
          'Small business access',
          'Professional services',
          'Technical delivery',
          'Teaming opportunities',
        ],
      },
    ],
    identifiers: [
      { label: 'UEI', value: 'QVMYLK59N3G2' },
      { label: 'CAGE', value: '1LVF2' },
      { label: 'NAICS', value: '541330' },
      { label: 'NAICS', value: '336611' },
    ],
  },
  careers: {
    headline: 'Build a Career Around Work That Matters',
    intro:
      'IntegrITS is built around experienced people who take pride in serving customers, solving difficult problems, and supporting missions with real operational impact.',
    veteranMessage:
      'Veterans bring valuable experience, discipline, perspective, and commitment to IntegrITS teams. The company is proud to create a workplace where military service can continue to make an impact.',
    balanceMessage:
      'IntegrITS emphasizes healthy work-life balance so people can perform at a high level while remaining grounded in family, community, and well-being.',
    benefits: [
      {
        title: '401(k) with company match',
        description: 'Long-term financial support paired with competitive compensation.',
      },
      {
        title: 'Educational assistance',
        description: 'Structured support for continuous learning and technical growth.',
      },
      {
        title: 'Employee assistance resources',
        description: 'Programs that reinforce wellness, resilience, and everyday support.',
      },
      {
        title: 'Veteran-forward culture',
        description: 'A workforce that respects operational experience and mission discipline.',
      },
    ],
    careerFamilies: [
      'Range engineering',
      'Systems engineering',
      'Flight-test instrumentation',
      'Infrastructure engineering',
      'Systems administration',
      'AWS cloud operations',
      'Software development and programming',
      'C4I installation and integration',
      'Program management',
      'Acquisition support',
      'Executive and administrative support',
      'Vessel operations and maintenance',
      'Welding and mechanical maintenance',
      'Cybersecurity and RMF compliance',
    ],
  },
  values,
  contact: {
    addressLines: ['5205 Kearny Villa Way, Suite 200', 'San Diego, CA 92123'],
    mainPhone: '+1 858-300-1600',
    fax: '+1 858-300-1640',
    website: 'https://integrits.com',
    pointOfContact: {
      name: 'Stephen C. Fox',
      title: 'President & Chief Operating Officer',
      phone: '+1 858-300-1611',
      email: 'fox_stephen@integrits.com',
    },
    contactPaths: [
      { label: 'General inquiries', value: 'Mission support and company questions' },
      { label: 'Government contracting', value: 'Prime, subcontract, and teaming outreach' },
      { label: 'SeaPort-NxG', value: 'Navy ordering pathway discussions' },
      { label: 'OASIS+', value: 'Professional-services contracting access' },
      { label: 'Careers', value: 'Talent, recruiting, and workforce conversations' },
      { label: 'Media and communications', value: 'Brand, communications, and speaking requests' },
    ],
  },
  concepts,
};

export const conceptBySlug: Record<ConceptSlug, ConceptSummary> = {
  'mission-command': concepts[0]!,
  'human-integrity': concepts[1]!,
  'precision-grid': concepts[2]!,
  'modern-defense': concepts[3]!,
  'editorial-legacy': concepts[4]!,
};

export function getConceptNeighbors(slug: ConceptSlug) {
  const currentIndex = concepts.findIndex((concept) => concept.slug === slug);
  const previous = currentIndex > 0 ? concepts[currentIndex - 1] : undefined;
  const next = currentIndex < concepts.length - 1 ? concepts[currentIndex + 1] : undefined;

  return { previous, next };
}

export function getAssetUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path}`;
}

export function getHeroHeadline(slug: ConceptSlug) {
  const concept = conceptBySlug[slug];
  return integritsContent.heroHeadlines[concept.heroHeadlineIndex]!;
}

export function getFeaturedValues(limit: number): ReadonlyArray<ValueStatement> {
  return values.slice(0, limit);
}

export function getLeadershipHighlights(limit: number): ReadonlyArray<LeaderProfile> {
  return leadership.slice(0, limit);
}

export function getLocationsSlice(limit: number): ReadonlyArray<LocationProfile> {
  return locations.slice(0, limit);
}

export function getLifecycleSlice(limit: number): ReadonlyArray<LifecycleStep> {
  return lifecycle.slice(0, limit);
}
