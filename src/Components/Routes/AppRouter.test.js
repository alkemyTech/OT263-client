import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../app/store'
import { MemoryRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'

import { routes } from '../../Config/routes'

// FIXME: some tests will fail until user from store is provided

describe('<AppRoutes />', () => {
	const renderApp = path => {
		return render(
			<Provider store={store}>
				<MemoryRouter initialEntries={[path]}>
					<AppRoutes />
				</MemoryRouter>
			</Provider>
		)
	}

	describe('Without logged user', () => {
		it('Renders without crashing', async () => {
			renderApp(routes.home)
			expect(screen.getByText(/hola/i)).toBeInTheDocument()
		})

		it('Renders login', () => {
			renderApp(routes.login)
			expect(screen.getAllByText(/inicia sesión/i))
		})

		it('Renders signup', () => {
			renderApp(routes.signup)
			expect(screen.getAllByText(/registrate/i))
		})

		it('Renders news', () => {
			renderApp(routes.news)
			expect(screen.getAllByText(/novedades/i))
		})

		it('Renders testimonials', () => {
			renderApp(routes.testimonials)
			expect(screen.getAllByText(/testimonios/i))
		})

		it('Renders contact', () => {
			renderApp(routes.contact)
			expect(screen.getAllByText(/contactate/i))
		})

		it('Renders Get Involved', () => {
			renderApp(routes.getInvolved)
			expect(screen.getAllByText(/queres contribuir/i))
		})

		it('Renders home when invalid url is provided', () => {
			renderApp('/thiIsAnInvalidPath')
			expect(screen.getAllByText(/hola/i))
		})

		it('Redirects from New Testimonial to Login', () => {
			renderApp(routes.newTestimonial)
			expect(screen.getAllByText(/inicia sesión/i))
		})

		it('Redirects from /admin to login', () => {
			renderApp(routes.admin.root)
			expect(screen.getAllByText(/inicia sesión/i))
		})
	})

	describe('With regular user logged', () => {
		it('Redirects from Login to Home', () => {
			renderApp(routes.login)
			expect(screen.getAllByText(/hola/i))
		})

		it('Redirects from Signup to Home', () => {
			renderApp(routes.signup)
			expect(screen.getAllByText(/hola/i))
		})

		it('Renders New Testimonial', () => {
			renderApp(routes.newTestimonial)
			expect(screen.getAllByText(/testimonio/i))
		})

		it('Redirects from /admin to home', () => {
			renderApp(routes.admin.root)
			expect(screen.getAllByText(/hola/i))
		})
	})

	describe('With admin user logged', () => {
		it('Renders admin dashboard if user is admin', () => {
			renderApp(routes.admin.root)
			expect(screen.getAllByText(/admin/i))
		})
	})
})
