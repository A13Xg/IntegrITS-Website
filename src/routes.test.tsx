import { allRoutePaths, conceptRoutes } from './routes';

describe('route definitions', () => {
  it('defines all five concept routes', () => {
    expect(conceptRoutes.map((route) => route.path)).toEqual([
      '/concept/mission-command',
      '/concept/human-integrity',
      '/concept/precision-grid',
      '/concept/modern-defense',
      '/concept/editorial-legacy',
    ]);
  });

  it('includes the showcase route and all concept paths', () => {
    expect(allRoutePaths).toEqual([
      '/',
      '/concept/mission-command',
      '/concept/human-integrity',
      '/concept/precision-grid',
      '/concept/modern-defense',
      '/concept/editorial-legacy',
    ]);
  });
});
