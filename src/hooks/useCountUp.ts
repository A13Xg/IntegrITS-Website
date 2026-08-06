import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

/**
 * Animates a number counting up from 0 to `target` over `duration`
 * milliseconds using requestAnimationFrame, for stat callouts.
 *
 * Jumps straight to `target` when the user prefers reduced motion, or when
 * `target` is not a finite number.
 */
export function useCountUp(target: number, duration = 1200): number {
  const prefersReducedMotion = useReducedMotion();
  const [count, setCount] = useState(prefersReducedMotion ? target : 0);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!Number.isFinite(target)) {
      setCount(0);
      return;
    }

    if (prefersReducedMotion || duration <= 0) {
      setCount(target);
      return;
    }

    let startTime: number | undefined;

    const tick = (timestamp: number): void => {
      if (startTime === undefined) {
        startTime = timestamp;
      }
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic — starts fast, settles into the final value.
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current !== undefined) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [target, duration, prefersReducedMotion]);

  return count;
}
