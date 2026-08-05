import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ShowcasePage from './ShowcasePage';
import MissionCommandPage from '../concepts/mission-command/MissionCommandPage';

describe('showcase page', () => {
  it('renders the landing page concept cards', () => {
    render(
      <MemoryRouter>
        <ShowcasePage />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', { name: /integrits website design exploration/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /enter .* concept/i })).toHaveLength(5);
  });

  it('renders accessible named buttons on concept pages', () => {
    render(
      <MemoryRouter>
        <MissionCommandPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('button', { name: /open concept navigation/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /explore capabilities/i })).toBeInTheDocument();
  });
});
