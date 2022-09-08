import React from 'react'
import { getByText, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Testimonials from './Testimonials'

describe('<Testimonials />', () => {
	it('Renders without crashing', async () => {
		const { getByText } = render(<Testimonials />)
		expect(getByText(/mensaje/i)).toBeInTheDocument()
	})

	it('Allows deleting a testimonial', () => {
		render(<Testimonials />)
		const buttons = screen.getAllByRole('button')
		userEvent.click(buttons[1])
		const updatedButtons = screen.getAllByRole('button')
		expect(updatedButtons).toHaveLength(buttons.length - 2)
	})

	it('Allows editting a testimonial and submit', () => {
		window.console.log = jest.fn()
		render(<Testimonials />)
		Testimonials.prototype.handleSubmit = jest.fn()

		const buttons = screen.getAllByRole('button')
		userEvent.click(buttons[0])

		const messageBox = screen.getAllByRole('textbox')
		userEvent.type(messageBox[1], 'Test string')

		expect(screen.getByText(/test string/i)).toBeInTheDocument()

		const saveButton = screen.getAllByRole('button')[0]

		userEvent.click(saveButton)

		expect(window.console.log).toBeCalled()
	})
})
