import React, { useEffect, useState } from 'react'
import { PropTypes } from 'prop-types'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import Form from './ActivityForm/Form'
import Input from './ActivityForm/Input'
import TextEditor from './ActivityForm/TextEditor'
import Button from './ActivityForm/Button'
import { ToastContainer, notifyDefault } from './ActivityForm/ToastError'

import useAxios from '../../app/hooks/useAxios'

import { routes } from '../../Config/routes'

const ActivityForm = ({ activity: { id, name, content } }) => {
	const navigate = useNavigate()
	const isNewNote = id === 0
	const [newName, setNewName] = useState(name)
	const [newContent, setNewContent] = useState(content)

	const { fetchData, error, response } = useAxios({
		method: isNewNote ? 'post' : 'patch',
		headers: JSON.stringify({
			'Content-Type': 'application/json',
			Accept: '*/*',
			Authorization: 'Bearer token' // TODO: add user token
		}),
		url: `http://localhost:3001/activities/${!isNewNote ? id : ''}`,
		body: JSON.stringify({
			...((isNewNote || name !== newName) && { name: newName }),
			...((isNewNote || content !== newContent) && { content: newContent })
		}),
		autoRun: false
	})

	const handleSubmit = e => {
		e.preventDefault()
		fetchData()

		if (error) return

		setNewName('')
		setNewContent('')
		navigate(routes.admin.activities, { replace: true })
	}

	useEffect(() => {
		notifyDefault()
	}, [])

	return (
		<>
			<Form title={'Actividad'} onSubmit={handleSubmit}>
				<Input
					label={'Nombre'}
					placeholder={'Nombre de la actividad'}
					onChange={setNewName}
					value={newName}
				/>
				<TextEditor
					label={'Descripción'}
					placeholder={'Agregá la descripción de la actividad'}
					onChange={setNewContent}
					value={newContent}
				/>
				<Button
					text={'Guardar'}
					disabled={
						newName === name && (newContent === content || newContent === '<p><br></p>')
					}
				/>
			</Form>
			<ToastContainer />
		</>
	)
}

ActivityForm.propTypes = {
	activity: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		content: PropTypes.string
	})
}

ActivityForm.defaultProps = {
	activity: {
		id: 0,
		name: '',
		content: ''
	}
}

export default ActivityForm
