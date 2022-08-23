import ContactForm from "./ContactForm";
import TextContent from "./TextContent";
import './ContactStyles.css'

function Contact() {
    return (
        <div>
            <h1>¡Contacte con nosotros!</h1>
            <div className="contact-container">
                <TextContent />
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact