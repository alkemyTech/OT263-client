import { useState, useEffect } from 'react'
import axios from 'axios'

const useAxios = ({ url, method = 'get', body = null, autoRun = true, config = {} }) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState('')
  const [loading, setloading] = useState(true)

  let fetchData

  if (body !== null) {
    fetchData = () => {
      axios[method](url, JSON.parse(body), config)
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
  } else {
    fetchData = () => {
      axios[method](url, config)
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
  }

  useEffect(() => {
    if (!autoRun) return
    fetchData()
  }, [method, url, body, autoRun])

  return { fetchData, response, error, loading }
}

export default useAxios
