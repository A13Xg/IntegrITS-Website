/**
 * Route path constants and concept definitions shared across the app.
 *
 * All navigation (App.tsx routes, Navigation, ConceptSwitcher,
 * useConceptNavigation) is derived from this single source so that adding a
 * new concept, or changing a path, only requires an edit here.
 */

/** One of the five design concepts in the showcase. */
export interface ConceptDefinition {
  /** URL-safe identifier, e.g. "mission-command". Used in the route path. */
  id: string;
  /** 1-based position in the showcase (1-5). */
  number: number;
  /** Display title, e.g. "Mission Command". */
  title: string;
  /** One-line design-direction summary shown on the landing page/switcher. */
  description: string;
}

export const CONCEPTS: ConceptDefinition[] = [
  {
    id: 'mission-command',
    number: 1,
    title: 'Mission Command',
    description: 'Dark, technical command-center design.',
  },
  {
    id: 'human-integrity',
    number: 2,
    title: 'Human Integrity',
    description: 'Warm, people-first design.',
  },
  {
    id: 'precision-grid',
    number: 3,
    title: 'Precision Grid',
    description: 'Modernist, grid-driven design.',
  },
  {
    id: 'modern-defense',
    number: 4,
    title: 'Modern Defense',
    description: 'Cinematic, professional defense design.',
  },
  {
    id: 'editorial-legacy',
    number: 5,
    title: 'Editorial Legacy',
    description: 'Serif, institutional editorial design.',
  },
];

/** Route path builders. Kept as plain strings/functions for use both inside
 * and outside the React tree (e.g. metadata, tests). */
export const ROUTES = {
  home: '/',
  concept: (id: string): string => `/concept/${id}`,
  notFound: '/404',
} as const;

/** Looks up a concept definition by its route id. */
export function getConceptById(id: string | undefined): ConceptDefinition | undefined {
  if (!id) {
    return undefined;
  }
  return CONCEPTS.find((concept) => concept.id === id);
}
