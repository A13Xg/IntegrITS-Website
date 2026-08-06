import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '@/app/App';
import { CONCEPTS, ROUTES } from '@/app/routes';

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );
}

describe('routing', () => {
  it('renders the landing page at /', async () => {
    renderAt('/');
    expect(
      await screen.findByRole('heading', { name: 'IntegrITS Design Showcase' })
    ).toBeInTheDocument();
  });

  it.each(CONCEPTS)(
    'renders the $title concept via a direct link to /concept/$id',
    async (concept) => {
      // Direct navigation to a deep route (as if the URL were pasted/refreshed)
      // must render that concept, proving the route is independently reachable.
      renderAt(ROUTES.concept(concept.id));
      expect(await screen.findByText(concept.title)).toBeInTheDocument();
    }
  );

  it('shows the concept switcher only inside a concept route', async () => {
    renderAt(ROUTES.concept(CONCEPTS[0].id));
    await screen.findByText(CONCEPTS[0].title);
    expect(screen.getByRole('navigation', { name: 'Concept switcher' })).toBeInTheDocument();
  });

  it('hides the concept switcher on the landing page', async () => {
    renderAt('/');
    await screen.findByRole('heading', { name: 'IntegrITS Design Showcase' });
    expect(screen.queryByRole('navigation', { name: 'Concept switcher' })).not.toBeInTheDocument();
  });

  it('redirects unknown routes to the not-found page', async () => {
    renderAt('/this-route-does-not-exist');
    expect(await screen.findByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
  });

  it('serves the not-found page directly at /404', async () => {
    renderAt(ROUTES.notFound);
    expect(await screen.findByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
  });

  it('always exposes a return-to-showcase link while inside a concept', async () => {
    renderAt(ROUTES.concept('human-integrity'));
    await screen.findByText('Human Integrity');
    const homeLinks = screen.getAllByRole('link', { name: /IntegrITS|Home/ });
    expect(homeLinks.length).toBeGreaterThan(0);
    homeLinks.forEach((link) => expect(link).toHaveAttribute('href', '/'));
  });

  it('navigates forward with wraparound via useConceptNavigation (goToNext)', async () => {
    // Editorial Legacy is concept 5 of 5; "Next" should wrap back to concept 1.
    renderAt(ROUTES.concept('editorial-legacy'));
    await screen.findByText('Editorial Legacy');
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(await screen.findByText('Mission Command')).toBeInTheDocument();
  });

  it('navigates backward with wraparound via useConceptNavigation (goToPrevious)', async () => {
    // Mission Command is concept 1 of 5; "Previous" should wrap to concept 5.
    renderAt(ROUTES.concept('mission-command'));
    await screen.findByText('Mission Command');
    fireEvent.click(screen.getByRole('button', { name: 'Previous' }));
    expect(await screen.findByText('Editorial Legacy')).toBeInTheDocument();
  });

  it('returns to the landing page via the switcher Home link', async () => {
    renderAt(ROUTES.concept('precision-grid'));
    await screen.findByText('Precision Grid');
    fireEvent.click(screen.getByRole('link', { name: 'Home' }));
    expect(
      await screen.findByRole('heading', { name: 'IntegrITS Design Showcase' })
    ).toBeInTheDocument();
  });
});
