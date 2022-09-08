import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ActivityForm from './ActivityForm'

import { routes } from '../../Config/routes'

describe('<ActivityForm />', () => {
	it('Renders without crashing', () => {
		render(
			<MemoryRouter initialEntries={[routes.activities]}>
				<ActivityForm />
			</MemoryRouter>
		)

		expect(screen.getByText(/actividad/i))
	})

	it('Renders all imputs without errors', () => {
		render(
			<MemoryRouter initialEntries={[routes.activities]}>
				<ActivityForm />
			</MemoryRouter>
		)

		screen.getAllByText(/nombre/i)
		screen.getAllByText(/descripción/i)
		screen.getAllByText(/guardar/i)

		const errors = screen.queryAllByText(/actividad no guardada/i)

		expect(errors).toHaveLength(0)
	})

	it('Save button is disabled', () => {
		render(
			<MemoryRouter initialEntries={[routes.activities]}>
				<ActivityForm />
			</MemoryRouter>
		)

		act(() => {
			userEvent.click(screen.getByText(/guardar/i))
		})

		const buttonText = screen.getByText(/guardar/i)

		expect(buttonText.closest('button')).toHaveAttribute('disabled')
	})

	it('Should allow data to be inputed', () => {
		render(
			<MemoryRouter initialEntries={[routes.activities]}>
				<ActivityForm />
			</MemoryRouter>
		)

		const nameInput = screen.getByLabelText(/nombre/i)

		act(() => {
			userEvent.type(nameInput, 'Test')
		})

		expect(nameInput).toHaveValue('Test')
	})
})
