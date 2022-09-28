import useAxios from '../../../hooks/useAxios'
import { useState } from 'react'
import Form from '../ActivityForm/Form'
import Input from '../ActivityForm/Input'
import TextEditor from '../ActivityForm/TextEditor'
import Button from '../ActivityForm/Button'
import ImageInput from '../Common/ImageInput'
import { post } from '../../../Services/apiService'
import { useNavigate } from 'react-router-dom'

import { routes } from '../../../Config/routes'

const URI = 'http://localhost:3001/news'

export default function FormModal({ showForm, onClose }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [content, setContent] = useState('')
  const navigate = useNavigate()

  const { fetchData, error, response } = useAxios({
    method: 'post',
    headers: JSON.stringify({
      'Content-Type': 'application/json',
      Accept: '*/*',
      Authorization: 'Bearer token' // TODO: add user token
    }),
    url: 'http://localhost:3001/news',
    body: JSON.stringify({
      name,
      image,
      content
    }),
    autoRun: false
  })

  const handleSubmit = e => {
    e.preventDefault()

    post(URI, { name, content })
    if (error) return

    setName('')
    setImage('')
    setContent('')

    navigate(routes.admin.root)
  }

  return (
    <div className={`modal ${showForm ? 'is-active' : ''}`}>
      <div className='modal-background'></div>
      <div className='modal-content has-background-white'>
        <Form onSubmit={handleSubmit} title='Novedad'>
          <Input
            label={'Nombre'}
            placeholder={'Agregá tu nombre completo'}
            onChange={setName}
            value={name}
          />
          <ImageInput onChange={e => setImage(e.target.files)} label='Imagen' />
          <TextEditor
            label={'Descripción'}
            placeholder={'Agregá la descripción'}
            onChange={setContent}
            value={content}
          />
          <Button text={'Guardar'} disabled={!name || !content || content === '<p><br></p>'} />
        </Form>
      </div>
      <button onClick={onClose} className='modal-close is-large' aria-label='close'></button>
    </div>
  )
}
