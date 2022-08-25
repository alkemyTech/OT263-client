import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Admin from '../../Pages/Admin'
import NewsForm from '../News/NewsForm'
import MembersForm from '../Members/MembersForm'
import Contacts from '../Admin/Contacts'
import AdminNews from '../Admin/News'
import Activities from '../Admin/Activities'
import Categories from '../Admin/Categories'
import AdminTestimonials from '../Admin/Testimonials'
import Organization from '../Admin/Organization'
import Slides from '../Admin/Slides'
import Users from '../Admin/Users'
import Members from '../Admin/Members'

import { routes } from '../../Config/routes'

const AdminRoutes = () => {
	return (
		<Routes>
			<Route path={routes.home} element={<Admin />} />
			<Route path={routes.admin.news} element={<AdminNews />} />
			<Route path={routes.admin.activities} element={<Activities />} />
			<Route path={routes.admin.categories} element={<Categories />} />
			<Route path={routes.admin.testimonials} element={<AdminTestimonials />} />
			<Route path={routes.admin.organization} element={<Organization />} />
			<Route path={routes.admin.slides} element={<Slides />} />
			<Route path={routes.admin.users} element={<Users />} />
			<Route path={routes.admin.members} element={<Members />} />
			<Route path={routes.admin.newMember} element={<MembersForm />} />
			<Route path={routes.admin.newNotice} element={<NewsForm />} />
			<Route path={routes.admin.contacts} element={<Contacts />} />
		</Routes>
	)
}

export default AdminRoutes
