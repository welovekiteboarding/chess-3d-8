import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';

import { SiteLayout } from '../components/layout/SiteLayout';
import { GameShellPage } from '../pages/GameShellPage';
import { HomePage } from '../pages/HomePage';

export const routes = [
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'game',
        element: <GameShellPage />,
      },
    ],
  },
];

export const routerFutureConfig = {
  v7_fetcherPersist: true,
  v7_normalizeFormMethod: true,
  v7_partialHydration: true,
  v7_relativeSplatPath: true,
  v7_skipActionErrorRevalidation: true,
  v7_startTransition: true,
} as const;

export function createAppRouter() {
  return createBrowserRouter(routes, {
    future: routerFutureConfig,
  });
}

export function createTestRouter(initialEntries: string[] = ['/']) {
  return createMemoryRouter(routes, {
    future: routerFutureConfig,
    initialEntries,
  });
}
