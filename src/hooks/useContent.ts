import { useMemo } from 'react';
import type { CompanyContent } from '../content/contentTypes';
import { integritsContent } from '../content/integritsContent';
import { validateContent } from '../content/validation';

/**
 * Returns the single, validated CompanyContent object shared by all five
 * design concepts. Memoized so every render (and every concept page) sees
 * the same object reference.
 */
export function useContent(): CompanyContent {
  return useMemo(() => validateContent(integritsContent), []);
}
