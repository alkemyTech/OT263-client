import 'bulma/css/bulma.min.css';

const LoginFooter =()=> {

    return(
        <footer className="box is-shadowless">
            <div className="content has-text-centered">
                <p>No tienes una cuenta? <a style={{color:"#FF0000"}} href=''>Registrate</a></p>
            </div>
        </footer>
    );
}

export default LoginFooter;