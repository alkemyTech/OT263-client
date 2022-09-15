import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom';
import { routes } from '../../Config/routes';

const LoginFooter =()=> {

    return(
        <footer className="box is-shadowless">
            <div className="content has-text-centered">
                <p>No tienes una cuenta? <Link to={routes.signup} style={{color:"#FF0000"}} >Registrate</Link></p>
            </div>
        </footer>
    );
}

export default LoginFooter;