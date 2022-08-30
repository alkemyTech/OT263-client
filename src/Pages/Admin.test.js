import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Admin from './Admin'

import { routes } from '../Config/routes'

describe('<Admin />', () => {
	it('Renders without crashing', async () => {
		render(
			<MemoryRouter nitialEntries={[routes.admin]}>
				<Admin />
			</MemoryRouter>
		)

		expect(screen.getByText(/slides/i)).toBeInTheDocument()
	})

	it('Renders all cards', () => {
		render(
			<MemoryRouter nitialEntries={[routes.admin]}>
				<Admin />
			</MemoryRouter>
		)

		expect(screen.getAllByRole('button')).toHaveLength(8)
		expect(screen.getAllByRole('link')).toHaveLength(8)
	})

	it('Redirects to admin sections', () => {
		render(
			<MemoryRouter nitialEntries={[routes.admin]}>
				<Admin />
			</MemoryRouter>
		)

		const buttons = screen.getAllByText(/ver más/i)

		userEvent.click(buttons[0])

		expect(screen.getByText(/novedades/i)).toBeInTheDocument()
	})
})
