import React from 'react'
import { Outlet } from 'react-router-dom'

const Backoffice = () => {
	return (
		<>
			<div>Admin</div>
			<Outlet />
		</>
	)
}

export default Backoffice
