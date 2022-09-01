import 'bulma/css/bulma.min.css';
import logo from './Group-33.png';
import { routes } from '../../Config/routes';

const Header =()=> {
    const toggleBurger = () => {
        let burgerIcon = document.getElementById('burger');
        let dropMenu = document.getElementById('navMenu');
        burgerIcon.classList.toggle('is-active');
        dropMenu.classList.toggle('is-active');
      };

    return(
        <nav className="navbar has-navbar-fixed-top has-shadow" role='navigation'>
            <div className="navbar-brand">
                <a className="navbar-item">
                    <img src={logo} alt="" width="100" height="52" />
                </a>
                <a role="button" id='burger' className="navbar-burger burger" data-target="navMenu" aria-label="menu" aria-expanded="false" onClick={toggleBurger}>
                    <span ></span>
                    <span ></span>
                    <span ></span>
                </a>
            </div>
            <div id="navMenu" className="navbar-menu">
                <div className="navbar-end">
                    <a className="navbar-item" style={{"font-weight":"bold"}} href={routes.home}>Inicio</a>
                    <a className="navbar-item" href={routes.about}>Nosotros</a>
                    <a className="navbar-item" href={routes.news}>Novedades</a>
                    <a className="navbar-item" href={routes.testimonials}>Testimonios</a>
                    <a className="navbar-item" href={routes.contact}>Contacto</a>
                    <a className="navbar-item" href={routes.getInvolved}>Contribuye</a>
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <a className="button is-rounded" href={routes.login}>
                                    <span>Log in</span>
                                </a>
                            </p>
                            <p className="control">
                                <a className="button is-rounded" style={{"background-color":"#FF0000", color:"white"}} href={routes.signup}>
                                    <span>Registrate</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;