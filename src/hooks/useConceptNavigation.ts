import { useLocation, useNavigate } from 'react-router-dom';
import { CONCEPTS, ROUTES, getConceptById, type ConceptDefinition } from '@/app/routes';

export interface ConceptNavigation {
  /** The concept matching the current route, if any. */
  current: ConceptDefinition | undefined;
  /** 1-based position of the current concept, or 0 when not in a concept. */
  currentNumber: number;
  concepts: ConceptDefinition[];
  goToHome: () => void;
  goToNext: () => void;
  goToPrevious: () => void;
  goToConcept: (id: string) => void;
}

const CONCEPT_PATH_PATTERN = /^\/concept\/([^/]+)/;

/**
 * Derives the active concept from the current hash route and exposes
 * navigation helpers (home/next/previous/direct) used by the Navigation
 * header and the ConceptSwitcher toolbar.
 */
export function useConceptNavigation(): ConceptNavigation {
  const location = useLocation();
  const navigate = useNavigate();

  const match = location.pathname.match(CONCEPT_PATH_PATTERN);
  const current = getConceptById(match?.[1]);
  const currentNumber = current?.number ?? 0;
  const total = CONCEPTS.length;

  const goToConcept = (id: string): void => {
    navigate(ROUTES.concept(id));
  };

  const goToHome = (): void => {
    navigate(ROUTES.home);
  };

  const goToNext = (): void => {
    if (!current) {
      return;
    }
    const nextIndex = current.number % total;
    goToConcept(CONCEPTS[nextIndex].id);
  };

  const goToPrevious = (): void => {
    if (!current) {
      return;
    }
    const previousIndex = (current.number - 2 + total) % total;
    goToConcept(CONCEPTS[previousIndex].id);
  };

  return {
    current,
    currentNumber,
    concepts: CONCEPTS,
    goToHome,
    goToNext,
    goToPrevious,
    goToConcept,
  };
}
