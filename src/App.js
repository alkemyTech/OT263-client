import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header'
import AppRoutes from './Components/Routes/AppRoutes'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header/>
				<AppRoutes />				
			</BrowserRouter>
			
		</div>
	)
}

export default App
