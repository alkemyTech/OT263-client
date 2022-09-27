import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { selectLoges } from '../../features/login/logedSlice'
import React from 'react'



const roleBased = ({allowedRoles}) =>{
  const [role, setRole] = useState(false)
	const userLoged = useSelector(selectLoges)
	useEffect(() => {
		setRole(userLoged?.roleId)
	}, [userLoged?.roleId])

  console.log(role)
  return (
    allowedRoles?.includes(role)
    ? <Outlet/>
    : user
        ? <Navigate to='/' state={{from: location}} replace />
        : <Navigate to='/ingreso' state={{from: location}} replace />
    
  );

}

const loggedUSer = () => {
  const userLoged = useSelector(selectLoges)
  console.log('Entre en función usuario logueado')
  return (
    !userLoged?.id ?
    <Outlet/> : <Navigate to='/' state={{from: location}} replace />
  );

}



const RequireAuth = ({allowedRoles, ifLoggedUser}) => {
  return(
    <>
    {ifLoggedUser && <loggedUSer/>}
    <roleBased allowedRoles={allowedRoles} />
    </>
    
  )
}

export default RequireAuth