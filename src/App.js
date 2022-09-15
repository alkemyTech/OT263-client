import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import AppRoutes from './Components/Routes/AppRoutes'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header/>
				<AppRoutes />
				<Footer />
			</BrowserRouter>
			
		</div>
	)
}

export default App
