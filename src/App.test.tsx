import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders welcome message', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Welcome to IntegrITS Design Showcase')).toBeInTheDocument();
  });
});
