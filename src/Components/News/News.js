import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import useAxios from '../../hooks/useAxios'

import { routes } from '../../Config/routes'

import NewCard from './NewCard'
import NotFound from '../../Pages/NotFound'
import Loader from '../Loader/Loader'

const News = () => {
  const { error, loading, response } = useAxios({
    url: 'http://localhost:3001/news'
  })
  console.log(response.data)

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
      <div>
        <div>
          <h2 className='title is-1 has-text-black has-text-weight-bold has-text-centered my-6'>
            Novedades
          </h2>
        </div>
        <div>
          <div className='columns is-multiline is-justify-content-center'>
            {response.data.map(({ id, name, content, image }) => (
              <div className='column is-5-tablet is-3-fullhd m-2' key={id}>
                <NewCard
                  title={name}
                  content={content}
                  image={image}
                  url={`/news/${id}`}
                  key={id}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='buttons box is-flex is-flex-direction-column is-align-items-start is-shadowless'>
          <span
            className='button box has-text-weight-bold my-3 is-large is-responsive'
            style={{ border: '1px solid black', borderRadius: '1.5rem' }}
          >
            <Link to={routes.home} style={{ color: 'black' }}>
              Ir al inicio
            </Link>
          </span>
        </div>
      </div>
    </Fade>
  )
}

export default News
