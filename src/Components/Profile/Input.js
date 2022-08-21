import React from 'react'
import { useFormik } from 'formik'

import 'bulma/css/bulma.min.css'

const Input = ({ name, isEditable }) => {
	return (
		<div className='field'>
			<div className='control'>
				<label class='label'>Contraseña</label>
				<input
					id={name}
					type={name}
					{...formik.getFieldProps(name)}
					className='input is-large has-text-link-dark'
					disabled={!isEditable}
					style={{
						outline: 'none',
						backgroundColor: 'transparent',
						border: 'none',
						borderRadius: 0,
						borderBottom: isEditable ? '2.5px solid' : 'none',
						boxShadow: 'none',
						transition: 'border-bottom 200ms ease-in'
					}}
				/>
			</div>
			{formik.touched[name] && formik.errors[name] ? (
				<div className='help is-danger'>{formik.errors[name]}</div>
			) : null}
		</div>
	)
}

export default Input
