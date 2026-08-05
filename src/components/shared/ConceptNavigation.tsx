import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export interface NavSectionLink {
  id: string;
  label: string;
}

interface ConceptNavigationProps {
  conceptNumber: string;
  conceptTitle: string;
  sections: ReadonlyArray<NavSectionLink>;
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  section?.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  });
}

export function ConceptNavigation({
  conceptNumber,
  conceptTitle,
  sections,
}: ConceptNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <header className="concept-nav">
      <div className="concept-nav__brand-group">
        <Link className="concept-nav__brand" to="/">
          <span className="concept-nav__wordmark">IntegrITS</span>
          <span className="concept-nav__subtitle">Turning Technology into Solutions</span>
        </Link>
        <div className="concept-nav__context" aria-label="Current concept">
          <span>{conceptNumber}</span>
          <span>{conceptTitle}</span>
        </div>
      </div>
      <button
        className="concept-nav__menu-button"
        type="button"
        aria-expanded={isOpen}
        aria-controls="concept-nav-links"
        aria-label={isOpen ? 'Close concept navigation' : 'Open concept navigation'}
        onClick={() => setIsOpen((value) => !value)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav className={`concept-nav__links ${isOpen ? 'is-open' : ''}`} id="concept-nav-links">
        {sections.map((section) => (
          <button
            key={section.id}
            className="concept-nav__link"
            type="button"
            onClick={() => handleNavigate(section.id)}
          >
            {section.label}
          </button>
        ))}
        <Link className="concept-nav__showcase-link" to="/" onClick={() => setIsOpen(false)}>
          Return to showcase
        </Link>
      </nav>
    </header>
  );
}
