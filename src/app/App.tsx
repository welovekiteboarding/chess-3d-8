import { RouterProvider } from 'react-router-dom';

import { createAppRouter, routerFutureConfig } from './routes';

const router = createAppRouter();

export function App() {
  return <RouterProvider future={routerFutureConfig} router={router} />;
}
