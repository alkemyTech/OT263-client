import ContactForm from "../Components/Contact/ContactForm";
import TextContent from "../Components/Contact/TextContent";
import '../Components/Contact/ContactStyles.css'

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