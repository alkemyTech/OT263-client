import React from 'react'
import Logo from '../Components/Common/Logo'

const NotFound = () => {
  return (
    <section className='hero is-large'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <div className='is-flex is-justify-content-center is-flex-wrap-wrap'>
            <span>
              <Logo />
            </span>
            <p className='is-size-3 is-size-5-mobile has-text-weight-bold'>
              Error 404 - No encontramos nada aquí
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound
