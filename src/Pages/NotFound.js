import React from 'react'
import Logo from '../Components/Common/Logo'

const NotFound = () => {
  return (
    <section className='hero is-medium'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <div>
            <Logo />
          </div>
          <p className='title'>Error 404 - No encontramos nada aquí</p>
        </div>
      </div>
    </section>
  )
}

export default NotFound
