import React, { useState, useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectLoges } from '../../features/login/logedSlice'

import Home from '../../Pages/Home'
import About from '../../Pages/About'
import Contact from '../../Pages/Contact'
import GetInvolved from '../../Pages/GetInvolved'
import Login from '../../Pages/Login'
import Signup from '../../Pages/Signup'
import AdminRoutes from './AdminRoutes'
import Activity from '../Activities/Activity'

import { routes } from '../../Config/routes'
import Profile from '../../Pages/Profile'
import NewsDetail from '../News/NewsDetail'
import Testimonials from '../Testimonials/Testimonials'
import News from '../News/News'

const AppRoutes = () => {
  const [isAdmin, setIsAdmin] = useState(false)

  const userLoged = useSelector(selectLoges)
  useEffect(() => {
    setIsAdmin(userLoged?.roleId === 1)
  }, [userLoged?.roleId])

  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.about} element={<About />} />
      <Route path={routes.news}>
        <Route index element={<News />} />
        <Route path=':id' element={<NewsDetail />} />
      </Route>
      <Route path={`${routes.activities}/:id`} element={<Activity />} />
      <Route path={routes.testimonials} element={<Testimonials />} />

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
