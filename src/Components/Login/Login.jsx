import 'bulma/css/bulma.min.css';
import LoginFooter from './LoginFooter';
import LoginForm from './LoginForm';
import image4 from './Rectangle-4.png';

export const Login =()=> {

    return(
        <div className='columns'>
            <div  className='column'>
                <div className="hero is-fullheight-with-navbar">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns is-centered">
                                <div className="column is-10-tablet is-7-desktop is-7-widescreen">
                                    <LoginForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-footer">
                        <LoginFooter/>
                    </div>
                </div>    
            </div>
            <div className='column is-hidden-mobile'>
                <figure className='image' >
                    <img src={image4} width='708' height='820'/>
                </figure>
            </div>
        </div>
    );
}