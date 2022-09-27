import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { routes } from '../../Config/routes'
import Home from '../../Pages/Home'
import About from '../../Pages/About'
import Contact from '../../Pages/Contact'
import GetInvolved from '../../Pages/GetInvolved'
import Login from '../../Pages/Login'
import Signup from '../../Pages/Signup'
import AdminRoutes from './AdminRoutes'
import TestimonialForm from '../Testimonials/TestimonialsForm'
import Activity from '../Activities/Activity'

import Profile from '../../Pages/Profile'
import ListContainer from '../ListContainer/ListContainer'
import NewsList from '../News/NewsList'
import NewsDetail from '../News/NewsDetail'
import TestimonialsList from '../Testimonials/TestimonialsList'
import RequireAuth from '../../features/RequireAuth'


const AppRoutes = () => {

	return (
		<Routes>
			<Route path={routes.home} element={<Home />} />
			<Route path={routes.about} element={<About />} />
			<Route path={routes.contact} element={<Contact />} />
			<Route path={routes.getInvolved} element={<GetInvolved />} />
			<Route path='news'>	
				<Route index element={<ListContainer Component={NewsList} endpoint={"/news"} />}/>
				<Route path=':id' element={<ListContainer Component={NewsDetail} endpoint={"/news"} />}/>
			</Route>
			<Route path={`${routes.activities}/:id`} element={<Activity/>}/>
			<Route path={routes.testimonials} element={<ListContainer Component={TestimonialsList} endpoint={"/testimonials"}/>} />
			
			<Route element={<RequireAuth allowedRoles={[1,2]}/>}>
			<Route
				path={routes.newTestimonial} element={<TestimonialForm />} />
			</Route>
			
			<Route element={<RequireAuth allowedRoles={[1,2]}/>}>
			<Route
				path={routes.profile} element={<Profile />}
			/>
			</Route>
			<Route element={<RequireAuth ifLoggedUser/>}>
			<Route
				path={routes.login}
				element={<Login />}
			/>
			</Route>
			<Route element={<RequireAuth ifLoggedUser/>}>
			<Route
				path={routes.signup}
				element={<Signup />}
			/>
			</Route>
			<Route element={<RequireAuth allowedRoles={[1]}/>}>
			<Route
				path={routes.admin.root + '/*'} element={<AdminRoutes />}
			/>
			</Route>

			<Route path='*' element={<Navigate to={routes.home} />} />
		</Routes>
	)
}

export default AppRoutes
