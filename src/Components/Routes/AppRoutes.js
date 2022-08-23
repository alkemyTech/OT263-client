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
import Admin from '../../Pages/Admin'

import TestimonialForm from '../Testimonials/TestimonialsForm'
import NewsForm from '../News/NewsForm'
import MembersForm from '../Members/MembersForm'
import Contacts from '../Admin/Contacts'

import { routes } from '../../Config/routes'
import Profile from '../../Pages/Profile'

const AppRoutes = () => {
	const user = true // TODO: replace for store value
	const isAdmin = true // TODO: replace for store value

	return (
		<Routes>
			<Route path={routes.home} element={<Home />} />
			<Route path={routes.about} element={<About />} />
			<Route path={routes.news} element={<News />} />
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
				path={routes.admin.root}
				element={isAdmin ? <Admin /> : <Navigate to={user ? routes.home : routes.login} />}
			>
				<Route path={routes.admin.newMember} element={<MembersForm />} />
				<Route path={routes.admin.newNotice} element={<NewsForm />} />
				<Route path={routes.admin.contacts} element={<Contacts />} />
			</Route>
			<Route path='*' element={<Navigate to={routes.home} />} />
		</Routes>
	)
}

export default AppRoutes
