import { useState, useEffect } from 'react'
import axios from 'axios'

const useAxios = ({ url, method, body = null, headers = null, autoRun = true }) => {
	const [response, setResponse] = useState(null)
	const [error, setError] = useState('')
	const [loading, setloading] = useState(true)

	const fetchData = () => {
		axios[method](url, body) //TODO: Agregar la configuración para headers
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
	}, [method, url, body, headers, autoRun])

	return { fetchData, response, error, loading }
}

export default useAxios
