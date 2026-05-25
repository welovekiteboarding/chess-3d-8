import { Link } from 'react-router-dom'

const shellCards = [
  {
    title: 'Board viewport',
    description: 'Renderer hookup lands here with room for camera, lights, and piece meshes.',
  },
  {
    title: 'Game state rail',
    description: 'Turn state, move history, and debug controls can layer in without reshaping the route.',
  },
  {
    title: 'Testing surface',
    description: 'UI shell components stay isolated enough for route tests and future interaction coverage.',
  },
]

export function GameShellPage() {
  return (
    <main className="page page-shell">
      <section className="shell-header">
        <div>
          <p className="eyebrow">Route scaffold</p>
          <h1>Game Shell</h1>
          <p className="lede">
            The app shell is live, typed, and ready for the 3D board implementation.
          </p>
        </div>
        <Link className="button button-secondary" to="/">
          Back home
        </Link>
      </section>

      <section className="shell-grid">
        <article className="shell-stage">
          <div className="stage-surface">
            <div className="stage-rim" />
            <div className="stage-grid">
              {Array.from({ length: 16 }).map((_, index) => (
                <span key={index} className="stage-cell" />
              ))}
            </div>
          </div>
          <div className="stage-caption">
            <span className="status-dot" />
            Renderer hookup lands here
          </div>
        </article>

        <div className="shell-cards">
          {shellCards.map((card) => (
            <article key={card.title} className="shell-card">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
