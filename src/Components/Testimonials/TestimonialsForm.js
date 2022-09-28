import React, { useState } from 'react'
import '../FormStyles.css'

const TestimonialForm = () => {
	const [initialValues, setInitialValues] = useState({
		name: '',
		description: ''
	})

	const handleChange = e => {
		if (e.target.name === 'name') {
			setInitialValues({ ...initialValues, name: e.target.value })
		}
		if (e.target.name === 'description') {
			setInitialValues({ ...initialValues, description: e.target.value })
		}
	}

	const handleSubmit = e => {
		e.preventDefault()
	}

	return (
		<form className='form-container' onSubmit={handleSubmit}>
			<h1 className='title is-4'>Deja tu Testimonio</h1>
			<input
				className='input-field'
				type='text'
				name='name'
				value={initialValues.name}
				onChange={handleChange}
				placeholder='Titulo'
			></input>
			<textarea
				style={{height:"15rem"}}
				className='input-field'
				type='text'
				name='description'
				value={initialValues.description}
				onChange={handleChange}
				placeholder='Descripción'
			></textarea>
			<button className='submit-btn' type='submit'>
				Send
			</button>
		</form>
	)
}

export default TestimonialForm
