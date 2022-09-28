import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectLoges } from './login/logedSlice'
import React from 'react'



const RoleBased = ({allowedRoles}) =>{
  const location = useLocation();
	const userLoged = useSelector(selectLoges)
  const role = userLoged?.roleId

  return (
    allowedRoles?.includes(role)
    ? <Outlet/>
    : userLoged?.id
        ? <Navigate to='/' state={{from: location}} replace />
        : <Navigate to='/ingreso' state={{from: location}} replace />
    
  );

}

const LoggedUSer = () => {
  const location = useLocation();
  const userLoged = useSelector(selectLoges)
  return (
    !userLoged?.id ?
    <Outlet/> : <Navigate to='/' state={{from: location}} replace />
  );

}



const RequireAuth = ({allowedRoles, ifLoggedUser}) => {
  return(
    <>
    {ifLoggedUser && <LoggedUSer/>}
    <RoleBased allowedRoles={allowedRoles} />
    </>
    
  )
}

export default RequireAuth