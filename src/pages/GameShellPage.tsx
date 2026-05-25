export function GameShellPage() {
  return (
    <section className="game-shell">
      <div className="game-shell__stage">
        <div className="stage-card">
          <p className="stage-card__label">Render Surface</p>
          <h1>Game Shell</h1>
          <p>Render surface for the 3D board scene.</p>
        </div>
      </div>

      <aside className="game-shell__sidebar" aria-label="Game sidebar">
        <section className="info-card">
          <h2>Next milestone</h2>
          <p>Mount the board scene and connect it to chess domain state.</p>
        </section>

        <section className="info-card">
          <h2>Initial UI zones</h2>
          <ul className="status-list">
            <li>3D canvas area</li>
            <li>Turn and status summary</li>
            <li>Move history and controls</li>
          </ul>
        </section>
      </aside>
    </section>
  );
}
