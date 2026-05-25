# Chess 3D

Initial scaffold for a browser-based 3D chess web app. The project uses React, TypeScript, Vite,
Vitest, ESLint, Prettier, and routing so later graph tasks can add the chess engine and 3D scene
without replacing the foundation.

## Stack

- React 18 with TypeScript
- Vite for local development and production builds
- React Router for the landing route and game shell route
- Vitest and Testing Library for UI tests
- ESLint and Prettier for code quality
- Three.js and `@react-three/fiber` preinstalled for upcoming 3D work

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the local development server:

   ```bash
   npm run dev
   ```

3. Open the local URL printed by Vite in your browser.

## Available Scripts

- `npm run dev` starts the app in development mode.
- `npm run build` creates the production build in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run lint` runs ESLint across the project.
- `npm run test -- --run` runs the test suite once.
- `npm run format` formats the repository with Prettier.
- `npm run format:check` checks formatting without changing files.

## Current Routes

- `/` shows the project landing page.
- `/game` shows the minimal game shell where the 3D board scene will be mounted later.
