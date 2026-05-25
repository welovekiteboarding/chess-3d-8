# chess-3d-8

Initial scaffold for a browser-based 3D chess web app. The project uses Vite, React, TypeScript, React Router, Vitest, ESLint, and Prettier so later graph tasks can add chess rules and 3D rendering on top of a stable base.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Setup

From a clean checkout:

```bash
npm install
```

That one command installs the app dependencies and creates the local `node_modules` directory.

## Run locally

Start the development server:

```bash
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173`.

## Available routes

- `/` - landing page for the project scaffold
- `/game` - minimal game shell route for upcoming 3D board work

## Quality checks

Lint the project:

```bash
npm run lint
```

Run the tests once:

```bash
npm run test -- --run
```

Build the production bundle:

```bash
npm run build
```

## Project structure

- `src/app` - route wiring and app-level entry points
- `src/pages` - landing page and game shell route components
- `src/styles` - global styling for the scaffold
- `src/test` - shared test setup
- `public` - static assets such as the project mark
