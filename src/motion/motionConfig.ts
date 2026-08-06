/**
 * Standard durations and easing curves shared by every concept's motion.
 * Mirrors the CSS custom properties defined in `src/styles/motion.css` —
 * keep both in sync if either changes.
 */
export const MOTION_CONFIG = {
  /** Smallest perceptible transition — hover states, icon toggles. */
  MICRO: 120,
  /** Single component state change — button press, tab switch. */
  COMPONENT: 180,
  /** Section-level entrance/exit — cards, panels revealing on scroll. */
  SECTION: 300,
  /** Large, page-level choreography — hero entrances, route transitions. */
  LARGE: 600,

  /** Deceleration curve for elements entering the viewport. */
  EASE_CUBIC: 'cubic-bezier(0.16, 1, 0.3, 1)',
  /** Slight overshoot — playful emphasis, count-ups, badges. */
  EASE_SMOOTH: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  /** Material-style standard curve for most UI transitions. */
  EASE_STANDARD: 'cubic-bezier(0.4, 0, 0.2, 1)',
  /** Symmetric ease for looping or reversible motion. */
  EASE_IN_OUT: 'cubic-bezier(0.42, 0, 0.58, 1)',
} as const;

export type MotionDuration =
  | typeof MOTION_CONFIG.MICRO
  | typeof MOTION_CONFIG.COMPONENT
  | typeof MOTION_CONFIG.SECTION
  | typeof MOTION_CONFIG.LARGE;

export type MotionEasing =
  | typeof MOTION_CONFIG.EASE_CUBIC
  | typeof MOTION_CONFIG.EASE_SMOOTH
  | typeof MOTION_CONFIG.EASE_STANDARD
  | typeof MOTION_CONFIG.EASE_IN_OUT;

/**
 * Builds a CSS `transition` shorthand value from a standard duration and
 * easing curve, e.g. `getTransition(MOTION_CONFIG.COMPONENT, MOTION_CONFIG.EASE_STANDARD)`
 * → `"180ms cubic-bezier(0.4, 0, 0.2, 1)"`.
 */
export function getTransition(
  duration: number = MOTION_CONFIG.COMPONENT,
  easing: string = MOTION_CONFIG.EASE_STANDARD
): string {
  return `${duration}ms ${easing}`;
}
