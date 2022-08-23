import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Profile from './Profile'

import { routes } from '../Config/routes'

describe('<Profile />', () => {
	it('Renders without crashing', () => {
		render(
			<MemoryRouter initialEntries={[routes.profile]}>
				<Profile />
			</MemoryRouter>
		)

		expect(screen.getAllByText(/mis datos/i)).toHaveLength(2)
	})

	it('Renders all imputs without errors', () => {
		render(
			<MemoryRouter initialEntries={[routes.profile]}>
				<Profile />
			</MemoryRouter>
		)

		screen.getAllByText(/nombre/i)
		screen.getAllByText(/apellido/i)
		screen.getAllByText(/email/i)
		screen.getAllByText(/contraseña/i)

		const errors = screen.queryAllByText(/obligatorio/i)

		expect(errors).toHaveLength(0)
	})

	it('Button changes to save when editing profile', () => {
		render(
			<MemoryRouter initialEntries={[routes.profile]}>
				<Profile />
			</MemoryRouter>
		)

		act(() => {
			userEvent.click(screen.getByText(/editar/i))
		})

		const buttonText = screen.getByText(/guardar/i)

		expect(buttonText.closest('button')).toBeInTheDocument()
	})

	it('Should not allow data to be inputed', () => {
		render(
			<MemoryRouter initialEntries={[routes.profile]}>
				<Profile />
			</MemoryRouter>
		)

		const nameInput = screen.getByLabelText(/nombre/i)

		act(() => {
			userEvent.type(nameInput, 'Test')
			expect(nameInput).toHaveValue('')
		})
	})

	it('Should allow data to be inputed when edited is clicked', () => {
		render(
			<MemoryRouter initialEntries={[routes.profile]}>
				<Profile />
			</MemoryRouter>
		)

		act(() => {
			userEvent.click(screen.getByText(/editar/i))
		})

		const nameInput = screen.getByLabelText(/nombre/i)

		act(() => {
			userEvent.type(nameInput, 'Test')
		})
		expect(nameInput).toHaveValue('Test')
	})
})
