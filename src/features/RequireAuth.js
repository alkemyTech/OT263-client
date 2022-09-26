import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

import React from 'react'

const RequireAuth = ({allowedRoles}) => {
    const user = useSelector((state) => state.user.currentUser);
    const location = useLocation();
    console.log(user)
    try{
    const decodedToken = jwt_decode(user?.token);
    const roles = decodedToken?.roleId
    return (
        allowedRoles?.includes(roles)
        ? <Outlet/>
        : user
            ? <Navigate to='/' state={{from: location}} replace />
            : <Navigate to='/ingreso' state={{from: location}} replace />
        
      );
    } catch(err){
      <Navigate to='/' state={{from: location}} replace />
    }
    
}

export default RequireAuth