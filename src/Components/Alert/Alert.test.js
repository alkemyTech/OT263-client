import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { confirmationAlert, displayAlert } from './Alert'

describe('Alert', () => {
	window.scrollTo = jest.fn()

	it('Renders confirmation without crashing', () => {
		confirmationAlert()

		expect(screen.getByText(/guardar los cambios/i)).toBeInTheDocument()
	})

	it('Redirects and shows saved alert', async () => {
		confirmationAlert()

		const buttons = screen.getAllByRole('button')

		userEvent.click(buttons[0])

		const successText = await screen.findByText(/guardado/i)

		expect(successText).toBeInTheDocument()
	})

	it('Redirects and shows unsaved alert', async () => {
		confirmationAlert()

		const buttons = screen.getAllByRole('button')

		userEvent.click(buttons[1])

		const unsavedText = await screen.findByText(/cambios no guardados/i)

		expect(unsavedText).toBeInTheDocument()
	})

	it('Renders success info alert without crashing', () => {
		displayAlert()

		expect(screen.getByText(/operación exitosa/i)).toBeInTheDocument()
	})

	it('Renders error info alert without crashing', () => {
		displayAlert(false)

		expect(screen.getByText(/error en la operación/i)).toBeInTheDocument()
	})
})
