import React from 'react'
import TableActivities from '../Tables/TableActivities/TableActivities'
import Fade from 'react-reveal/Fade'
import useAxios from '../../hooks/useAxios'
import Loader from '../Loader/Loader'
import NotFound from '../../Pages/NotFound'

const Activities = () => {
  const token = localStorage.getItem('token')
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }
  const { error, loading, response } = useAxios({
    url: 'http://localhost:3001/activities',
    config: { headers: { Authorization: `Bearer ${token}` } }
  })
  console.log(response)

  return loading ? (
    <Loader />
  ) : error ? (
    <NotFound />
  ) : (
    <Fade>
      <TableActivities data={response?.data} />
    </Fade>
  )
}

export default Activities
