import type { ConceptDefinition } from './routes';

/** Per-route SEO/document metadata. */
export interface RouteMetadata {
  /** Document title (kept under ~70 chars). */
  title: string;
  /** Meta description (kept under ~160 chars). */
  description: string;
  ogTitle: string;
  ogDescription: string;
  /** Value for `<meta name="theme-color">`. */
  themeColor: string;
  conceptName?: string;
  conceptNumber?: number;
}

const SITE_TITLE = 'IntegrITS Design Showcase';
const DEFAULT_THEME_COLOR = '#1a1a1a';

export const landingMetadata: RouteMetadata = {
  title: SITE_TITLE,
  description: 'Five distinct visual directions built from one shared company story.',
  ogTitle: SITE_TITLE,
  ogDescription: 'Five distinct visual directions built from one shared company story.',
  themeColor: DEFAULT_THEME_COLOR,
};

export const notFoundMetadata: RouteMetadata = {
  title: `Page not found — ${SITE_TITLE}`,
  description: 'The page you requested does not exist in the IntegrITS Design Showcase.',
  ogTitle: `Page not found — ${SITE_TITLE}`,
  ogDescription: 'The page you requested does not exist in the IntegrITS Design Showcase.',
  themeColor: DEFAULT_THEME_COLOR,
};

/** Theme color per concept, matched to each concept's visual direction. */
const CONCEPT_THEME_COLORS: Record<string, string> = {
  'mission-command': '#0a0e14',
  'human-integrity': '#7a4a2f',
  'precision-grid': '#f5f5f0',
  'modern-defense': '#1c2b1f',
  'editorial-legacy': '#f8f4e9',
};

/** Longer, SEO-oriented description per concept. */
const CONCEPT_DESCRIPTIONS: Record<string, string> = {
  'mission-command': 'Technical command-center design exploring IntegrITS capabilities.',
  'human-integrity': 'Warm, people-first design exploring IntegrITS culture and values.',
  'precision-grid': 'Modernist, grid-driven design exploring IntegrITS precision engineering.',
  'modern-defense': 'Cinematic, professional design exploring the IntegrITS defense mission.',
  'editorial-legacy': 'Serif, institutional design exploring IntegrITS history and experience.',
};

/** Builds document metadata for a concept route from its definition. */
export function getConceptMetadata(concept: ConceptDefinition): RouteMetadata {
  const title = `${concept.title} — ${SITE_TITLE}`;
  const description = CONCEPT_DESCRIPTIONS[concept.id] ?? concept.description;
  return {
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    themeColor: CONCEPT_THEME_COLORS[concept.id] ?? DEFAULT_THEME_COLOR,
    conceptName: concept.title,
    conceptNumber: concept.number,
  };
}

function setMetaTag(attr: 'name' | 'property', key: string, content: string): void {
  let element = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

/**
 * Applies route metadata to the live document: title, meta description,
 * theme-color, and Open Graph tags. Safe to call on every route change.
 */
export function applyRouteMetadata(metadata: RouteMetadata): void {
  if (typeof document === 'undefined') {
    return;
  }
  document.title = metadata.title;
  setMetaTag('name', 'description', metadata.description);
  setMetaTag('name', 'theme-color', metadata.themeColor);
  setMetaTag('property', 'og:title', metadata.ogTitle);
  setMetaTag('property', 'og:description', metadata.ogDescription);
}
