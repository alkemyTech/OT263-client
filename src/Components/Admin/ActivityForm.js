import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import Form from './ActivityForm/Form'
import Input from './ActivityForm/Input'
import TextEditor from './ActivityForm/TextEditor'
import Button from './ActivityForm/Button'

const ActivityForm = ({ activity: { id, name, content } }) => {
	const handleSubmit = e => {
		e.preventDefault()
		console.log(e)
	}
	const [value, setValue] = useState(content)

	return (
		<Form onSubmit={handleSubmit} title={'Actividad'}>
			<Input label={'Nombre'} onChange={console.log} value={'Hola'} placeholder={'Chau'} />
			<TextEditor label={'Descripcion'} value={value} onChange={setValue} />
			<Button text={'Guardar'} />
		</Form>
	)
}

ActivityForm.propTypes = {
	activity: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired
	})
}

ActivityForm.defaultProps = {
	activity: {
		id: 0,
		name: 'Nombre de la actividad',
		content: 'Agregá el la descripción de la actividad'
	}
}

export default ActivityForm
