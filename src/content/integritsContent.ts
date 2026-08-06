/**
 * Parsed, structured IntegrITS company content.
 *
 * This is the single source of truth consumed by all five design concepts
 * via `useContent()`. Every fact below is transcribed from
 * `/refData/IntegrITS_WebsitePlan-content.md`. Nothing here is invented:
 * where the source hedges a fact ("infer", "may", "should verify"), that
 * hedge is preserved as a caveat field or an AccuracyNote rather than
 * stated as settled fact.
 *
 * Do not hand-edit facts without updating the source markdown reference —
 * this file must stay traceable back to section numbers in that document.
 */
import type { CompanyContent } from './contentTypes';

export const integritsContent: CompanyContent = {
  // Source: section 1, "Brand Foundation"
  brand: {
    legalName: 'Integrits Corporation',
    displayName: 'IntegrITS',
    tagline: 'Turning Technology into Solutions',
    brandPromise:
      'Comprehensive business, engineering, and technology solutions delivered with integrity, operational experience, and consistent quality.',
    oneSentenceDescription:
      'IntegrITS is a veteran-owned small business that supports complex defense and commercial missions through range engineering, systems and technical services, program management, enterprise IT, and cybersecurity.',
    shortIntroduction:
      'Founded in 2000, IntegrITS brings experienced people, technical precision, and uncompromising integrity to the systems and missions our customers depend on. From military test ranges and flight-test instrumentation to program execution, enterprise infrastructure, and cybersecurity, our teams deliver practical solutions across the full system life cycle.',
    foundedYear: 2000,
    headquartersCity: 'San Diego',
    headquartersState: 'California',
    designation: 'Veteran-Owned Small Business',
  },

  // Source: section 2, "Recommended Homepage Messaging"
  hero: {
    headlineOptions: [
      {
        id: 'A',
        label: 'Best Overall',
        headline: 'Mission-Ready Engineering. Proven Integrity.',
        supportingCopy:
          'IntegrITS delivers range engineering, program management, enterprise IT, and cybersecurity solutions for complex defense and commercial missions.',
        callsToAction: ['Explore Our Capabilities', 'Meet Our Team', 'Partner With IntegrITS'],
      },
      {
        id: 'B',
        label: 'More Technical',
        headline: 'Engineering the Systems Behind the Mission',
        supportingCopy:
          'From radar, telemetry, and flight-test instrumentation to acquisition support, cloud infrastructure, and cybersecurity, IntegrITS helps customers operate, modernize, and protect mission-critical environments.',
      },
      {
        id: 'C',
        label: 'More Human and Inspirational',
        headline: 'Experience That Understands the Mission',
        supportingCopy:
          'A veteran-powered team delivering the technical expertise, disciplined execution, and integrity required for the systems that matter most.',
      },
    ],
    recognitionBarStatIds: [
      'founded',
      'veteran-workforce',
      'combined-experience',
      'core-capabilities',
    ],
    alternateRecognitionLine:
      '25+ Years Serving Complex Missions · 70%+ Veteran Workforce · 400+ Years of Combined Technical Experience',
    alternateRecognitionCaveat:
      'Use the "25+ years" phrasing only when the site is maintained dynamically; the fixed founding year is safer for long-term use.',
    overview:
      'IntegrITS provides high-quality, cost-effective professional services across the full system life cycle. Our specialists work where engineering, operations, program execution, information technology, and cybersecurity intersect—helping government and commercial customers move from requirements and planning through integration, testing, operation, sustainment, and modernization. Our strongest public identity is rooted in defense test and evaluation. IntegrITS personnel support military ranges, flight-test organizations, mission-control environments, instrumentation systems, enterprise networks, and acquisition programs across the United States.',
    marketStatement:
      'IntegrITS serves government and commercial organizations whose operations require disciplined engineering, secure technology, reliable program execution, and experienced personnel. Our deepest public experience is in Department of Defense test, training, acquisition, and mission-support environments.',
  },

  // Source: "Homepage Recognition Bar" table, section 2
  statistics: [
    { id: 'founded', label: 'Founded', value: '2000' },
    { id: 'veteran-workforce', label: 'Veteran Workforce', value: '70%+ Veterans' },
    { id: 'combined-experience', label: 'Experience', value: '400+ Combined Years' },
    {
      id: 'core-capabilities',
      label: 'Core Capabilities',
      value: 'Engineering · Programs · IT/Cyber',
    },
  ],

  // Source: section 4, "Core Capabilities"
  capabilities: [
    {
      id: 'range-engineering',
      name: 'Range Engineering & Technical Services',
      quickDescription:
        'We operate, maintain, modernize, and support the instrumentation, infrastructure, and mission systems behind military test and training environments.',
      summary:
        "Range Engineering and Technical Services is IntegrITS' most specialized and differentiated capability. The company supports research, developmental, and operational test environments across land, air, and sea. Its work spans hands-on equipment support, systems engineering, flight-test instrumentation, mission preparation, test execution, data collection, analysis, safety, and sustainment.",
      serviceGroups: [
        {
          title: 'Core Systems and Environments',
          items: [
            'Radar systems',
            'Telemetry systems and processing',
            'Optical tracking systems',
            'Aircraft Time Space Position Information systems',
            'Air Combat Maneuvering Instrumentation systems and pods',
            'Communications and information services',
            'Mission-control systems',
            'Range and mission-safety systems',
            'Flight-test instrumentation',
            'Range IT infrastructure',
            'Mobile and ocean-based sensor platforms',
          ],
        },
        {
          title: 'Engineering and Test Services',
          items: [
            'System design',
            'Design reviews',
            'System condition assessments',
            'Requirements analysis',
            'Requirements verification',
            'Independent Verification and Validation',
            'Test planning',
            'Test methodology development',
            'Test Readiness Reviews',
            'System integration support',
            'Test conduct',
            'Data collection',
            'Post-test data analysis',
            'Airspace-utilization analysis',
            'Facilities and instrumentation planning',
            'Infrastructure planning',
            'Operations and maintenance',
            'In-shop ACMI pod maintenance and repair',
          ],
        },
        {
          title: 'Mission Areas',
          items: [
            'Research, Development, Test, and Evaluation',
            'Developmental Test',
            'Operational Test',
            'Flight-test support',
            'Air combat training support',
            'Ballistic Missile Defense tracking and mission support',
            'Range modernization',
            'Mission-control operations',
            'Range safety',
            'Test and training environment support',
          ],
        },
      ],
      shortCard:
        'Radar, telemetry, optics, TSPI/ACMI, mission control, flight-test instrumentation, range safety, test planning, data analysis, operations, maintenance, and modernization.',
      proofStatement:
        'IntegrITS supports the complete test mission—from system requirements and instrumentation planning through integration, readiness review, mission execution, data collection, analysis, and sustainment.',
    },
    {
      id: 'program-management',
      name: 'Program Management',
      quickDescription:
        'We connect strategy, acquisition, resources, compliance, and day-to-day execution so complex programs can move forward with control and clarity.',
      summary:
        'IntegrITS provides program support from individual task and project management through high-level support for Program Management Offices, Program Executive Offices, military commands, and commercial organizations. Its program-management capability complements its technical services, allowing customers to obtain engineering knowledge and administrative execution from a single provider.',
      serviceGroups: [
        {
          title: 'Program and Acquisition Services',
          items: [
            'Program Management Office support',
            'Program-office acquisition support',
            'Program strategy',
            'Managed systems engineering',
            'Task, project, and contract management',
            'Acquisition life-cycle support',
            'Requirements management',
            'Plans and policy development',
            'Statutory, regulatory, and policy compliance',
            'DoD and SECNAV 5000-aligned support',
          ],
        },
        {
          title: 'Financial, Resource, and Performance Services',
          items: [
            'Resource planning and management',
            'Budget execution analysis',
            'Cost-control management',
            'Schedule tracking',
            'Risk identification and mitigation',
            'Performance metrics',
            'Program monitoring',
            'Execution-report analysis',
          ],
        },
        {
          title: 'Logistics, Quality, and Sustainment',
          items: [
            'Integrated Logistics Support',
            'Life-cycle sustainment',
            'Supply-chain management',
            'Engineering and logistics policy',
            'Quality Assurance',
            'Quality Control',
            'Process improvement',
            'Business-continuity planning',
          ],
        },
        {
          title: 'Training and Workforce Support',
          items: [
            'Curriculum development',
            'Computer-based training development',
            'Operational training materials',
            'Administrative staffing',
            'Program-office oversight',
          ],
        },
      ],
      shortCard:
        'Acquisition support, PMO staffing, budgets, schedules, risk, logistics, quality, compliance, training, and life-cycle sustainment.',
      proofStatement:
        'IntegrITS helps customers manage the technical, financial, regulatory, logistical, and organizational demands surrounding complex government programs.',
    },
    {
      id: 'it-cybersecurity',
      name: 'Information Technology & Cybersecurity',
      quickDescription:
        'We design, operate, secure, and sustain enterprise technology environments that support mission and business operations.',
      summary:
        'IntegrITS supports enterprise-level IT architectures for defense and commercial clients. Its service range covers infrastructure engineering, network operations, cloud environments, end-user services, application integration, cybersecurity authorization, vulnerability management, and disaster recovery.',
      serviceGroups: [
        {
          title: 'Enterprise Technology Areas',
          items: [
            'Network and infrastructure engineering',
            'Enterprise architecture',
            'Network operations',
            'Computer operations and support',
            'End-user support',
            'Facilities management',
            'Hardware maintenance',
            'Software maintenance',
            'Network management',
            'Cloud computing',
            'AWS cloud operations',
            'Virtual-server administration',
            'Command, Control, Communications, Computers, and Intelligence',
            'Command and Control',
            'Common Operational Picture systems',
            'Tactical data-link integration',
            'Enterprise Resource Planning',
            'Customer Relationship Management',
            'Network Operations Center support',
            'Help-desk systems and operations',
          ],
        },
        {
          title: 'Cybersecurity Services',
          items: [
            'Risk Management Framework support',
            'Assessment and Authorization',
            'Cybersecurity vulnerability assessments',
            'Vulnerability scanning',
            'Risk analysis and mitigation',
            'Public Key Infrastructure integration',
            'Computer defense',
            'Security policy development',
            'Disaster-recovery planning',
            'Defense-in-depth operational support',
          ],
        },
        {
          title: 'Managed and End-User Services',
          items: [
            'Managed services',
            'Seat management',
            'User-account management',
            'Server and workstation administration',
            'Help-desk application development and integration',
            'Remedy IT Service Management support',
            'Product identification, acquisition, and management',
            'LAN/WAN installation and maintenance',
            'Network operations plans',
            'Facilities hardware support',
          ],
        },
      ],
      shortCard:
        'Enterprise infrastructure, cloud operations, network engineering, RMF authorization, vulnerability management, C4I integration, managed services, and end-user support.',
      proofStatement:
        'IntegrITS spans both sides of enterprise technology: building and operating the environment while helping customers authorize, secure, recover, and sustain it.',
    },
  ],

  // Source: section 8, "Experience and Differentiators" ("Strongest Public Differentiators")
  differentiators: [
    {
      id: 'veteran-powered-workforce',
      title: 'Veteran-Powered Workforce',
      description:
        'More than 70% of IntegrITS employees have served in the U.S. military. This creates a workforce with strong familiarity with military culture, operational discipline, terminology, command structures, and mission environments.',
      caveat:
        'Avoid claiming that all veteran employees have active clearances. The source documents infer clearance readiness, but the public website does not state that all or most employees hold current clearances.',
    },
    {
      id: 'deep-range-specialization',
      title: 'Deep Range Specialization',
      description:
        'The combination of radar, telemetry, optics, aircraft TSPI/ACMI, mission control, range safety, and flight-test instrumentation is considerably more specific than generic engineering or IT consulting.',
    },
    {
      id: 'full-life-cycle-support',
      title: 'Full-Life-Cycle Support',
      description:
        'IntegrITS can support requirements, design, acquisition, integration, test preparation, mission execution, data analysis, program control, operations, maintenance, logistics, cybersecurity, sustainment, and modernization.',
    },
    {
      id: 'technical-administrative-integration',
      title: 'Technical and Administrative Integration',
      description:
        'The company combines field engineering with acquisition, budgets, logistics, training, quality, compliance, cybersecurity, and executive program support.',
    },
    {
      id: 'established-defense-presence',
      title: 'Established Defense Presence',
      description:
        'IntegrITS has operated since 2000 and maintains teams aligned with major Navy and Air Force test, range, and acquisition environments.',
    },
    {
      id: 'prime-subcontract-execution',
      title: 'Prime and Subcontract Execution',
      description:
        'The company performs as both a prime contractor and subcontractor, giving customers and teammates multiple ways to engage its capabilities.',
    },
  ],

  // Source: section 5, "Integrated Mission Support" ("Requirements to Operations")
  lifecycle: [
    {
      id: 'define',
      order: 1,
      name: 'Define',
      description: 'Requirements, architecture, acquisition, planning',
    },
    {
      id: 'engineer',
      order: 2,
      name: 'Engineer',
      description: 'Systems design, infrastructure, integration',
    },
    {
      id: 'prepare',
      order: 3,
      name: 'Prepare',
      description: 'Test plans, readiness reviews, policy, training',
    },
    {
      id: 'execute',
      order: 4,
      name: 'Execute',
      description: 'Mission support, test conduct, program operations',
    },
    {
      id: 'protect',
      order: 5,
      name: 'Protect',
      description: 'Cybersecurity, safety, risk, quality',
    },
    {
      id: 'analyze',
      order: 6,
      name: 'Analyze',
      description: 'Data collection, performance metrics, reporting',
    },
    {
      id: 'sustain',
      order: 7,
      name: 'Sustain',
      description: 'Maintenance, logistics, modernization, continuity',
    },
  ],

  // Source: section 11, "Leadership and Employees"
  leadership: [
    {
      id: 'clarence-carter',
      name: 'Clarence Carter',
      title: 'Chairman & Chief Executive Officer',
      introduction:
        'Founder and strategic leader with more than 38 years of Department of Defense operational, engineering, management, and professional-services experience.',
      background: [
        'Founded IntegrITS in January 2000',
        'Former Litton/PRC executive manager',
        'Served on the Board of Directors at Litton/PRC',
        'Managed major defense joint ventures',
        'Experience spanning engineering through executive leadership',
        'Bachelor of Arts from Ottawa University',
        'Completed executive business programs at the University of Virginia Darden School of Business and MIT Sloan School of Management',
      ],
      humanElement:
        'Supports faith and community organizations and maintains a personal interest in writing, music, and the arts.',
      theme: 'Strategic Integrity',
    },
    {
      id: 'steve-fox',
      name: 'Steve Fox',
      title: 'President & Chief Operating Officer',
      introduction:
        'Defense-industry executive and engineer with more than 42 years of experience leading programs, contracts, technical teams, and day-to-day corporate operations.',
      background: [
        'Joined IntegrITS in 2001',
        'Oversees corporate operations, policies, goals, and operating objectives',
        'Former Northrop Grumman technical and management leader',
        'Experience in combat-system integration testing',
        "Supported deployment of the Navy's Cooperative Engagement Capability",
        'Led or supported range instrumentation upgrades',
        'Supported Missile Defense Agency test events at the Pacific Missile Range Facility',
        'Experience supporting NAVSEA, NAVWAR, PMRF, Edwards AFB, China Lake, and NIWC Pacific',
        'Bachelor of Science in General Engineering from the U.S. Naval Academy',
      ],
      affiliations: [
        'U.S. Naval Institute',
        'National Defense Industrial Association',
        'Armed Forces Communications and Electronics Association',
        'Association of the United States Navy',
        'U.S. Naval Academy Alumni Association',
      ],
      humanElement:
        'Has mentored students and contributed volunteer IT support to a neighborhood school.',
      theme: 'Operational Integrity',
    },
    {
      id: 'ivy-carter',
      name: 'Ivy Carter',
      title: 'Chief Financial Officer',
      introduction:
        'Finance leader with more than 45 years of accounting and financial experience, including 25 years as a Chief Financial Officer in Department of Defense professional-services contracting.',
      background: [
        'Joined IntegrITS at its founding in 2000',
        'Established corporate accounting policies, procedures, and financial systems',
        'Oversees finance, taxes, financial planning, cash management, and internal controls',
        'Experience in management accounting, auditing, taxation, and nonprofit accounting',
        'Bachelor of Science in Commerce and Business Administration from the University of Alabama',
        'Member of the American Accounting Association',
        'Member of the National Contract Management Association',
      ],
      humanElement:
        'Supports community and international service initiatives and has participated in service work in Romania and Haiti.',
      theme: 'Financial Integrity',
    },
    {
      id: 'michael-sosamon',
      name: 'Michael Sosamon',
      title: 'Vice President & Chief Administration Officer',
      introduction:
        'Defense professional with more than 33 years of industry experience and a background spanning Navy operations, systems engineering, program management, administration, security, and safety.',
      background: [
        'Has supported IntegrITS since its inception',
        'Helps establish corporate administration, security, safety, goals, and policies',
        'Has overseen major elements of the corporate safety program',
        'Former Litton/PRC program manager and senior systems engineer',
        'Supported Navy warfare-system test and evaluation',
        'Completed a 20-year U.S. Navy career as an Operations Specialist',
        'Bachelor of Science in Business Administration and Computers from National University',
        'Member of NCMS, The Society of Industrial Security Professionals',
      ],
      humanElement:
        'Long-time supporter of Saint Augustine High School football and local charitable efforts.',
      theme: 'Administrative Integrity',
    },
    {
      id: 'vanessa-valdez',
      name: 'Vanessa Valdez',
      title: 'Chief Human Resources Officer',
      introduction:
        'Executive leader responsible for the people, workforce, and human-resources functions that support IntegrITS employees and organizational growth.',
      background: [],
      theme: 'People-Centered Integrity',
      sourceLimitation:
        'The reviewed documents and currently indexed website material identify Vanessa Valdez and her title but do not provide a detailed public biography. Do not invent experience, education, tenure, or responsibilities beyond the normal implications of the role. A new employee-approved biography would strengthen the leadership page.',
    },
    {
      id: 'jim-lyon',
      name: 'Jim Lyon',
      title: 'Corporate Operations & Compliance Officer',
      secondaryTitle: 'Facility Security Officer',
      introduction:
        'Defense Industrial Base operations, compliance, security, and infrastructure leader with more than 36 years of experience.',
      background: [
        'Manages corporate security and industrial compliance functions',
        'Supports facility-security and personnel-clearance administration',
        'Oversees or supports corporate network infrastructure',
        'Served six years as a U.S. Navy Cryptologic Technician',
        'Served approximately ten years as a Facility Security Officer for Northrop Grumman',
        'Experience with Navy Marine Corps Intranet field deployments',
      ],
      theme: 'Security and Compliance Integrity',
    },
    {
      id: 'sarah-carter',
      name: 'Sarah Carter',
      title: 'Chief Communications Officer',
      introduction:
        'Communications leader with more than 15 years of experience across defense professional services, higher education, and international nonprofit organizations.',
      background: [
        'Leads strategic communications',
        'Oversees brand messaging',
        'Supports sales and marketing campaign alignment',
        'Began at IntegrITS as a summer intern',
        'Previously supported the company as a Senior Communication Analyst',
        'Ten years of experience specific to DoD professional services in IT and communications',
        'Bachelor of Arts in International Studies from Pepperdine University',
        'Master of Arts in Social Entrepreneurship and Change from Pepperdine University',
      ],
      humanElement:
        'Based in Raleigh, North Carolina, with interests in live music, theater, and the arts.',
      theme: 'Communicating Integrity',
    },
    {
      id: 'ana-basada',
      name: 'Ana Basada',
      title: 'Director of Contracts',
      introduction:
        'Contracts and acquisition professional with approximately 29 years of defense-industry experience.',
      background: [
        'Manages teaming agreements',
        'Manages subcontracts',
        'Manages nondisclosure agreements',
        'Develops and supports cost proposals',
        'Oversees Federal Acquisition Regulation compliance',
        'Former acquisition leader at CSRA/GDIT',
        'Bachelor of Science in Global Business Management from California State University San Marcos',
        'Contract Management Certification from San Diego State University',
        'Member of the National Contract Management Association, San Diego Chapter',
      ],
      theme: 'Contractual Integrity',
    },
  ],

  // Source: section 12, "Workforce and Careers"
  workforce: {
    veteranPercentage: 70,
    veteranPercentageLabel: 'More Than 70% Veteran',
    veteranCopy:
      'Veterans bring valuable experience, discipline, perspective, and commitment to our teams. IntegrITS is proud to provide a workplace where military experience can continue to make an impact across defense engineering, technology, program operations, and corporate leadership.',
    workLifeBalanceCopy:
      'We believe people perform at their best when they have the capacity to invest in their families, communities, interests, and well-being. Our culture is designed to support strong professional performance without losing sight of the people behind the mission.',
    benefits: [
      'Competitive salaries',
      '401(k) with company match',
      'Educational Assistance Program',
      'Employee Assistance Program services',
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
    employeeCountCaveat:
      'A third-party company profile lists 51-200 employees. The company website does not publish an exact size. Do not use the range as a hard website statistic without internal confirmation.',
  },

  // Source: section 7, "Operational Footprint"
  locations: [
    {
      id: 'san-diego',
      name: 'San Diego',
      state: 'California',
      type: 'headquarters',
      description:
        'The headquarters serves as the central corporate and administrative hub and supports customers including NAVWAR, NIWC Pacific, and Navy program offices.',
      capabilities: [
        'Corporate headquarters',
        'NAVWAR and NIWC Pacific support',
        'Program management',
        'C4I and tactical communications support',
        'Contracts and corporate operations',
      ],
    },
    {
      id: 'edwards-afb',
      name: 'Edwards Air Force Base',
      state: 'California',
      type: 'field',
      capabilities: [
        'Flight-test instrumentation',
        'Range systems administration',
        'AWS cloud operations',
        'Virtual-server support',
        'Network and infrastructure engineering',
        'Software and application support',
      ],
    },
    {
      id: 'fort-irwin',
      name: 'Fort Irwin',
      state: 'California',
      type: 'field',
      capabilities: [],
    },
    {
      id: 'kauai-pmrf',
      name: 'Kauai / Pacific Missile Range Facility',
      state: 'Hawaii',
      type: 'field',
      capabilities: [
        'Radar',
        'Telemetry',
        'Optical tracking',
        'Range instrumentation',
        'Ballistic Missile Defense test support',
        'Mission support',
      ],
    },
    {
      id: 'pearl-harbor',
      name: 'Pearl Harbor Naval Shipyard',
      state: 'Hawaii',
      type: 'field',
      description:
        'Pearl Harbor is associated with operation, sustainment, and maintenance of the Mobile At-Sea Sensor System vessel. It is operationally relevant, even though it was not included in the shorter field-location list on the main "What We Do" page.',
      capabilities: [
        'Mobile At-Sea Sensor System vessel operations',
        'In-port and at-sea support',
        'Shipboard maintenance and repair',
        'Sensor-platform sustainment',
      ],
    },
    {
      id: 'nellis-afb',
      name: 'Nellis Air Force Base',
      state: 'Nevada',
      type: 'field',
      description: 'Also associated with the Nevada Test and Training Range.',
      capabilities: [
        'Tactical range support',
        'Operational test environments',
        'Systems administration',
        'Server and infrastructure support',
        'Test and training systems',
      ],
    },
    {
      id: 'hill-afb',
      name: 'Hill Air Force Base',
      state: 'Utah',
      type: 'field',
      capabilities: [],
    },
    {
      id: 'phoenix',
      name: 'Phoenix',
      state: 'Arizona',
      type: 'field',
      capabilities: [],
    },
    {
      id: 'raleigh',
      name: 'Raleigh',
      state: 'North Carolina',
      type: 'field',
      capabilities: [],
    },
  ],

  // Source: sections 9 and 10, "Selected Programs, Vehicles, and Proof Points" / "Contracting Information"
  contracts: {
    supportedTypes: [
      'Cost Plus Fixed Fee',
      'Cost Plus Award Fee',
      'Time and Materials',
      'Firm Fixed Price',
      'Firm Fixed Price Level of Effort',
    ],
    vehicles: [
      {
        id: 'seaport-nxg',
        name: 'SeaPort-NxG',
        description:
          'IntegrITS presents itself as a SeaPort-NxG prime support provider capable of serving Navy Systems Commands, Program Executive Offices, directorates, and field activities in all seven geographic zones.',
        capabilityAreas: [
          'Systems engineering',
          'Test and evaluation',
          'Information assurance',
          'Information technology',
          'Business-process analysis',
          'Requirements engineering',
          'Help-desk development and support',
          'Navy measurement facilities and ranges',
          'Program-management support',
        ],
      },
      {
        id: 'oasis-plus',
        name: 'OASIS+ Small Business',
        description:
          'Federal GSA records identify IntegrITS as an OASIS+ Small Business contract holder.',
        contractNumber: '47QRCA25DS352',
        expirationDate: 'December 18, 2029',
      },
    ],
    identifiers: {
      legalEntity: 'Integrits Corporation',
      uei: 'QVMYLK59N3G2',
      cageCode: '1LVF2',
      primaryNaics: '541330 — Engineering Services',
      additionalNaics: '336611 — Ship Building and Repairing',
    },
  },

  // Source: section 12, "Careers Headline" / "Supporting Copy"
  careers: {
    headline: 'Build a Career Around Work That Matters',
    copy: 'IntegrITS is built around experienced people who take pride in serving customers, solving difficult problems, and supporting missions with real operational impact. The company seeks talented, career-oriented professionals who share its values of integrity, respect, discipline, hard work, and excellence.',
    locationIds: [
      'san-diego',
      'edwards-afb',
      'fort-irwin',
      'kauai-pmrf',
      'pearl-harbor',
      'nellis-afb',
      'hill-afb',
      'phoenix',
      'raleigh',
    ],
  },

  // Source: section 19, "Contact and Partnering Information"
  contact: {
    headquarters: {
      name: 'Integrits Corporation',
      addressLine1: '5205 Kearny Villa Way, Suite 200',
      addressLine2: '',
      city: 'San Diego',
      state: 'CA',
      zip: '92123',
      phone: '+1 858-300-1600',
      fax: '+1 858-300-1640',
      website: 'integrits.com',
    },
    seaportContact: {
      name: 'Stephen C. Fox',
      title: 'President & Chief Operating Officer',
      phone: '+1 858-300-1611',
      email: 'fox_stephen@integrits.com',
    },
    contactPaths: [
      'General inquiries',
      'Government contracting',
      'SeaPort-NxG',
      'OASIS+',
      'Teaming and subcontracting',
      'Capability discussions',
      'Careers',
      'Media and communications',
    ],
  },

  // Source: section 17, "Accuracy, Conflict, and Publication Notes"
  accuracyNotes: [
    {
      id: 'steve-fox-title',
      topic: 'Steve Fox title',
      note: 'Current leadership title is President & Chief Operating Officer. An outdated contracts-page title of "Vice President and COO" also appears in source material; standardize on President & COO across the site.',
    },
    {
      id: 'cage-code',
      topic: 'CAGE code',
      note: 'Correct CAGE code is 1LVF2. Two source reports display an incorrect five-plus-character form, 1LVF22 — do not use it.',
    },
    {
      id: 'headquarters-address',
      topic: 'Headquarters address',
      note: 'The current public website consistently lists 5205 Kearny Villa Way, Suite 200, San Diego, CA 92123. One third-party federal-award data page displays a different "Complex Drive" address. Use the company website / GSA record unless the company confirms a relocation.',
    },
    {
      id: 'naics-codes',
      topic: 'NAICS codes',
      note: 'Source documents list 541330, 336611, and 334111 in different contexts; these are not necessarily contradictory since companies can register under multiple NAICS codes. Use only codes verified in the current SAM profile for a formal "All NAICS Codes" list, and do not label a single code as universally "primary" across every contract vehicle.',
    },
    {
      id: 'business-designations',
      topic: 'Business designations',
      note: 'Veteran-Owned Small Business, Small Business, and Small Disadvantaged Business are strongly supported by current GSA data. "Minority-Owned" and "Black American Owned Minority Business Enterprise" appear in source reports but should be confirmed against the current SAM/SBA profile before being prominently presented.',
    },
    {
      id: 'employee-count',
      topic: 'Employee count',
      note: 'A third-party company profile lists 51-200 employees. The company website does not publish an exact size; do not use the range as a hard website statistic without internal confirmation.',
    },
    {
      id: 'federal-awards',
      topic: 'Federal award history',
      note: 'One third-party research source calculated more than $102.1 million in cumulative federal awards (approximately $90.5 million in prime awards and $11.6 million in subcontracts). This figure is time-sensitive and methodology-dependent; recalculate from USAspending and label with an "as of" date before publication rather than using it as a permanent website metric.',
    },
    {
      id: 'sam-expiration',
      topic: 'SAM registration expiration',
      note: 'Source reports contain differing SAM registration expiration dates. Do not publish a SAM expiration date as marketing content; confirm directly in SAM when needed for contracting diligence.',
    },
    {
      id: 'security-clearances',
      topic: 'Security clearances',
      note: 'Source documents infer that a veteran-heavy workforce may improve clearance readiness, but the public website does not make a precise organization-wide clearance claim. Use approved facility-clearance or personnel-clearance language only after internal security review.',
    },
    {
      id: 'certifications',
      topic: 'Certifications',
      note: 'The reviewed materials do not establish ISO, CMMI, or similar quality certifications for IntegrITS. Do not imply certifications that have not been confirmed.',
    },
  ],
};
