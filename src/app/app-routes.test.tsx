import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, test } from 'vitest'

import { AppRoutes } from './app-routes'

describe('AppRoutes', () => {
  test('shows the landing screen on the root route', () => {
    render(
      <MemoryRouter
        initialEntries={['/']}
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
      >
        <AppRoutes />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('heading', {
        name: /browser-based 3d chess/i,
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /enter game shell/i,
      }),
    ).toHaveAttribute('href', '/game')
  })

  test('shows the game shell route', () => {
    render(
      <MemoryRouter
        initialEntries={['/game']}
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
      >
        <AppRoutes />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('heading', {
        name: /game shell/i,
      }),
    ).toBeInTheDocument()

    expect(screen.getByText('Renderer hookup lands here')).toBeInTheDocument()
  })
})
