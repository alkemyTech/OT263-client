import React, { useEffect, useState } from 'react'
import './Footer.css'
import { routes } from '../../Config/routes'
import { Link } from 'react-router-dom'
import Logo from '../Common/Logo'
import SocialIcons from './socialIcons'

function Footer() {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      fetch('http://localhost:3001/organizations/1/public')
        .then(res => res.json())
        .then(data => {
          setData(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
    fetchData()
  }, [])

  return (
    <footer
      className='flex flex-col justify-between bg-zinc-400'
      style={{ background: 'rgb(161,161,170)', marginTop: 'auto' }}
    >
      <div
        className='h-16 border-b-4 border-black flex justify-center items-center footer-logo'
        style={{
          height: '5rem',
          borderBottom: '3px solid black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div
          className='relative top-1/2 bg-zinc-400 px-10 logo-container'
          style={{
            position: 'relative',
            top: '50%',
            padding: '0 3rem',
            background: 'rgb(161,161,170)'
          }}
        >
          <Logo />
        </div>
      </div>
      <div
        className='navbar-menu'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '3px solid black',
          height: '9rem',
          background: 'rgb(161,161,170)'
        }}
      >
        <Link
          style={{ background: 'rgb(161,161,170)' }}
          className='navbar-item has-text-black'
          to={routes.home}
        >
          Inicio
        </Link>
        <Link
          style={{ background: 'rgb(161,161,170)' }}
          className='navbar-item has-text-black'
          to={routes.about}
        >
          Nosotros
        </Link>
        <Link
          style={{ background: 'rgb(161,161,170)' }}
          className='navbar-item has-text-black'
          to={routes.news}
        >
          {' '}
          Novedades
        </Link>
        <Link
          style={{ background: 'rgb(161,161,170)' }}
          className='navbar-item has-text-black'
          to={routes.testimonials}
        >
          Testimonios
        </Link>
        <Link
          style={{ background: 'rgb(161,161,170)' }}
          className='navbar-item has-text-black'
          to={routes.contact}
        >
          Contacto
        </Link>
        <Link
          style={{ background: 'rgb(161,161,170)' }}
          className='navbar-item has-text-black'
          to={routes.getInvolved}
        >
          Contribuye
        </Link>
      </div>

      <div>
        <div className='h-28 footer-icons'>
          <SocialIcons data={data} />
        </div>
        <div
          className='h-32 text-lg text-center footer-copyright'
          style={{ height: '9rem', fontWeight: '2rem', textAlign: 'center', color: 'black' }}
        >
          <span className='copyright-text has-text-weight-bold'>
            {new Date().getFullYear()} por Alkemy.
          </span>
          <span className='copyright-text'> Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
