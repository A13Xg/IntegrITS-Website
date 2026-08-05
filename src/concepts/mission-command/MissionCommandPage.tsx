import { ChevronRight, ExternalLink, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
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
import './mission-command.css';

export default function MissionCommandPage() {
  useDocumentTitle('Mission Command · IntegrITS Design Exploration');

  const hero = getHeroHeadline('mission-command');
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
    values,
  } = integritsContent;

  return (
    <div className="concept-shell theme-mission-command">
      <div className="mission-command__noise" aria-hidden="true" />
      <DemoToolbar slug="mission-command" number="01" />
      <ConceptNavigation
        conceptNumber="01"
        conceptTitle="Mission Command"
        sections={sectionLinks}
      />
      <main className="concept-content mission-command__content" id="main-content" tabIndex={-1}>
        <section className="mission-hero" id="hero" aria-labelledby="mission-hero-title">
          <div className="mission-hero__copy concept-card">
            <p className="section-label">Mission-ready systems showcase</p>
            <h1 id="mission-hero-title">{hero.title}</h1>
            <p>{hero.body}</p>
            <p className="mission-hero__intro">{brand.intro}</p>
            <div className="mission-hero__actions">
              <button
                type="button"
                className="mission-button mission-button--primary"
                onClick={() => scrollToSection('capabilities')}
              >
                Explore capabilities
                <ChevronRight size={18} />
              </button>
              <a
                className="mission-button"
                href={contact.website}
                rel="noopener noreferrer"
                target="_blank"
              >
                Visit integrits.com
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="mission-hero__board concept-card">
            <div className="mission-hero__board-topline">
              <span>Status board</span>
              <span>{brand.headquarters}</span>
            </div>
            <MediaFrame
              src={getAssetUrl('placeholders/hero-mission-command.svg')}
              alt="Abstract tactical telemetry composition representing the Mission Command concept"
              className="mission-hero__media"
            />
            <div className="mission-hero__status-grid">
              {statistics.map((stat) => (
                <div key={stat.label} className="mission-hero__status-item">
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                  <p>{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="stats" aria-labelledby="mission-stats-title">
          <div className="mission-section-heading">
            <p className="section-label">Operational snapshot</p>
            <h2 id="mission-stats-title">Recognizable facts, mission-speed delivery</h2>
          </div>
          <div className="metric-grid mission-stats-grid">
            {statistics.map((stat, index) => (
              <article className="concept-card mission-stat-card" key={`${stat.label}-${index}`}>
                <span className="mission-stat-card__label">{stat.label}</span>
                <strong>{stat.value}</strong>
                <p>{stat.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="capabilities" aria-labelledby="mission-capabilities-title">
          <div className="mission-section-heading">
            <p className="section-label">Capability matrix</p>
            <h2 id="mission-capabilities-title">
              Three integrated systems supporting one mission picture
            </h2>
          </div>
          <div className="capability-grid mission-capability-grid">
            {capabilities.map((capability) => (
              <article key={capability.id} className="concept-card mission-capability-card">
                <MediaFrame
                  src={getAssetUrl(capability.assetPath)}
                  alt={`Abstract illustration for ${capability.title}`}
                  caption={capability.summary}
                  eyebrow="Capability"
                />
                <div className="mission-capability-card__content">
                  <h3>{capability.title}</h3>
                  <p>{capability.proof}</p>
                  <ul>
                    {capability.services.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="lifecycle" aria-labelledby="mission-lifecycle-title">
          <div className="mission-section-heading">
            <p className="section-label">Integrated mission support</p>
            <h2 id="mission-lifecycle-title">From requirements definition to sustainment</h2>
          </div>
          <ol className="mission-lifecycle-grid">
            {lifecycle.map((step, index) => (
              <li key={step.id} className="concept-card mission-lifecycle-step">
                <span className="mission-lifecycle-step__index">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.summary}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="leadership" aria-labelledby="mission-leadership-title">
          <div className="mission-section-heading">
            <p className="section-label">Leadership dossiers</p>
            <h2 id="mission-leadership-title">
              Experienced operators, administrators, and communicators
            </h2>
          </div>
          <div className="leadership-grid mission-leadership-grid">
            {leadership.map((leader) => (
              <article key={leader.id} className="concept-card mission-leader-card">
                <MediaFrame
                  src={getAssetUrl(leader.portraitPath)}
                  alt={`Abstract portrait placeholder for ${leader.name}`}
                  eyebrow={leader.theme}
                />
                <div className="mission-leader-card__body">
                  <h3>{leader.name}</h3>
                  <p className="mission-leader-card__title">{leader.title}</p>
                  <p>{leader.intro}</p>
                  <ul>
                    {leader.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="locations" aria-labelledby="mission-locations-title">
          <div className="mission-section-heading">
            <p className="section-label">Operational footprint</p>
            <h2 id="mission-locations-title">
              Coverage across priority defense and test environments
            </h2>
          </div>
          <div className="mission-location-layout">
            <MediaFrame
              src={getAssetUrl('placeholders/location-map.svg')}
              alt="Abstract network map placeholder showing IntegrITS operating locations"
              eyebrow="Locations"
              caption="San Diego HQ plus mission support at Edwards, Fort Irwin, Hill, PMRF, Nellis, Phoenix, Raleigh, and Pearl Harbor."
            />
            <div className="location-grid mission-location-grid">
              {locations.map((location) => (
                <article key={location.id} className="concept-card mission-location-card">
                  <div className="mission-location-card__head">
                    <MapPin size={18} />
                    <div>
                      <h3>{location.name}</h3>
                      <p>{location.region}</p>
                    </div>
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
        </section>

        <section id="contracts" aria-labelledby="mission-contracts-title">
          <div className="mission-section-heading">
            <p className="section-label">Contract access</p>
            <h2 id="mission-contracts-title">Prime-ready vehicles with verified identifiers</h2>
          </div>
          <div className="contract-grid mission-contract-grid">
            {contracts.vehicles.map((vehicle) => (
              <article key={vehicle.name} className="concept-card mission-contract-card">
                <div className="mission-contract-card__head">
                  <ShieldCheck size={18} />
                  <div>
                    <h3>{vehicle.name}</h3>
                    <p>{vehicle.code}</p>
                  </div>
                </div>
                <p>{vehicle.detail}</p>
                <ul>
                  {vehicle.capabilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
            <article className="concept-card mission-identifiers-card">
              <h3>Entity identifiers</h3>
              <div className="mission-identifiers-grid">
                {contracts.identifiers.map((identifier, index) => (
                  <div key={`${identifier.label}-${index}`}>
                    <span>{identifier.label}</span>
                    <strong>{identifier.value}</strong>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="careers" aria-labelledby="mission-careers-title">
          <div className="mission-section-heading">
            <p className="section-label">Careers and culture</p>
            <h2 id="mission-careers-title">A veteran-powered team built for high-trust delivery</h2>
          </div>
          <div className="career-grid mission-career-grid">
            <article className="concept-card mission-career-card">
              <h3>{careers.headline}</h3>
              <p>{careers.intro}</p>
              <p>{careers.veteranMessage}</p>
              <p>{careers.balanceMessage}</p>
            </article>
            <article className="concept-card mission-benefits-card">
              <h3>Benefits and support</h3>
              <div className="mission-benefits-list">
                {careers.benefits.map((benefit) => (
                  <div key={benefit.title}>
                    <strong>{benefit.title}</strong>
                    <p>{benefit.description}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="concept-card mission-families-card">
              <h3>Career families</h3>
              <div className="mission-tag-grid">
                {careers.careerFamilies.map((family) => (
                  <span key={family}>{family}</span>
                ))}
              </div>
            </article>
            <article className="concept-card mission-values-card">
              <h3>Operating values</h3>
              <ul>
                {values.map((value) => (
                  <li key={value.title}>
                    <strong>{value.title}</strong>
                    <p>{value.description}</p>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="contact" aria-labelledby="mission-contact-title" className="mission-contact">
          <div className="concept-card mission-contact-card">
            <p className="section-label">Contact and partnering</p>
            <h2 id="mission-contact-title">Coordinate the next mission requirement</h2>
            <p>
              {brand.publicName} combines engineering, program execution, and secure technology
              delivery for customers who cannot afford disconnects between planning and operations.
            </p>
            <div className="mission-contact-card__grid">
              <div>
                <h3>Headquarters</h3>
                <p>{brand.publicName}</p>
                {contact.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div>
                <h3>Primary pathways</h3>
                <ul>
                  {contact.contactPaths.map((path) => (
                    <li key={path.label}>
                      {path.label} — {path.value}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Point of contact</h3>
                <p>{contact.pointOfContact.name}</p>
                <p>{contact.pointOfContact.title}</p>
              </div>
            </div>
            <div className="mission-contact-card__actions">
              <a
                className="mission-button mission-button--primary"
                href={`tel:${contact.mainPhone.replace(/[^\d+]/g, '')}`}
              >
                <Phone size={16} />
                <span>{contact.mainPhone}</span>
              </a>
              <a className="mission-button" href={`mailto:${contact.pointOfContact.email}`}>
                <Mail size={16} />
                <span>{contact.pointOfContact.email}</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
