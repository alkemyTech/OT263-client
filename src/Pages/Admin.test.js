import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import Admin from './Admin'

describe('<Admin />', () => {
	it('Renders without crashing', async () => {
		render(
			<Router>
				<Admin />
			</Router>
		)
		expect(screen.getByText(/slides/i)).toBeInTheDocument()
	})
})
