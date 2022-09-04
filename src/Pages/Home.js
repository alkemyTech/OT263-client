import React from 'react'
import { confirmationAlert, displayAlert } from '../Components/Alert/Alert'

const Home = () => {
	const handleClick = async () => {
		// const confirm = await confirmationAlert()
		// if (!confirm) return

		displayAlert(false)
	}
	return <button onClick={handleClick}>Alert</button>
}

export default Home
