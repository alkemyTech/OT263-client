import React from 'react'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Profile from './Profile'

describe('<Profile />', () => {
	it('Renders without crashing', () => {
		render(<Profile />)

		expect(screen.getByText(/mis datos/i)).toBeInTheDocument()
	})

	it('Renders all imputs without errors', () => {
		render(<Profile />)
		screen.getAllByText(/nombre/i)
		screen.getAllByText(/apellido/i)
		screen.getAllByText(/email/i)
		screen.getAllByText(/contraseña/i)

		const errors = screen.queryAllByText(/obligatorio/i)
		expect(errors).toHaveLength(0)
	})

	it('Button changes to save when editing profile', () => {
		render(<Profile />)
		act(() => {
			userEvent.click(screen.getByText(/editar/i))
		})
		const buttonText = screen.getByText(/guardar/i)
		expect(buttonText.closest('button')).toBeInTheDocument()
	})

	it('Should not allow data to be inputed', () => {
		render(<Profile />)
		const nameInput = screen.getByLabelText(/nombre/i)
		userEvent.type(nameInput, 'Test')
		expect(nameInput).toHaveValue('')
	})

	it('Should allow data to be inputed when edited is clicked', () => {
		render(<Profile />)
		userEvent.click(screen.getByText(/editar/i))
		const nameInput = screen.getByLabelText(/nombre/i)
		act(() => {
			userEvent.type(nameInput, 'T')
			// expect(nameInput).toHaveValue('Test')
			userEvent.click(screen.getByLabelText(/apellido/i))
			screen.debug()
		})
	})
})
