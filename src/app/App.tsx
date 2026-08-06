import {
  lazy,
  Suspense,
  useEffect,
  type ComponentType,
  type LazyExoticComponent,
  type ReactNode,
} from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { ErrorBoundary } from './ErrorBoundary';
import { CONCEPTS, ROUTES } from './routes';
import {
  applyRouteMetadata,
  getConceptMetadata,
  landingMetadata,
  notFoundMetadata,
} from './routeMetadata';
import type { RouteMetadata } from './routeMetadata';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';
import { ConceptSwitcher } from '@/components/shared/ConceptSwitcher';
import { useConceptNavigation } from '@/hooks/useConceptNavigation';

// Each concept is its own lazy chunk so the initial bundle only ships the
// landing page; the other four concepts stay unfetched until visited.
const MissionCommand = lazy(() =>
  import('@/concepts/mission-command').then((m) => ({ default: m.MissionCommand }))
);
const HumanIntegrity = lazy(() =>
  import('@/concepts/human-integrity').then((m) => ({ default: m.HumanIntegrity }))
);
const PrecisionGrid = lazy(() =>
  import('@/concepts/precision-grid').then((m) => ({ default: m.PrecisionGrid }))
);
const ModernDefense = lazy(() =>
  import('@/concepts/modern-defense').then((m) => ({ default: m.ModernDefense }))
);
const EditorialLegacy = lazy(() =>
  import('@/concepts/editorial-legacy').then((m) => ({ default: m.EditorialLegacy }))
);

const CONCEPT_COMPONENTS: Record<string, LazyExoticComponent<ComponentType>> = {
  'mission-command': MissionCommand,
  'human-integrity': HumanIntegrity,
  'precision-grid': PrecisionGrid,
  'modern-defense': ModernDefense,
  'editorial-legacy': EditorialLegacy,
};

/** Applies document title/meta tags for the active route on mount/change. */
function RouteMeta({ metadata }: { metadata: RouteMetadata }) {
  useEffect(() => {
    applyRouteMetadata(metadata);
  }, [metadata]);
  return null;
}

function LandingPage() {
  return (
    <main>
      <RouteMeta metadata={landingMetadata} />
      <h1>IntegrITS Design Showcase</h1>
      <p>Five distinct visual directions built from one shared company story.</p>
      <ul>
        {CONCEPTS.map((concept) => (
          <li key={concept.id}>
            <Link to={ROUTES.concept(concept.id)}>{concept.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

function NotFoundPage() {
  return (
    <main>
      <RouteMeta metadata={notFoundMetadata} />
      <h1>Page not found</h1>
      <p>The page you requested does not exist.</p>
      <Link to={ROUTES.home}>Return to showcase</Link>
    </main>
  );
}

function RouteLoading() {
  return <div role="status">Loading…</div>;
}

/** Wraps every route with the shared header/footer and the concept switcher
 * toolbar, which shows itself only while inside a concept route. */
function Layout({ children }: { children: ReactNode }) {
  const { current } = useConceptNavigation();
  const variant = current ? 'concept' : 'showcase';

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navigation variant={variant} concept={current} />
      <div id="main-content" tabIndex={-1}>
        {children}
      </div>
      {current && <ConceptSwitcher />}
      <Footer variant={variant} />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Suspense fallback={<RouteLoading />}>
          <Routes>
            <Route path={ROUTES.home} element={<LandingPage />} />
            {CONCEPTS.map((concept) => {
              const ConceptComponent = CONCEPT_COMPONENTS[concept.id];
              return (
                <Route
                  key={concept.id}
                  path={ROUTES.concept(concept.id)}
                  element={
                    <>
                      <RouteMeta metadata={getConceptMetadata(concept)} />
                      <ConceptComponent />
                    </>
                  }
                />
              );
            })}
            <Route path={ROUTES.notFound} element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to={ROUTES.notFound} replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
