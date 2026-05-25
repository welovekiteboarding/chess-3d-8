import { render, screen } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { createTestRouter, routerFutureConfig } from './routes';

describe('app routes', () => {
  it('renders the landing route', () => {
    render(<RouterProvider future={routerFutureConfig} router={createTestRouter(['/'])} />);

    expect(
      screen.getByRole('heading', { name: /3d chess, reimagined for the browser/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /launch game shell/i })).toHaveAttribute(
      'href',
      '/game',
    );
  });

  it('renders the game shell route', () => {
    render(
      <RouterProvider future={routerFutureConfig} router={createTestRouter(['/game'])} />,
    );

    expect(screen.getByRole('heading', { name: /game shell/i })).toBeInTheDocument();
    expect(screen.getByText(/render surface for the 3d board scene/i)).toBeInTheDocument();
  });
});
