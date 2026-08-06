import type { CSSProperties } from 'react';
import styles from './SkeletonLoader.module.css';

export type SkeletonVariant = 'text' | 'image' | 'card';

export interface SkeletonLoaderProps {
  /** Visual shape of the placeholder. Defaults to `'text'`. */
  variant?: SkeletonVariant;
  /** Number of placeholder lines to render when `variant="text"`. */
  lines?: number;
  /** CSS width, e.g. `'100%'` or `'12rem'`. */
  width?: string;
  /** CSS height, e.g. `'1rem'` or `'240px'`. */
  height?: string;
  /** Extra class names for layout composition by the caller. */
  className?: string;
}

/**
 * Loading-state placeholder used while content streams in. Shows a shimmer
 * sweep unless the user prefers reduced motion, in which case it falls back
 * to a static tint (handled entirely in CSS via the `prefers-reduced-motion`
 * media query, so no JS branching is needed here).
 */
export function SkeletonLoader({
  variant = 'text',
  lines = 3,
  width,
  height,
  className,
}: SkeletonLoaderProps) {
  const style: CSSProperties = { width, height };
  const rootClassName = [styles.skeleton, className].filter(Boolean).join(' ');

  if (variant === 'text') {
    const lineCount = Math.max(1, lines);
    return (
      <div className={rootClassName} data-variant="text" role="status" aria-label="Loading">
        {Array.from({ length: lineCount }).map((_, index) => (
          <span
            key={index}
            className={styles.line}
            style={index === lineCount - 1 ? { ...style, width: width ?? '75%' } : style}
          />
        ))}
        <span className="sr-only">Loading content…</span>
      </div>
    );
  }

  const variantClass = variant === 'image' ? styles.image : styles.card;

  return (
    <div
      className={`${rootClassName} ${variantClass}`}
      data-variant={variant}
      style={style}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading content…</span>
    </div>
  );
}
