import type { ReactNode } from 'react';
import styles from './Footer.module.css';

export type FooterVariant = 'showcase' | 'concept';

export interface FooterProps {
  variant: FooterVariant;
  children?: ReactNode;
}

/**
 * Shared footer used on the landing page and inside every concept.
 * Styling per variant is filled in during Task 4.
 */
export function Footer({ variant, children }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer} data-variant={variant}>
      <p className={styles.credit}>Design Showcase — Five concepts using shared company content</p>
      <p className={styles.copyright}>&copy; {year} IntegrITS Corporation</p>
      {children}
    </footer>
  );
}
