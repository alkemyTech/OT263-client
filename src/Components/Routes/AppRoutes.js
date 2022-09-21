import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import Home from '../../Pages/Home'
import About from '../../Pages/About'
import Contact from '../../Pages/Contact'
import GetInvolved from '../../Pages/GetInvolved'
import Login from '../../Pages/Login'
import Signup from '../../Pages/Signup'
import AdminRoutes from './AdminRoutes'
import TestimonialForm from '../Testimonials/TestimonialsForm'
import Activity from '../Activities/Activity'

import { routes } from '../../Config/routes'
import { useState, useEffect } from 'react'
import Profile from '../../Pages/Profile'
import ListContainer from '../ListContainer/ListContainer'
import NewsList from '../News/NewsList'
import NewsDetail from '../News/NewsDetail'
import TestimonialsList from '../Testimonials/TestimonialsList'
import { useDispatch, useSelector } from 'react-redux'
import { roleAdmin } from '../../features/login/logedSlice'
import { selectLoges } from '../../features/login/logedSlice'

const AppRoutes = () => {
	const [isAdmin, setIsAdmin] = useState(false)
	const dispatch=useDispatch()
	const userLoged = useSelector(selectLoges)
	console.log(userLoged?.id)
	useEffect(() => {
		setIsAdmin(userLoged?.roleId===1)
	}, [userLoged?.id])
	console.log(isAdmin)

	return (
		<Routes>
			<Route path={routes.home} element={<Home />} />
			<Route path={routes.about} element={<About />} />
			<Route path='news'>	
				<Route index element={<ListContainer Component={NewsList} endpoint={"/news"} />}/>
				<Route path=':id' element={<ListContainer Component={NewsDetail} endpoint={"/news"} />}/>
			</Route>
			<Route path={`${routes.activities}/:id`} element={<Activity/>}/>
			<Route path={routes.testimonials} element={<ListContainer Component={TestimonialsList} endpoint={"/testimonials"}/>} />
			<Route
				path={routes.newTestimonial}
				element={userLoged?.id ? <TestimonialForm /> : <Navigate to={routes.login} />}
			/>
			<Route path={routes.contact} element={<Contact />} />
			<Route path={routes.getInvolved} element={<GetInvolved />} />
			<Route
				path={routes.profile}
				element={userLoged?.id ? <Profile /> : <Navigate to={routes.login} />}
			/>
			<Route
				path={routes.login}
				element={!userLoged?.id ? <Login /> : <Navigate to={routes.home} />}
			/>
			<Route
				path={routes.signup}
				element={!userLoged?.id ? <Signup /> : <Navigate to={routes.home} />}
			/>
			<Route
				path={routes.admin.root + '/*'}
				element={
					isAdmin ? <AdminRoutes /> : <Navigate to={userLoged?.id ? routes.home : routes.login} />
				}
			/>
			<Route path='*' element={<Navigate to={routes.home} />} />
		</Routes>
	)
}

export default AppRoutes
