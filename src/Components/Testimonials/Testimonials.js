import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import useAxios from '../../hooks/useAxios'

import { routes } from '../../Config/routes'

import TestimonialCard from './TestimonialCard'
import NotFound from '../../Pages/NotFound'
import Loader from '../Loader/Loader'

const Testimonials = () => {
  const { error, loading, response } = useAxios({
    url: 'http://localhost:3001/testimonials'
  })

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
      <div className='container is-clipped mt-5'>
        <div>
          <h2 className='title is-1 has-text-black has-text-weight-bold has-text-centered my-6'>
            Testimonios
          </h2>
        </div>
        <div className='columns is-multiline'>
          {response.data.map(({ id, name, content, image }) => (
            <div className='column is-flex is-justify-content-center' key={id}>
              <TestimonialCard name={name} content={content} image={image} key={id} />
            </div>
          ))}
        </div>
        <div className='buttons box is-flex is-flex-direction-column is-align-items-start'>
          <span
            className='button box has-text-weight-bold my-3 is-large is-responsive'
            style={{ background: 'red', color: 'white', borderRadius: '1.5rem' }}
          >
            <Link to={routes.newTestimonial} style={{ color: 'white' }}>
              ¡Agregar mi testimonio!
            </Link>
          </span>
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

export default Testimonials