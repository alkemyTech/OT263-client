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
import Profile from '../../Pages/Profile'
import ListContainer from '../ListContainer/ListContainer'
import NewsList from '../News/NewsList'
import NewsDetail from '../News/NewsDetail'
import { useSelector } from 'react-redux'
import Testimonials from '../Testimonials/Testimonials'

const AppRoutes = () => {
  const user = useSelector(state => state.user.currentUser)
  const isAdmin = true //user?.roleId === 1

  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.about} element={<About />} />
      <Route path='news'>
        <Route index element={<ListContainer Component={NewsList} endpoint={'/news'} />} />
        <Route path=':id' element={<ListContainer Component={NewsDetail} endpoint={'/news'} />} />
      </Route>
      <Route path={`${routes.activities}/:id`} element={<Activity />} />
      <Route path={routes.testimonials} element={<Testimonials />} />
      <Route
        path={routes.newTestimonial}
        element={user ? <TestimonialForm /> : <Navigate to={routes.login} />}
      />
      <Route path={routes.contact} element={<Contact />} />
      <Route path={routes.getInvolved} element={<GetInvolved />} />
      <Route path={routes.profile} element={user ? <Profile /> : <Navigate to={routes.login} />} />
      <Route path={routes.login} element={!user ? <Login /> : <Navigate to={routes.home} />} />
      <Route path={routes.signup} element={!user ? <Signup /> : <Navigate to={routes.home} />} />
      <Route
        path={routes.admin.root + '/*'}
        element={isAdmin ? <AdminRoutes /> : <Navigate to={user ? routes.home : routes.login} />}
      />
      <Route path='*' element={<Navigate to={routes.home} />} />
    </Routes>
  )
}

export default AppRoutes
