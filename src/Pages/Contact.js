import ContactForm from '../Components/Contact/ContactForm'
import '../Components/Contact/ContactStyles.css'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'
import { routes } from '../Config/routes'

function Contact() {
  return (
    <Fade>
      <div className='container is-clipped mt-5 hero is-large'>
        <div>
          <h2 className='title is-1 has-text-black has-text-weight-bold has-text-centered my-6 is-size-2-mobile'>
            ¡Contacte con nosotros!
          </h2>
        </div>

        <div className='container'>
          <div className='columns is-variable is-1-mobile is-2-tablet is-reverse'>
            <div className='is-flex is-justify-content-center is-align-content-center is-fullheight text-container has-text-black'>
              <p className='title is-4 has-text-black'>¡Muchas Gracias!</p>
              <p className='is-fullheight has-text-black'>
                Responderemos a tu consulta a la mayor brevedad posible.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>

        <div className='buttons box is-flex is-flex-direction-column is-align-items-start'>
          <span
            className='button box has-text-weight-bold my-3 is-large is-responsive'
            style={{ border: '1px solid black', borderRadius: '1.5rem' }}
          >
            <Link to={routes.home} style={{ color: 'black' }}>
              Ir al inicio
            </Link>
          </span>
        </div>
      </div>
    </Fade>
  )
}

export default Contact
