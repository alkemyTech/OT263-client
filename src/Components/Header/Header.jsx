import React from 'react'
import logo from './Group-33.png'
import { routes } from '../../Config/routes'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteLogedUser, selectLoges } from '../../features/login/logedSlice';

const Header =()=> {
    const dispatch = useDispatch();
    const user = useSelector(selectLoges);    
    const isAdmin = user?.roleId === 1;
    
    const toggleBurger = () => {
        let burgerIcon = document.getElementById('burger');
        let dropMenu = document.getElementById('navMenu');
        burgerIcon.classList.toggle('is-active');
        dropMenu.classList.toggle('is-active');
      };
    
    const handleLogOut = () => {
        localStorage.removeItem("token");
        dispatch(deleteLogedUser());
    };

  return (
    <nav
      className='navbar has-navbar-fixed-top box has-shadow py-3 has-shadow has-text-weight-medium has-text-black'
      role='navigation'
    >
      <div className='navbar-brand'>
        <NavLink
          to={routes.home}
          className='navbar-item'
          style={{
            width: '150px',
            background: `url(${logo})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        ></NavLink>
        <button
          id='burger'
          className={`navbar-burger burger`}
          data-target='navMenu'
          aria-label='menu'
          aria-expanded='false'
          onClick={toggleBurger}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div id='navMenu' className='navbar-menu'>
        <div className='navbar-end'>
          <NavLink
            to={routes.home}
            className={({ isActive }) =>
              `navbar-item has-text-black ${isActive ? 'has-text-weight-bold' : ''}`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to={routes.about}
            className={({ isActive }) =>
              `navbar-item has-text-black ${isActive ? 'has-text-weight-bold' : ''}`
            }
          >
            Nosotros
          </NavLink>
          <NavLink
            to={routes.news}
            className={({ isActive }) =>
              `navbar-item has-text-black ${isActive ? 'has-text-weight-bold' : ''}`
            }
          >
            {' '}
            Novedades
          </NavLink>
          <NavLink
            to={routes.testimonials}
            className={({ isActive }) =>
              `navbar-item has-text-black ${isActive ? 'has-text-weight-bold' : ''}`
            }
          >
            Testimonios
          </NavLink>
          <NavLink
            to={routes.contact}
            className={({ isActive }) =>
              `navbar-item has-text-black ${isActive ? 'has-text-weight-bold' : ''}`
            }
          >
            Contacto
          </NavLink>
          <NavLink
            to={routes.getInvolved}
            className={({ isActive }) =>
              `navbar-item has-text-black ${isActive ? 'has-text-weight-bold' : ''}`
            }
          >
            Contribuye
          </NavLink>
          {isAdmin && (
            <NavLink
              to={routes.admin.root}
              className={({ isActive }) =>
                `navbar-item has-text-black ${isActive ? 'has-text-weight-bold' : ''}`
              }
            >
              Backoffice
            </NavLink>
          )}
          {user && (
            <NavLink
              to={routes.profile}
              className={({ isActive }) =>
                `navbar-item has-text-black ${isActive ? 'has-text-weight-bold' : ''}`
              }
            >
              Mi Perfil
            </NavLink>
          )}
          {user ? (
            <div className='buttons'>
              <button
                className='button is-rounded has-text-weight-medium mx-2'
                style={{ backgroundColor: '#FF0000', color: 'white', border: 'none' }}
                onClick={handleLogOut}
              >
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <div className='buttons'>
              <NavLink
                to={routes.login}
                className='button is-active is-rounded has-text-weight-medium mx-2'
              >
                Log in
              </NavLink>

              <NavLink
                to={routes.signup}
                className='button is-rounded has-text-weight-medium mx-2'
                style={{ backgroundColor: '#FF0000', color: 'white', border: 'none' }}
              >
                Registrate
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
