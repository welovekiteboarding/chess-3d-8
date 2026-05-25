import { NavLink, Outlet } from 'react-router-dom';

export function SiteLayout() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <NavLink className="brand" to="/">
          <img alt="" aria-hidden="true" className="brand__mark" src="/chess-mark.svg" />
          <span>Chess 3D</span>
        </NavLink>

        <nav aria-label="Primary" className="topbar__nav">
          <NavLink className="topbar__link" to="/">
            Home
          </NavLink>
          <NavLink className="topbar__link" to="/game">
            Game Shell
          </NavLink>
        </nav>
      </header>

      <main className="page-shell">
        <Outlet />
      </main>
    </div>
  );
}
