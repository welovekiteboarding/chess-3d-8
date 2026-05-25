import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <section className="hero">
      <div className="hero__copy">
        <h1>3D chess, reimagined for the browser.</h1>
        <p className="hero__lede">
          A typed React and Vite foundation for building an interactive chess experience with a
          future 3D scene, domain logic, and testable UI boundaries.
        </p>

        <div className="hero__actions">
          <Link className="button button--primary" to="/game">
            Launch Game Shell
          </Link>
          <a
            className="button button--ghost"
            href="https://vite.dev"
            rel="noreferrer"
            target="_blank"
          >
            Vite Docs
          </a>
        </div>
      </div>

      <aside className="status-panel" aria-label="Project status">
        <h2>Ready for next tasks</h2>
        <ul className="status-list">
          <li>React Router provides landing and game shell routes.</li>
          <li>TypeScript, ESLint, Prettier, and Vitest are configured.</li>
          <li>Three.js dependencies are installed for the rendering phase.</li>
        </ul>
      </aside>
    </section>
  );
}
