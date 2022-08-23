import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from './app/store'
import App from './App'

describe('<App />', () => {
	it('Renders without crashing', async () => {
		const { getByText } = render(
			<Provider store={store}>
				<App />
			</Provider>
		)

		expect(getByText(/hola/i)).toBeInTheDocument()
	})
})
