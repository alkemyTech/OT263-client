import useAxios from '../../../app/hooks/useAxios'
import { useState } from 'react'
import Form from '../ActivityForm/Form'
import Input from '../ActivityForm/Input'
import TextEditor from '../ActivityForm/TextEditor'
import Button from '../ActivityForm/Button'
import ImageInput from '../Common/ImageInput'
import { post } from '../../../Services/apiService'

const URI='http://localhost:3001/testimonials'

export default function FormModal({ showForm, onClose }) {
	const [name, setName] = useState('')
	const [image, setImage] = useState('')
	const [content, setContent] = useState('')

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
			image,
			content
		}),
		autoRun: false
	})

	const handleSubmit = e => {
		e.preventDefault()
		// fetchData()
		post(URI, {name, content, image})
		if (error) return

		// TODO: dispatch
		console.log(response)

		setName('')
		setImage('')
		setContent('')
	}

	return (
		<div className={`modal ${showForm ? 'is-active' : ''}`}>
			<div className='modal-background'></div>
			<div className='modal-content has-background-white'>
				<Form onSubmit={handleSubmit} title='Testimonio'>
					<Input
						label={'Nombre'}
						placeholder={'Agregá tu nombre completo'}
						onChange={setName}
						value={name}
					/>
					<ImageInput onChange={e=>setImage(e.target.files[0].name)} label='Imagen' />
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