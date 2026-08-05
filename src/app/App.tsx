import { Suspense } from 'react';
import { AppRoutes } from '../routes';
import { PageSkeleton } from '../components/shared/PageSkeleton';
import { SkipLink } from '../components/shared/SkipLink';

export default function App() {
  return (
    <>
      <SkipLink />
      <Suspense fallback={<PageSkeleton label="Loading IntegrITS concept" />}>
        <AppRoutes />
      </Suspense>
    </>
  );
}
