import ContactForm from "../Components/Contact/ContactForm";
import TextContent from "../Components/Contact/TextContent";
import '../Components/Contact/ContactStyles.css'
import Fade from 'react-reveal/Fade';

function Contact() {
    return (
      <Fade>
        <div>
            <h1>¡Contacte con nosotros!</h1>
            <div className="contact-container">
                <TextContent />
                <ContactForm />
            </div>
        </div>
      </Fade>
    )
}

export default Contact