import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES, type ConceptDefinition } from '@/app/routes';
import styles from './Navigation.module.css';

export type NavigationVariant = 'showcase' | 'concept';

export interface NavigationProps {
  /** The active concept, when rendered inside a concept route. */
  concept?: ConceptDefinition;
  variant: NavigationVariant;
  children?: ReactNode;
}

/**
 * Shared header used on the landing page and inside every concept.
 * Styling per variant is filled in during Task 4; this establishes the
 * structural frame and the always-available link back to the showcase.
 */
export function Navigation({ concept, variant, children }: NavigationProps) {
  return (
    <header className={styles.navigation} data-variant={variant}>
      <Link to={ROUTES.home} className={styles.wordmark}>
        IntegrITS
      </Link>
      {concept && (
        <span className={styles.conceptIndicator}>
          Concept {concept.number} of 5 — {concept.title}
        </span>
      )}
      {children}
    </header>
  );
}
