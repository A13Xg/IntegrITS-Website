import { Link } from 'react-router-dom';
import { ROUTES } from '@/app/routes';
import { useConceptNavigation } from '@/hooks/useConceptNavigation';
import styles from './ConceptSwitcher.module.css';

/**
 * Fixed demo toolbar for jumping between concepts. Renders nothing outside
 * a concept route (i.e. on the landing page or the 404 page).
 */
export function ConceptSwitcher() {
  const { current, currentNumber, concepts, goToNext, goToPrevious } = useConceptNavigation();

  if (!current) {
    return null;
  }

  return (
    <nav className={styles.switcher} aria-label="Concept switcher">
      <Link to={ROUTES.home} className={styles.homeButton}>
        Home
      </Link>
      <button type="button" onClick={goToPrevious} className={styles.navButton}>
        Previous
      </button>
      <span className={styles.counter}>
        {currentNumber} of {concepts.length}
      </span>
      <button type="button" onClick={goToNext} className={styles.navButton}>
        Next
      </button>
    </nav>
  );
}
