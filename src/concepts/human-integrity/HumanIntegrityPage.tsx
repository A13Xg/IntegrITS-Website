import { ArrowRight, ExternalLink, Mail, Quote } from 'lucide-react';
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
import './human-integrity.css';

export default function HumanIntegrityPage() {
  useDocumentTitle('Human Integrity · IntegrITS Design Exploration');

  const hero = getHeroHeadline('human-integrity');
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
    <div className="concept-shell theme-human-integrity">
      <DemoToolbar slug="human-integrity" number="02" />
      <ConceptNavigation
        conceptNumber="02"
        conceptTitle="Human Integrity"
        sections={sectionLinks}
      />
      <main className="concept-content human-integrity__content" id="main-content" tabIndex={-1}>
        <section className="human-hero" id="hero" aria-labelledby="human-hero-title">
          <div className="human-hero__copy">
            <p className="section-label">People-first leadership direction</p>
            <h1 id="human-hero-title">{hero.title}</h1>
            <p>{hero.body}</p>
            <p className="human-hero__promise">{brand.promise}</p>
            <div className="human-hero__actions">
              <button
                type="button"
                className="human-button human-button--primary"
                onClick={() => scrollToSection('leadership')}
              >
                Meet the team
                <ArrowRight size={18} />
              </button>
              <a
                className="human-button"
                href={contact.website}
                rel="noopener noreferrer"
                target="_blank"
              >
                Company site
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
          <div className="human-hero__media-stack">
            <MediaFrame
              src={getAssetUrl('placeholders/hero-human-integrity.svg')}
              alt="Warm editorial hero composition for the Human Integrity concept"
              className="human-hero__media"
            />
            <blockquote className="concept-card human-hero__quote">
              <Quote size={20} />
              <p>
                Integrity is more than a name. It is the throughline connecting sound practices,
                mutual respect, operational discipline, and trustworthy execution.
              </p>
            </blockquote>
          </div>
        </section>

        <section id="stats" aria-labelledby="human-stats-title">
          <div className="human-section-heading">
            <p className="section-label">Recognition</p>
            <h2 id="human-stats-title">A company story told in trusted signals</h2>
          </div>
          <div className="metric-grid human-stats-grid">
            {statistics.map((stat) => (
              <article className="concept-card human-stat-card" key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
                <p>{stat.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="capabilities" aria-labelledby="human-capabilities-title">
          <div className="human-section-heading">
            <p className="section-label">Capabilities</p>
            <h2 id="human-capabilities-title">Technical breadth with a people-centered tone</h2>
          </div>
          <div className="capability-grid human-capability-grid">
            {capabilities.map((capability, index) => (
              <article
                key={capability.id}
                className={`concept-card human-capability-card ${index % 2 === 1 ? 'is-reversed' : ''}`}
              >
                <MediaFrame
                  src={getAssetUrl(capability.assetPath)}
                  alt={`Illustration for ${capability.title}`}
                  className="human-capability-card__media"
                />
                <div className="human-capability-card__content">
                  <h3>{capability.title}</h3>
                  <p>{capability.summary}</p>
                  <p className="human-capability-card__proof">{capability.proof}</p>
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

        <section id="lifecycle" aria-labelledby="human-lifecycle-title">
          <div className="human-section-heading">
            <p className="section-label">Lifecycle</p>
            <h2 id="human-lifecycle-title">
              A steady rhythm of planning, delivery, and stewardship
            </h2>
          </div>
          <ol className="human-lifecycle-grid">
            {lifecycle.map((step) => (
              <li key={step.id} className="concept-card human-lifecycle-card">
                <h3>{step.title}</h3>
                <p>{step.summary}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="leadership" aria-labelledby="human-leadership-title">
          <div className="human-section-heading">
            <p className="section-label">Leadership</p>
            <h2 id="human-leadership-title">Profiles that connect credentials with character</h2>
          </div>
          <div className="leadership-grid human-leadership-grid">
            {leadership.map((leader) => (
              <article className="concept-card human-leader-card" key={leader.id}>
                <MediaFrame
                  src={getAssetUrl(leader.portraitPath)}
                  alt={`Portrait placeholder for ${leader.name}`}
                  eyebrow={leader.theme}
                />
                <div className="human-leader-card__body">
                  <h3>{leader.name}</h3>
                  <p className="human-leader-card__title">{leader.title}</p>
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

        <section id="locations" aria-labelledby="human-locations-title">
          <div className="human-section-heading">
            <p className="section-label">Locations</p>
            <h2 id="human-locations-title">A distributed team with mission-grounded presence</h2>
          </div>
          <div className="human-location-layout">
            <MediaFrame
              src={getAssetUrl('placeholders/location-map.svg')}
              alt="Location network illustration for IntegrITS operations"
              caption="From San Diego headquarters to fielded support locations across the United States and Pacific range environments."
            />
            <div className="location-grid human-location-grid">
              {locations.map((location) => (
                <article key={location.id} className="concept-card human-location-card">
                  <h3>{location.name}</h3>
                  <p className="human-location-card__region">{location.region}</p>
                  <p>{location.summary}</p>
                  <div className="human-location-card__tags">
                    {location.specialties.map((specialty) => (
                      <span key={specialty}>{specialty}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contracts" aria-labelledby="human-contracts-title">
          <div className="human-section-heading">
            <p className="section-label">Contracts</p>
            <h2 id="human-contracts-title">Credentialed access paired with responsive teaming</h2>
          </div>
          <div className="contract-grid human-contract-grid">
            {contracts.vehicles.map((vehicle) => (
              <article key={vehicle.name} className="concept-card human-contract-card">
                <h3>{vehicle.name}</h3>
                <p className="human-contract-card__code">{vehicle.code}</p>
                <p>{vehicle.detail}</p>
                <ul>
                  {vehicle.capabilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
            <article className="concept-card human-identifiers-card">
              <h3>Verified identifiers</h3>
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
        </section>

        <section id="careers" aria-labelledby="human-careers-title">
          <div className="human-section-heading">
            <p className="section-label">Careers</p>
            <h2 id="human-careers-title">Culture, learning, and long-term mission fit</h2>
          </div>
          <div className="career-grid human-career-grid">
            <article className="concept-card human-career-intro">
              <h3>{careers.headline}</h3>
              <p>{careers.intro}</p>
              <p>{careers.veteranMessage}</p>
              <p>{careers.balanceMessage}</p>
            </article>
            <article className="concept-card human-benefits-card">
              <h3>Benefits that reinforce balance</h3>
              <div>
                {careers.benefits.map((benefit) => (
                  <div key={benefit.title} className="human-benefit-item">
                    <strong>{benefit.title}</strong>
                    <p>{benefit.description}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="concept-card human-values-card">
              <h3>Shared values</h3>
              <div className="value-grid human-values-grid">
                {values.map((value) => (
                  <div key={value.title}>
                    <strong>{value.title}</strong>
                    <p>{value.description}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="concept-card human-families-card">
              <h3>Career families</h3>
              <div className="human-families-card__tags">
                {careers.careerFamilies.map((family) => (
                  <span key={family}>{family}</span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="contact" aria-labelledby="human-contact-title">
          <div className="concept-card human-contact-card">
            <p className="section-label">Contact</p>
            <h2 id="human-contact-title">Start a conversation with IntegrITS</h2>
            <p>
              Veteran ownership, technical breadth, and disciplined communication come together when
              customers need a partner that understands both mission pressure and people.
            </p>
            <div className="human-contact-card__details">
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
                <p>{contact.pointOfContact.phone}</p>
              </div>
              <div>
                <h3>Best paths</h3>
                <ul>
                  {contact.contactPaths.map((path) => (
                    <li key={path.label}>{path.label}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="human-contact-card__actions">
              <a
                className="human-button human-button--primary"
                href={`mailto:${contact.pointOfContact.email}`}
              >
                <Mail size={16} />
                <span>Email contracts and partnerships</span>
              </a>
              <a
                className="human-button"
                href={contact.website}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Learn more at integrits.com</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
