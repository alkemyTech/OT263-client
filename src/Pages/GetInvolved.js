import React from 'react'
import Fade from 'react-reveal/Fade'
import { routes } from '../Config/routes'
import { Link } from 'react-router-dom'

const GetInvolved = () => {
  return (
    <Fade>
      <section
        className='hero is-link is-fullheight-with-navbar'
        style={{
          background: `url(${'https://images.unsplash.com/photo-1641185806896-642e2e7970c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          filter: ' brightness(70%)'
        }}
      >
        <div className='hero-body'>
          <div className=''>
            <h2 className='title is-size-1 has-text-danger'>¡Cambiá su Mundo!</h2>
            <h2 className='title'>Podés cambiar el futuro de un niño o una niña hoy.</h2>
            <div className='buttons is-flex is-flex-direction-column is-align-items-start'>
              <span
                className='button box has-text-weight-bold my-3 is-medium is-responsive is-danger '
                style={{ color: 'white', borderRadius: '1rem' }}
              >
                <Link to={routes.contact} style={{ color: 'white' }}>
                  Contacto
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  )
}

export default GetInvolved
