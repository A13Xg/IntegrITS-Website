import {
  ArrowRight,
  BookOpen,
  Crosshair,
  Grid2x2,
  Shield,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../components/shared/useDocumentTitle';
import { integritsContent } from '../content/integritsContent';
import type { CompanyContent } from '../content/contentTypes';

const iconMap: Record<CompanyContent['concepts'][number]['iconKey'], LucideIcon> = {
  crosshair: Crosshair,
  users: Users,
  grid: Grid2x2,
  shield: Shield,
  book: BookOpen,
};

export default function ShowcasePage() {
  useDocumentTitle('IntegrITS Website Design Exploration');

  return (
    <main className="showcase-page" id="main-content" tabIndex={-1}>
      <div className="showcase-page__backdrop" aria-hidden="true" />
      <section className="showcase-hero" aria-labelledby="showcase-title">
        <p className="showcase-hero__eyebrow">{integritsContent.brand.name}</p>
        <h1 id="showcase-title">IntegrITS Website Design Exploration</h1>
        <p className="showcase-hero__subtitle">
          Five distinct visual directions built from one shared company story—each one
          production-ready, responsive, and tailored to a different strategic brand lens.
        </p>
        <div className="showcase-hero__meta" aria-label="Project summary">
          <span>5 concepts</span>
          <span>1 shared content model</span>
          <span>GitHub Pages ready</span>
        </div>
      </section>

      <section className="showcase-grid" aria-labelledby="concept-grid-title">
        <div className="showcase-grid__header">
          <p className="section-label">Showcase</p>
          <h2 id="concept-grid-title">Choose a design direction</h2>
        </div>
        <ul className="showcase-cards" role="list">
          {integritsContent.concepts.map((concept) => {
            const Icon = iconMap[concept.iconKey];

            return (
              <li key={concept.slug}>
                <article className="showcase-card">
                  <div className="showcase-card__topline">
                    <span className="showcase-card__number">{concept.number}</span>
                    <span className="showcase-card__style">{concept.styleLabel}</span>
                  </div>
                  <div className="showcase-card__body">
                    <div className="showcase-card__icon" aria-hidden="true">
                      <Icon size={28} />
                    </div>
                    <h3>{concept.title}</h3>
                    <p>{concept.description}</p>
                  </div>
                  <Link
                    className="showcase-card__action"
                    to={concept.path}
                    aria-label={`Enter ${concept.title} concept`}
                  >
                    <span>Enter</span>
                    <ArrowRight size={18} />
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
