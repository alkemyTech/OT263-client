import React from 'react';
import 'bulma/css/bulma.min.css';
import logo from './Group-33.png';
import { routes } from '../../Config/routes';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Header =()=> {
    const user = useSelector(state => state.user.currentUser);
	const isAdmin = user?.roleId === 1

    const toggleBurger = () => {
        let burgerIcon = document.getElementById('burger');
        let dropMenu = document.getElementById('navMenu');
        burgerIcon.classList.toggle('is-active');
        dropMenu.classList.toggle('is-active');
      };
      

    return(
        <nav className="navbar has-navbar-fixed-top has-shadow" role='navigation'>
            <div className="navbar-brand">
                <Link to={routes.home} className="navbar-item">
                    <img src={logo} alt="" width="100" height="52" />
                </Link>
                <button id='burger' className="navbar-burger burger" data-target="navMenu" aria-label="menu" aria-expanded="false" onClick={toggleBurger}>
                    <span ></span>
                    <span ></span>
                    <span ></span>
                </button>
            </div>
            <div id="navMenu" className="navbar-menu">
                <div className="navbar-end">
                    <Link to={routes.home} className="navbar-item" style={{"font-weight":"bold"}} >Inicio</Link>
                    <Link to={routes.about} className="navbar-item" >Nosotros</Link>
                    <Link to={routes.news} className="navbar-item" > Novedades</Link>
                    <Link to={routes.testimonials} className="navbar-item" >Testimonios</Link>
                    <Link to={routes.contact} className="navbar-item" >Contacto</Link>
                    <Link to={routes.getInvolved} className="navbar-item" >Contribuye</Link>
                    {user 
                        ?   isAdmin 
                            ?   <Link to={routes.admin.root} className="navbar-item" >Backoffice</Link>
                            :   <Link to={routes.profile} className="navbar-item" >Mi Perfil</Link> 
                        :   <div className="navbar-item">
                                <div className="field is-grouped">
                                    <p className="control">
                                        <Link to={routes.login} className="button is-rounded" >
                                            <span>Log in</span>
                                        </Link>
                                    </p>
                                    <p className="control">
                                        <Link to={routes.signup} className="button is-rounded" style={{"background-color":"#FF0000", color:"white"}} >
                                            <span>Registrate</span>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Header;