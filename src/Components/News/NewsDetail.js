import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

import NotFound from '../../Pages/NotFound'
import Loader from '../Loader/Loader'
import useAxios from '../../hooks/useAxios'

import { routes } from '../../Config/routes'

import './NewsDetail.css'

const NewsDetail = () => {
  const { id } = useParams()
  const { loading, error, response } = useAxios({ url: `http://localhost:3001/news/${id}` })

  return loading ? (
    <div className='hero is-large'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <Loader />
        </div>
      </div>
    </div>
  ) : error ? (
    <NotFound />
  ) : (
    <Fade>
      <div className='news-detail-container'>
        <h1 className='news-detail-title has-text-black'>{response.data.name}</h1>
        <div
          className='news-detail-image'
          style={{
            background: `url(${response.data.image})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <p className='news-detail-body has-text-black'>{response.data.content}</p>
      </div>
      <div className='buttons box is-flex is-flex-direction-column is-align-items-start is-shadowless'>
        <span
          className='button box has-text-weight-bold my-3 is-large is-responsive'
          style={{ border: '1px solid black', borderRadius: '1.5rem' }}
        >
          <Link to={routes.news} style={{ color: 'black' }}>
            Ir a Novedades
          </Link>
        </span>
      </div>
    </Fade>
  )
}

export default NewsDetail
