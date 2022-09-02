import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import Home from '../../Pages/Home'
import About from '../../Pages/About'
import News from '../../Pages/News'
import Testimonials from '../../Pages/Testimonials'
import Contact from '../../Pages/Contact'
import GetInvolved from '../../Pages/GetInvolved'
import Login from '../../Pages/Login'
import Signup from '../../Pages/Signup'
import AdminRoutes from './AdminRoutes'
import TestimonialForm from '../Testimonials/TestimonialsForm'

import { routes } from '../../Config/routes'
import Profile from '../../Pages/Profile'
import ListContainer from '../ListContainer/ListContainer'
import NewsList from '../News/NewsList'

const AppRoutes = () => {
	const user = false // TODO: replace for store value
	const isAdmin = true // TODO: replace for store value

	return (
		<Routes>
			<Route path={routes.home} element={<Home />} />
			<Route path={routes.about} element={<About />} />
			<Route path={routes.news} element={<ListContainer Component={NewsList} endpoint={"/news"} />}>
				<Route path=':id' element={<ListContainer Component={NewsList} endpoint={"/news"} /> }/>
			</Route>
			<Route path={routes.testimonials} element={<Testimonials />} />
			<Route
				path={routes.newTestimonial}
				element={user ? <TestimonialForm /> : <Navigate to={routes.login} />}
			/>
			<Route path={routes.contact} element={<Contact />} />
			<Route path={routes.getInvolved} element={<GetInvolved />} />
			<Route
				path={routes.profile}
				element={user ? <Profile /> : <Navigate to={routes.login} />}
			/>
			<Route
				path={routes.login}
				element={!user ? <Login /> : <Navigate to={routes.home} />}
			/>
			<Route
				path={routes.signup}
				element={!user ? <Signup /> : <Navigate to={routes.home} />}
			/>
			<Route
				path={routes.admin.root + '/*'}
				element={
					isAdmin ? <AdminRoutes /> : <Navigate to={user ? routes.home : routes.login} />
				}
			/>
			<Route path='*' element={<Navigate to={routes.home} />} />
		</Routes>
	)
}

export default AppRoutes
