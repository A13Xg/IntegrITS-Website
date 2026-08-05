import { ArrowUpRight, Binary, Mail, Phone } from 'lucide-react';
import { ConceptNavigation, scrollToSection } from '../../components/shared/ConceptNavigation';
import { DemoToolbar } from '../../components/shared/DemoToolbar';
import { MediaFrame } from '../../components/shared/MediaFrame';
import { useDocumentTitle } from '../../components/shared/useDocumentTitle';
import {
  getAssetUrl,
  getHeroHeadline,
  integritsContent,
  sectionLinks,
} from '../../content/integritsContent';
import './precision-grid.css';

export default function PrecisionGridPage() {
  useDocumentTitle('Precision Grid · IntegrITS Design Exploration');

  const hero = getHeroHeadline('precision-grid');
  const {
    brand,
    statistics,
    capabilities,
    lifecycle,
    leadership,
    locations,
    contracts,
    careers,
    contact,
  } = integritsContent;

  return (
    <div className="concept-shell theme-precision-grid">
      <DemoToolbar slug="precision-grid" number="03" />
      <ConceptNavigation conceptNumber="03" conceptTitle="Precision Grid" sections={sectionLinks} />
      <main className="concept-content precision-grid__content" id="main-content" tabIndex={-1}>
        <section
          className="precision-hero precision-section"
          id="hero"
          aria-labelledby="precision-hero-title"
        >
          <span className="precision-section__index">01</span>
          <div className="precision-hero__copy">
            <p className="section-label">Systems-led brand direction</p>
            <h1 id="precision-hero-title">{hero.title}</h1>
            <p>{hero.body}</p>
            <p className="precision-hero__intro">{brand.promise}</p>
            <div className="precision-hero__actions">
              <button
                type="button"
                className="precision-button"
                onClick={() => scrollToSection('lifecycle')}
              >
                View lifecycle system
              </button>
              <span>{brand.headquarters}</span>
            </div>
          </div>
          <div className="precision-hero__panel concept-card">
            <MediaFrame
              src={getAssetUrl('placeholders/hero-precision-grid.svg')}
              alt="Swiss-style structured hero placeholder for the Precision Grid concept"
            />
            <div className="precision-hero__meta">
              <span>Brand</span>
              <strong>{brand.publicName}</strong>
              <span>Tagline</span>
              <strong>{brand.tagline}</strong>
            </div>
          </div>
        </section>

        <section className="precision-section" id="stats" aria-labelledby="precision-stats-title">
          <span className="precision-section__index">02</span>
          <div className="precision-section__body">
            <p className="section-label">Metrics</p>
            <h2 id="precision-stats-title">Recognition bar translated into a modular index</h2>
            <div className="metric-grid precision-stats-grid">
              {statistics.map((stat, index) => (
                <article
                  className="concept-card precision-stat-card"
                  key={`${stat.label}-${index}`}
                >
                  <span className="precision-stat-card__id">0{index + 1}</span>
                  <strong>{stat.value}</strong>
                  <h3>{stat.label}</h3>
                  <p>{stat.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="precision-section"
          id="capabilities"
          aria-labelledby="precision-capabilities-title"
        >
          <span className="precision-section__index">03</span>
          <div className="precision-section__body">
            <p className="section-label">Capabilities</p>
            <h2 id="precision-capabilities-title">
              Disciplined information architecture for three connected practices
            </h2>
            <div className="capability-grid precision-capability-grid">
              {capabilities.map((capability, index) => (
                <article className="concept-card precision-capability-card" key={capability.id}>
                  <div className="precision-capability-card__topline">
                    <span>{`0${index + 1}`}</span>
                    <Binary size={18} />
                  </div>
                  <h3>{capability.title}</h3>
                  <p>{capability.summary}</p>
                  <MediaFrame
                    src={getAssetUrl(capability.assetPath)}
                    alt={`Illustration for ${capability.title}`}
                  />
                  <ul>
                    {capability.services.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="precision-section"
          id="lifecycle"
          aria-labelledby="precision-lifecycle-title"
        >
          <span className="precision-section__index">04</span>
          <div className="precision-section__body">
            <p className="section-label">Lifecycle</p>
            <h2 id="precision-lifecycle-title">A modular system across seven deliberate steps</h2>
            <ol className="precision-lifecycle-grid">
              {lifecycle.map((step, index) => (
                <li key={step.id} className="concept-card precision-lifecycle-card">
                  <span>{`0${index + 1}`}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.summary}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="precision-section"
          id="leadership"
          aria-labelledby="precision-leadership-title"
        >
          <span className="precision-section__index">05</span>
          <div className="precision-section__body">
            <p className="section-label">Leadership</p>
            <h2 id="precision-leadership-title">
              A leadership roster expressed like a trusted operating manual
            </h2>
            <div className="leadership-grid precision-leadership-grid">
              {leadership.map((leader, index) => (
                <article key={leader.id} className="concept-card precision-leader-card">
                  <div className="precision-leader-card__meta">
                    <span>{`L-${String(index + 1).padStart(2, '0')}`}</span>
                    <p>{leader.theme}</p>
                  </div>
                  <MediaFrame
                    src={getAssetUrl(leader.portraitPath)}
                    alt={`Portrait placeholder for ${leader.name}`}
                  />
                  <h3>{leader.name}</h3>
                  <p className="precision-leader-card__title">{leader.title}</p>
                  <p>{leader.intro}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="precision-section"
          id="locations"
          aria-labelledby="precision-locations-title"
        >
          <span className="precision-section__index">06</span>
          <div className="precision-section__body">
            <p className="section-label">Locations</p>
            <h2 id="precision-locations-title">
              Mission environments arranged as a geographic data table
            </h2>
            <div className="precision-location-layout">
              <MediaFrame
                src={getAssetUrl('placeholders/location-map.svg')}
                alt="Structured operations map for IntegrITS locations"
              />
              <div className="location-grid precision-location-grid">
                {locations.map((location) => (
                  <article key={location.id} className="concept-card precision-location-card">
                    <div>
                      <h3>{location.name}</h3>
                      <p>{location.region}</p>
                    </div>
                    <p>{location.summary}</p>
                    <ul>
                      {location.specialties.map((specialty) => (
                        <li key={specialty}>{specialty}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="precision-section"
          id="contracts"
          aria-labelledby="precision-contracts-title"
        >
          <span className="precision-section__index">07</span>
          <div className="precision-section__body">
            <p className="section-label">Contracts</p>
            <h2 id="precision-contracts-title">
              Contract vehicles and identifiers in a structured matrix
            </h2>
            <div className="contract-grid precision-contract-grid">
              {contracts.vehicles.map((vehicle) => (
                <article className="concept-card precision-contract-card" key={vehicle.name}>
                  <h3>{vehicle.name}</h3>
                  <p className="precision-contract-card__code">{vehicle.code}</p>
                  <p>{vehicle.detail}</p>
                  <ul>
                    {vehicle.capabilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
              <article className="concept-card precision-identifier-card">
                <h3>Identifiers</h3>
                <dl>
                  {contracts.identifiers.map((identifier, index) => (
                    <div key={`${identifier.label}-${index}`}>
                      <dt>{identifier.label}</dt>
                      <dd>{identifier.value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </div>
          </div>
        </section>

        <section
          className="precision-section"
          id="careers"
          aria-labelledby="precision-careers-title"
        >
          <span className="precision-section__index">08</span>
          <div className="precision-section__body">
            <p className="section-label">Careers</p>
            <h2 id="precision-careers-title">
              A dense but legible picture of workforce opportunity
            </h2>
            <div className="career-grid precision-career-grid">
              <article className="concept-card precision-career-intro">
                <h3>{careers.headline}</h3>
                <p>{careers.intro}</p>
                <p>{careers.veteranMessage}</p>
                <p>{careers.balanceMessage}</p>
              </article>
              <article className="concept-card precision-career-families">
                <h3>Career families</h3>
                <div className="precision-tag-grid">
                  {careers.careerFamilies.map((family) => (
                    <span key={family}>{family}</span>
                  ))}
                </div>
              </article>
              <article className="concept-card precision-benefits-card">
                <h3>Benefits</h3>
                {careers.benefits.map((benefit) => (
                  <div key={benefit.title} className="precision-benefits-card__item">
                    <strong>{benefit.title}</strong>
                    <p>{benefit.description}</p>
                  </div>
                ))}
              </article>
            </div>
          </div>
        </section>

        <section
          className="precision-section"
          id="contact"
          aria-labelledby="precision-contact-title"
        >
          <span className="precision-section__index">09</span>
          <div className="precision-section__body">
            <div className="concept-card precision-contact-card">
              <p className="section-label">Contact</p>
              <h2 id="precision-contact-title">
                Coordinate engineering, programs, and secure operations from one partner
              </h2>
              <div className="precision-contact-card__grid">
                <div>
                  <h3>Address</h3>
                  {contact.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <div>
                  <h3>Contact paths</h3>
                  <ul>
                    {contact.contactPaths.map((path) => (
                      <li key={path.label}>{path.label}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Prime point of contact</h3>
                  <p>{contact.pointOfContact.name}</p>
                  <p>{contact.pointOfContact.title}</p>
                </div>
              </div>
              <div className="precision-contact-card__actions">
                <a
                  className="precision-button"
                  href={`tel:${contact.mainPhone.replace(/[^\d+]/g, '')}`}
                >
                  <Phone size={16} />
                  <span>{contact.mainPhone}</span>
                </a>
                <a className="precision-button" href={`mailto:${contact.pointOfContact.email}`}>
                  <Mail size={16} />
                  <span>{contact.pointOfContact.email}</span>
                </a>
                <a
                  className="precision-button"
                  href={contact.website}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>integrits.com</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
