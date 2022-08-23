import '../FormStyles.css';
import {useState}from 'react'

function ContactForm() {    
    const [error, setError] = useState('')
    const [contact, setContact] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({target}) => {
            setContact({...contact, [target.name]: target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(Object.values(contact).includes('')){
            setError('Todos los campos son obligatorios')
            return
        }
        if (!contact.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            setError("El email debe tener un formato valido")
            return
        }
        console.log(contact)
    }
    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input
                className="input-field"
                type="text"
                name="name"
                value={contact.name}
                onChange={handleChange}
                placeholder="Name"
                required
            >
            </input>
            <input
                className="input-field"
                type="text"
                name="email"
                value={contact.email}
                onChange={handleChange}
                placeholder="Email"
                required
            >
            </input>
            <textarea
                className="textarea-field"
                type="text"
                name="message"
                value={contact.message}
                onChange={handleChange}
                placeholder="Dejanos tus comentearios"
                required
            >
            </textarea>
            <span>{error}</span>
            <button className="submit-btn" type="submit">Enviar consulta</button>
        </form>
    );
}

export default ContactForm