import useAxios from '../../../hooks/useAxios'
import { useState } from 'react'
import Form from '../ActivityForm/Form'
import Input from '../ActivityForm/Input'
import Button from '../ActivityForm/Button'
import { post } from '../../../Services/apiService'

const URI = 'http://localhost:3001/categories'

export default function FormModal({ showForm, onClose }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const { fetchData, error, response } = useAxios({
    method: 'post',
    headers: JSON.stringify({
      'Content-Type': 'application/json',
      Accept: '*/*',
      Authorization: 'Bearer token' // TODO: add user token
    }),
    url: 'http://localhost:3001/testimonials',
    body: JSON.stringify({
      name,
      description
    }),
    autoRun: false
  })

  const handleSubmit = e => {
    e.preventDefault()
    post(URI, { name, description })

    if (error) return

    // TODO: dispatch
    console.log(response)

    setName('')
    setDescription('')
  }

  return (
    <div className={`modal ${showForm ? 'is-active' : ''}`}>
      <div className='modal-background'></div>
      <div className='modal-content has-background-white'>
        <Form onSubmit={handleSubmit} title='Categoria'>
          <Input
            label={'Nombre'}
            placeholder={'Agregá tu nombre completo'}
            onChange={setName}
            value={name}
          />

          <Input
            label={'Descripción'}
            placeholder={'Agregá la descripción'}
            onChange={setDescription}
            value={description}
          />
          <Button text={'Guardar'} />
        </Form>
      </div>
      <button onClick={onClose} className='modal-close is-large' aria-label='close'></button>
    </div>
  )
}
