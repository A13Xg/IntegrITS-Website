import { useEffect, useRef, useState, type RefObject } from 'react';
import { useReducedMotion } from './useReducedMotion';

/**
 * Observes an element with an Intersection Observer and reports when it has
 * scrolled into view, for triggering section entrance animations.
 *
 * When the user prefers reduced motion, `isVisible` is `true` immediately
 * (no observer is attached) so content isn't hidden/withheld from anyone
 * who has disabled motion.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.1
): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, prefersReducedMotion]);

  return [ref, isVisible];
}
