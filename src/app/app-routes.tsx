import { Route, Routes } from 'react-router-dom'

import { GameShellPage } from '@/pages/game-shell-page'
import { HomePage } from '@/pages/home-page'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/game" element={<GameShellPage />} />
    </Routes>
  )
}
