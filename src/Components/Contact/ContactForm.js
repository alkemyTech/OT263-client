import '../FormStyles.css'
import { useState } from 'react'
import { createNewContact } from '../../Services/contact'

function ContactForm() {
  const [error, setError] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = ({ target }) => {
    setContact({ ...contact, [target.name]: target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    Object.keys(contact).forEach(key => {
      if (contact[key] === '') setError({ ...error, [key]: 'Campo Obligatorio' })
    })

    // if (
    //   contact.email !== '' &&
    //   !contact.email.match(
    //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //   )
    // ) {
    //   setError({ ...error, email: 'Email invalido' })
    // }

    let hasErrors = false

    Object.values(error).forEach(v => {
      if (v !== '') hasErrors = true
    })

    if (hasErrors === true) return
    else {
      let result = await createNewContact(contact)
      result ? alert('Consulta enviada con exito') : alert('No se pudo enviar la consulta')

      setContact({
        name: '',
        email: '',
        message: ''
      })
    }
  }

  return (
    <form className='form-container' id='contact-form' name='contact-form' onSubmit={handleSubmit}>
      <input
        className={`input-field`}
        style={{ border: `2px solid ${error.name ? 'red' : 'black'}` }}
        type='text'
        name='name'
        value={contact.name}
        onChange={handleChange}
        placeholder='Nombre y Apellido'
      ></input>
      {error.name && <span className='has-text-danger'>{error.name}</span>}
      <input
        className={`input-field`}
        style={{ border: `1px solid ${error.email ? 'red' : 'black'}` }}
        type='text'
        name='email'
        value={contact.email}
        onChange={handleChange}
        placeholder='Email'
      ></input>
      {error.email && <span className='has-text-danger'>{error.email}</span>}
      <textarea
        className='textarea-field'
        style={{ border: `1px solid ${error.message ? 'red' : 'black'}` }}
        type='text'
        name='message'
        value={contact.message}
        onChange={handleChange}
        placeholder='Escribe tu consulta...'
      ></textarea>
      {error.message && <span className='has-text-danger'>{error.message}</span>}

      <button
        type='submit'
        form='contact-form'
        className='button box has-text-weight-bold my-3 is-large is-responsive'
        style={{ background: 'blue', color: 'white', borderRadius: '1.5rem' }}
      >
        Enviar Consulta
      </button>
    </form>
  )
}

export default ContactForm
