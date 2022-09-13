import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import CategoryList from './Components/Categories/CategoryList'
import Header from './Components/Header/Header'
import AppRoutes from './Components/Routes/AppRoutes'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header/>
				<AppRoutes />				
			</BrowserRouter>
			<CategoryList/>
		</div>
	)
}

export default App
