interface PageSkeletonProps {
  label: string;
}

export function PageSkeleton({ label }: PageSkeletonProps) {
  return (
    <div className="page-skeleton" id="main-content" tabIndex={-1} role="status" aria-live="polite" aria-label={label}>
      <div className="page-skeleton__header" />
      <div className="page-skeleton__hero" />
      <div className="page-skeleton__grid">
        <div className="page-skeleton__card" />
        <div className="page-skeleton__card" />
        <div className="page-skeleton__card" />
      </div>
    </div>
  );
}
