import { Link } from 'react-router-dom'

const boardFiles = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

export function HomePage() {
  return (
    <main className="page page-home">
      <section className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">Scaffold ready for rendering, rules, and interaction</p>
          <h1>Browser-based 3D chess</h1>
          <p className="lede">
            This starter app wires together Vite, React, TypeScript, route-level smoke
            tests, and a clean game shell so the next graph tasks can focus on gameplay
            and rendering instead of boilerplate.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/game">
              Enter game shell
            </Link>
            <a className="button button-secondary" href="https://threejs.org/" target="_blank" rel="noreferrer">
              Three.js stack reference
            </a>
          </div>
        </div>
        <div className="hero-preview" aria-hidden="true">
          <img className="hero-mark" src="/knight-mark.svg" alt="" />
          <div className="hero-board">
            {boardFiles.map((file) => (
              <div key={file} className="board-file">
                <span>{file}</span>
                <div className="board-track" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
