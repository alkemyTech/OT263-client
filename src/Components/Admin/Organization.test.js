import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Organization from './Organization'

import { routes } from '../../Config/routes'

describe('<Organization />', () => {
	it('Renders without crashing', () => {
		render(
			<MemoryRouter initialEntries={[routes.organization]}>
				<Organization />
			</MemoryRouter>
		)

		expect(screen.getByText(/editar organización/i))
	})

	it('Renders all imputs without errors', () => {
		render(
			<MemoryRouter initialEntries={[routes.organization]}>
				<Organization />
			</MemoryRouter>
		)

		screen.getByLabelText(/nombre/i)
		screen.getByLabelText(/imagen/i)

		const errors = screen.queryAllByAltText(/obligatorio/i)

		expect(errors).toHaveLength(0)
	})

	it('Save button is disabled', () => {
		render(
			<MemoryRouter initialEntries={[routes.organization]}>
				<Organization />
			</MemoryRouter>
		)

		const buttonText = screen.getByRole('button')

		expect(buttonText).toHaveAttribute('disabled')
	})

	it('Should allow data to be inputed', async () => {
		render(
			<MemoryRouter initialEntries={[routes.organization]}>
				<Organization />
			</MemoryRouter>
		)

		const nameInput = screen.getByLabelText(/nombre/i)

		await act(async () => {
			const nameInput = screen.getByLabelText(/nombre/i)
			await userEvent.clear(nameInput)
			userEvent.type(nameInput, 'Test')
			await nameInput.blur()
		})

		expect(nameInput).toHaveValue('Test')
	})

	it('Should show an error when invalid input', async () => {
		render(
			<MemoryRouter initialEntries={[routes.organization]}>
				<Organization />
			</MemoryRouter>
		)

		const nameInput = screen.getByLabelText(/nombre/i)

		await act(async () => {
			const nameInput = screen.getByLabelText(/nombre/i)
			await userEvent.clear(nameInput)
			userEvent.type(nameInput, 'Test')
			await nameInput.blur()
		})

		const errorMessage = screen.getByText(/caracteres/i)
		expect(errorMessage).toBeInTheDocument()
	})
})
