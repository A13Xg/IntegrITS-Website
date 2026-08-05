import { lazy, type ComponentType, type LazyExoticComponent } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ShowcasePage from './app/ShowcasePage';

const MissionCommandPage = lazy(() => import('./concepts/mission-command/MissionCommandPage'));
const HumanIntegrityPage = lazy(() => import('./concepts/human-integrity/HumanIntegrityPage'));
const PrecisionGridPage = lazy(() => import('./concepts/precision-grid/PrecisionGridPage'));
const ModernDefensePage = lazy(() => import('./concepts/modern-defense/ModernDefensePage'));
const EditorialLegacyPage = lazy(() => import('./concepts/editorial-legacy/EditorialLegacyPage'));

export interface RouteDefinition {
  path: string;
  title: string;
  slug: string;
  number: string;
  component: LazyExoticComponent<ComponentType>;
}

export const conceptRoutes: ReadonlyArray<RouteDefinition> = [
  {
    path: '/concept/mission-command',
    title: 'Mission Command',
    slug: 'mission-command',
    number: '01',
    component: MissionCommandPage,
  },
  {
    path: '/concept/human-integrity',
    title: 'Human Integrity',
    slug: 'human-integrity',
    number: '02',
    component: HumanIntegrityPage,
  },
  {
    path: '/concept/precision-grid',
    title: 'Precision Grid',
    slug: 'precision-grid',
    number: '03',
    component: PrecisionGridPage,
  },
  {
    path: '/concept/modern-defense',
    title: 'Modern Defense',
    slug: 'modern-defense',
    number: '04',
    component: ModernDefensePage,
  },
  {
    path: '/concept/editorial-legacy',
    title: 'Editorial Legacy',
    slug: 'editorial-legacy',
    number: '05',
    component: EditorialLegacyPage,
  },
];

export const allRoutePaths = ['/', ...conceptRoutes.map((route) => route.path)] as const;

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ShowcasePage />} />
      {conceptRoutes.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
