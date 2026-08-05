import { ExternalLink, Mail, Orbit, Phone, Shield, Sparkles } from 'lucide-react';
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
import './modern-defense.css';

export default function ModernDefensePage() {
  useDocumentTitle('Modern Defense · IntegrITS Design Exploration');

  const hero = getHeroHeadline('modern-defense');
  const {
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
    <div className="concept-shell theme-modern-defense">
      <div className="modern-defense__aurora" aria-hidden="true" />
      <DemoToolbar slug="modern-defense" number="04" />
      <ConceptNavigation conceptNumber="04" conceptTitle="Modern Defense" sections={sectionLinks} />
      <main className="concept-content modern-defense__content" id="main-content" tabIndex={-1}>
        <section className="defense-hero" id="hero" aria-labelledby="defense-hero-title">
          <MediaFrame
            src={getAssetUrl('placeholders/hero-modern-defense.svg')}
            alt="Cinematic dark hero placeholder for the Modern Defense concept"
            className="defense-hero__backdrop"
          />
          <div className="defense-hero__overlay concept-card">
            <p className="section-label">Glassmorphic stealth direction</p>
            <h1 id="defense-hero-title">{hero.title}</h1>
            <p>{hero.body}</p>
            <div className="defense-hero__actions">
              <button
                type="button"
                className="defense-button defense-button--primary"
                onClick={() => scrollToSection('contracts')}
              >
                View contract access
              </button>
              <a
                className="defense-button"
                href={contact.website}
                rel="noopener noreferrer"
                target="_blank"
              >
                Site reference
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
          <div className="defense-hero__status-row">
            {statistics.map((stat) => (
              <article key={stat.label} className="concept-card defense-status-card">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
                <p>{stat.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="stats" aria-labelledby="defense-stats-title">
          <div className="defense-section-heading">
            <p className="section-label">Snapshot</p>
            <h2 id="defense-stats-title">Trusted signals surfaced as floating glass telemetry</h2>
          </div>
          <div className="metric-grid defense-stat-grid">
            {statistics.map((stat) => (
              <article className="concept-card defense-metric-card" key={stat.label}>
                <Sparkles size={18} />
                <strong>{stat.value}</strong>
                <h3>{stat.label}</h3>
                <p>{stat.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="capabilities" aria-labelledby="defense-capabilities-title">
          <div className="defense-section-heading">
            <p className="section-label">Capabilities</p>
            <h2 id="defense-capabilities-title">
              Layered mission support in immersive dark surfaces
            </h2>
          </div>
          <div className="capability-grid defense-capability-grid">
            {capabilities.map((capability) => (
              <article key={capability.id} className="concept-card defense-capability-card">
                <MediaFrame
                  src={getAssetUrl(capability.assetPath)}
                  alt={`Illustration for ${capability.title}`}
                  className="defense-capability-card__media"
                />
                <div className="defense-capability-card__body">
                  <h3>{capability.title}</h3>
                  <p>{capability.summary}</p>
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

        <section id="lifecycle" aria-labelledby="defense-lifecycle-title">
          <div className="defense-section-heading">
            <p className="section-label">Lifecycle</p>
            <h2 id="defense-lifecycle-title">
              Seven connected steps orbiting the mission objective
            </h2>
          </div>
          <ol className="defense-lifecycle-grid">
            {lifecycle.map((step, index) => (
              <li key={step.id} className="concept-card defense-lifecycle-card">
                <span>{`0${index + 1}`}</span>
                <h3>{step.title}</h3>
                <p>{step.summary}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="leadership" aria-labelledby="defense-leadership-title">
          <div className="defense-section-heading">
            <p className="section-label">Leadership</p>
            <h2 id="defense-leadership-title">
              Executive clarity, security discipline, and operational range
            </h2>
          </div>
          <div className="leadership-grid defense-leadership-grid">
            {leadership.map((leader) => (
              <article key={leader.id} className="concept-card defense-leader-card">
                <MediaFrame
                  src={getAssetUrl(leader.portraitPath)}
                  alt={`Portrait placeholder for ${leader.name}`}
                  eyebrow={leader.theme}
                />
                <div className="defense-leader-card__body">
                  <h3>{leader.name}</h3>
                  <p className="defense-leader-card__title">{leader.title}</p>
                  <p>{leader.intro}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="locations" aria-labelledby="defense-locations-title">
          <div className="defense-section-heading">
            <p className="section-label">Locations</p>
            <h2 id="defense-locations-title">
              Fielded presence across air, land, and maritime environments
            </h2>
          </div>
          <div className="defense-location-layout">
            <MediaFrame
              src={getAssetUrl('placeholders/location-map.svg')}
              alt="Operations map for IntegrITS locations"
            />
            <div className="location-grid defense-location-grid">
              {locations.map((location) => (
                <article className="concept-card defense-location-card" key={location.id}>
                  <h3>{location.name}</h3>
                  <p className="defense-location-card__region">{location.region}</p>
                  <p>{location.summary}</p>
                  <div className="defense-location-card__tags">
                    {location.specialties.map((specialty) => (
                      <span key={specialty}>{specialty}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contracts" aria-labelledby="defense-contracts-title">
          <div className="defense-section-heading">
            <p className="section-label">Contracts</p>
            <h2 id="defense-contracts-title">
              Vehicles, identifiers, and teaming posture at a glance
            </h2>
          </div>
          <div className="contract-grid defense-contract-grid">
            {contracts.vehicles.map((vehicle) => (
              <article key={vehicle.name} className="concept-card defense-contract-card">
                <div className="defense-contract-card__head">
                  <Shield size={18} />
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
            <article className="concept-card defense-identifiers-card">
              <h3>Verified identifiers</h3>
              <div className="defense-identifiers-grid">
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

        <section id="careers" aria-labelledby="defense-careers-title">
          <div className="defense-section-heading">
            <p className="section-label">Careers</p>
            <h2 id="defense-careers-title">
              A veteran-forward workforce in a modernized interface
            </h2>
          </div>
          <div className="career-grid defense-career-grid">
            <article className="concept-card defense-career-card">
              <h3>{careers.headline}</h3>
              <p>{careers.intro}</p>
              <p>{careers.veteranMessage}</p>
              <p>{careers.balanceMessage}</p>
            </article>
            <article className="concept-card defense-benefits-card">
              <h3>Benefits</h3>
              <div>
                {careers.benefits.map((benefit) => (
                  <div key={benefit.title} className="defense-benefits-card__item">
                    <strong>{benefit.title}</strong>
                    <p>{benefit.description}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="concept-card defense-values-card">
              <h3>Values</h3>
              <div className="defense-values-card__tags">
                {values.map((value) => (
                  <span key={value.title}>{value.title}</span>
                ))}
              </div>
              <div className="defense-values-card__detail">
                {values.slice(0, 3).map((value) => (
                  <p key={value.title}>
                    <strong>{value.title}:</strong> {value.description}
                  </p>
                ))}
              </div>
            </article>
            <article className="concept-card defense-families-card">
              <h3>Career families</h3>
              <div className="defense-families-card__grid">
                {careers.careerFamilies.map((family) => (
                  <span key={family}>{family}</span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="contact" aria-labelledby="defense-contact-title">
          <div className="concept-card defense-contact-card">
            <div>
              <p className="section-label">Contact</p>
              <h2 id="defense-contact-title">Open a direct line to IntegrITS mission support</h2>
            </div>
            <div className="defense-contact-card__details">
              <div>
                <h3>Headquarters</h3>
                {contact.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div>
                <h3>Point of contact</h3>
                <p>{contact.pointOfContact.name}</p>
                <p>{contact.pointOfContact.title}</p>
              </div>
              <div>
                <h3>Primary pathways</h3>
                <ul>
                  {contact.contactPaths.map((path) => (
                    <li key={path.label}>{path.label}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="defense-contact-card__actions">
              <a
                className="defense-button defense-button--primary"
                href={`tel:${contact.mainPhone.replace(/[^\d+]/g, '')}`}
              >
                <Phone size={16} />
                <span>{contact.mainPhone}</span>
              </a>
              <a className="defense-button" href={`mailto:${contact.pointOfContact.email}`}>
                <Mail size={16} />
                <span>{contact.pointOfContact.email}</span>
              </a>
              <a
                className="defense-button"
                href={contact.website}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Orbit size={16} />
                <span>integrits.com</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
