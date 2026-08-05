import { ArrowRight, BookMarked, ExternalLink, Mail, Phone } from 'lucide-react';
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
import './editorial-legacy.css';

export default function EditorialLegacyPage() {
  useDocumentTitle('Editorial Legacy · IntegrITS Design Exploration');

  const hero = getHeroHeadline('editorial-legacy');
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
    <div className="concept-shell theme-editorial-legacy">
      <DemoToolbar slug="editorial-legacy" number="05" />
      <ConceptNavigation
        conceptNumber="05"
        conceptTitle="Editorial Legacy"
        sections={sectionLinks}
      />
      <main className="concept-content editorial-legacy__content" id="main-content" tabIndex={-1}>
        <section className="editorial-cover" id="hero" aria-labelledby="editorial-hero-title">
          <div className="editorial-cover__masthead">
            <span>Issue 05</span>
            <span>{brand.publicName}</span>
            <span>{brand.headquarters}</span>
          </div>
          <div className="editorial-cover__body concept-card">
            <div>
              <p className="section-label">Archival design direction</p>
              <h1 id="editorial-hero-title">{hero.title}</h1>
              <p>{hero.body}</p>
              <p className="editorial-cover__intro">{brand.intro}</p>
            </div>
            <div className="editorial-cover__actions">
              <button
                type="button"
                className="editorial-button editorial-button--primary"
                onClick={() => scrollToSection('leadership')}
              >
                Read the leadership section
                <ArrowRight size={18} />
              </button>
              <a
                className="editorial-button"
                href={contact.website}
                rel="noopener noreferrer"
                target="_blank"
              >
                Source site
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
          <MediaFrame
            src={getAssetUrl('placeholders/hero-editorial-legacy.svg')}
            alt="Archival editorial hero placeholder for the Editorial Legacy concept"
            className="editorial-cover__media"
          />
        </section>

        <section id="stats" aria-labelledby="editorial-stats-title" className="editorial-section">
          <div className="editorial-section__header">
            <span className="editorial-section__page">06</span>
            <div>
              <p className="section-label">Stats</p>
              <h2 id="editorial-stats-title">The opening spread: essential recognition</h2>
            </div>
          </div>
          <div className="metric-grid editorial-stats-grid">
            {statistics.map((stat) => (
              <article className="concept-card editorial-stat-card" key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
                <p>{stat.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="capabilities"
          aria-labelledby="editorial-capabilities-title"
          className="editorial-section"
        >
          <div className="editorial-section__header">
            <span className="editorial-section__page">12</span>
            <div>
              <p className="section-label">Capabilities</p>
              <h2 id="editorial-capabilities-title">
                Chaptered service lines with strong hierarchy
              </h2>
            </div>
          </div>
          <div className="capability-grid editorial-capability-grid">
            {capabilities.map((capability) => (
              <article key={capability.id} className="concept-card editorial-capability-card">
                <MediaFrame
                  src={getAssetUrl(capability.assetPath)}
                  alt={`Illustration for ${capability.title}`}
                />
                <div className="editorial-capability-card__body">
                  <p className="editorial-capability-card__eyebrow">Feature article</p>
                  <h3>{capability.title}</h3>
                  <p>{capability.summary}</p>
                  <blockquote>{capability.proof}</blockquote>
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

        <section
          id="lifecycle"
          aria-labelledby="editorial-lifecycle-title"
          className="editorial-section"
        >
          <div className="editorial-section__header">
            <span className="editorial-section__page">20</span>
            <div>
              <p className="section-label">Lifecycle</p>
              <h2 id="editorial-lifecycle-title">
                Timeline notes spanning seven disciplined movements
              </h2>
            </div>
          </div>
          <ol className="editorial-lifecycle-grid">
            {lifecycle.map((step, index) => (
              <li key={step.id} className="concept-card editorial-lifecycle-card">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          id="leadership"
          aria-labelledby="editorial-leadership-title"
          className="editorial-section"
        >
          <div className="editorial-section__header">
            <span className="editorial-section__page">28</span>
            <div>
              <p className="section-label">Leadership</p>
              <h2 id="editorial-leadership-title">
                Profiles framed like a collected corporate archive
              </h2>
            </div>
          </div>
          <div className="leadership-grid editorial-leadership-grid">
            {leadership.map((leader) => (
              <article key={leader.id} className="concept-card editorial-leader-card">
                <MediaFrame
                  src={getAssetUrl(leader.portraitPath)}
                  alt={`Portrait placeholder for ${leader.name}`}
                  eyebrow={leader.theme}
                />
                <div>
                  <h3>{leader.name}</h3>
                  <p className="editorial-leader-card__title">{leader.title}</p>
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

        <section
          id="locations"
          aria-labelledby="editorial-locations-title"
          className="editorial-section"
        >
          <div className="editorial-section__header">
            <span className="editorial-section__page">36</span>
            <div>
              <p className="section-label">Locations</p>
              <h2 id="editorial-locations-title">Field notes from the operating footprint</h2>
            </div>
          </div>
          <div className="editorial-location-layout">
            <MediaFrame
              src={getAssetUrl('placeholders/location-map.svg')}
              alt="Illustrated network map of IntegrITS operating locations"
            />
            <div className="location-grid editorial-location-grid">
              {locations.map((location) => (
                <article className="concept-card editorial-location-card" key={location.id}>
                  <h3>{location.name}</h3>
                  <p className="editorial-location-card__region">{location.region}</p>
                  <p>{location.summary}</p>
                  <div className="editorial-location-card__tags">
                    {location.specialties.map((specialty) => (
                      <span key={specialty}>{specialty}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contracts"
          aria-labelledby="editorial-contracts-title"
          className="editorial-section"
        >
          <div className="editorial-section__header">
            <span className="editorial-section__page">42</span>
            <div>
              <p className="section-label">Contracts</p>
              <h2 id="editorial-contracts-title">
                Vehicle access, identifiers, and teaming language
              </h2>
            </div>
          </div>
          <div className="contract-grid editorial-contract-grid">
            {contracts.vehicles.map((vehicle) => (
              <article key={vehicle.name} className="concept-card editorial-contract-card">
                <div className="editorial-contract-card__topline">
                  <BookMarked size={18} />
                  <span>{vehicle.code}</span>
                </div>
                <h3>{vehicle.name}</h3>
                <p>{vehicle.detail}</p>
                <ul>
                  {vehicle.capabilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
            <article className="concept-card editorial-identifiers-card">
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
        </section>

        <section
          id="careers"
          aria-labelledby="editorial-careers-title"
          className="editorial-section"
        >
          <div className="editorial-section__header">
            <span className="editorial-section__page">48</span>
            <div>
              <p className="section-label">Careers</p>
              <h2 id="editorial-careers-title">A closing essay on culture, benefits, and values</h2>
            </div>
          </div>
          <div className="career-grid editorial-career-grid">
            <article className="concept-card editorial-career-card">
              <h3>{careers.headline}</h3>
              <p>{careers.intro}</p>
              <p>{careers.veteranMessage}</p>
              <p>{careers.balanceMessage}</p>
            </article>
            <article className="concept-card editorial-benefits-card">
              <h3>Benefits</h3>
              {careers.benefits.map((benefit) => (
                <div key={benefit.title} className="editorial-benefit-item">
                  <strong>{benefit.title}</strong>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </article>
            <article className="concept-card editorial-families-card">
              <h3>Career families</h3>
              <div className="editorial-families-card__tags">
                {careers.careerFamilies.map((family) => (
                  <span key={family}>{family}</span>
                ))}
              </div>
            </article>
            <article className="concept-card editorial-values-card">
              <h3>Values</h3>
              <div>
                {values.map((value) => (
                  <p key={value.title}>
                    <strong>{value.title}:</strong> {value.description}
                  </p>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="editorial-contact-title"
          className="editorial-section"
        >
          <div className="concept-card editorial-contact-card">
            <p className="section-label">Contact</p>
            <h2 id="editorial-contact-title">Close the issue with a practical next step</h2>
            <div className="editorial-contact-card__grid">
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
                <h3>Preferred pathways</h3>
                <ul>
                  {contact.contactPaths.map((path) => (
                    <li key={path.label}>{path.label}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="editorial-contact-card__actions">
              <a
                className="editorial-button editorial-button--primary"
                href={`tel:${contact.mainPhone.replace(/[^\d+]/g, '')}`}
              >
                <Phone size={16} />
                <span>{contact.mainPhone}</span>
              </a>
              <a className="editorial-button" href={`mailto:${contact.pointOfContact.email}`}>
                <Mail size={16} />
                <span>{contact.pointOfContact.email}</span>
              </a>
              <a
                className="editorial-button"
                href={contact.website}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>integrits.com</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
