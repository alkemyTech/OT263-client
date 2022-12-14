import { useState, useEffect } from 'react'
import axios from 'axios'

const useAxios = ({ url, method = 'get', body = null, autoRun = true }) => {
	const [response, setResponse] = useState(null)
	const [error, setError] = useState('')
	const [loading, setloading] = useState(true)

	const fetchData = () => {
		axios[method](url, JSON.parse(body))
			.then(res => {
				setResponse(res)
			})
			.catch(err => {
				setError(err)
			})
			.finally(() => {
				setloading(false)
			})
	}

	useEffect(() => {
		if (!autoRun) return
		fetchData()
	}, [method, url, body, autoRun])

	return { fetchData, response, error, loading }
}

export default useAxios
