import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import 'bulma/css/bulma.min.css'

const Profile = () => {
	const [isEditable, setIsEditable] = useState(false)

	// TODO: get initial values from store
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: ''
		},
		isSubmitting: isEditable,
		validationSchema: Yup.object({
			firstName: Yup.string()
				.min(2, 'Mínimo 2 caracteres')
				.max(15, 'Máximo 15 caracteres')
				.required('Campo Obligatorio'),
			lastName: Yup.string()
				.min(2, 'Mínimo 2 caracteres')
				.max(15, 'Máximo 15 caracteres')
				.required('Campo Obligatorio'),
			email: Yup.string().email('Email inválido').required('Campo Obligatorio'),
			password: Yup.string().min(5, 'Mínimo 5 caracteres').required('Campo Obligatorio')
		}),
		onSubmit: values => {
			if (!isEditable) return

			console.log(JSON.stringify(values, null, 2))
			// TODO: update user
		}
	})

	const inputStyles = {
		outline: 'none',
		backgroundColor: 'transparent',
		border: 'none',
		borderRadius: 0,
		borderBottom: isEditable ? '2.5px solid #363636' : 'none',
		boxShadow: 'none',
		transition: 'border-bottom 200ms ease-in'
	}

	const handleClick = () => {
		if (isEditable && Object.keys(formik.errors).length) {
			alert('Some errors there!')
			return
		}
		setIsEditable(!isEditable)
	}

	const handleDeleteAccount = () => {
		// TODO: delete user and redirect to home page
		const { value } = formik.getFieldProps()
		console.log(value)
	}

	return (
		<div className='hero is-fullheight'>
			<div className='hero-body'>
				<form
					onSubmit={formik.handleSubmit}
					className='box p-4 py-6 container is-max-desktop'
					id='profileForm'
					style={{
						background:
							'linear-gradient(128deg, rgba(255,255,255,1) 75%, rgba(255,0,0,1) 82%, rgba(250,255,0,1) 90%, rgba(0,56,255,1) 100%)'
					}}
				>
					<div className='field is-grouped is-grouped-right'>
						<span className='title is-size-1-desktop mr-auto is-hidden-mobile'>
							Mis Datos
						</span>
						<button
							className='is-rounded is-responsive button is-info mx-2'
							type={isEditable ? 'submit' : 'button'}
							form='profileForm'
							onClick={handleClick}
							disabled={isEditable && Object.keys(formik.errors).length}
						>
							{isEditable ? 'Guardar' : 'Editar'}
						</button>
						<button
							className='is-rounded is-responsive button is-danger mx-2'
							type='button'
							onClick={handleDeleteAccount}
						>
							Borrar Cuenta
						</button>
					</div>

					<div className='field'>
						<div className='control'>
							<label className='label' htmlFor='firstName'>
								Nombre
							</label>
							<input
								id='firstName'
								type='text'
								className='input is-large has-text-info-dark'
								disabled={!isEditable}
								style={inputStyles}
								{...formik.getFieldProps('firstName')}
							/>
						</div>
					</div>
					{formik.touched.firstName && formik.errors.firstName ? (
						<div className='help is-danger'>{formik.errors.firstName}</div>
					) : null}

					<div className='field'>
						<div className='control'>
							<label className='label' htmlFor='lastName'>
								Apellido
							</label>
							<input
								id='lastName'
								type='text'
								{...formik.getFieldProps('lastName')}
								className='input is-large has-text-info-dark'
								disabled={!isEditable}
								style={inputStyles}
							/>
						</div>
					</div>
					{formik.touched.lastName && formik.errors.lastName ? (
						<div className='help is-danger'>{formik.errors.lastName}</div>
					) : null}

					<div className='field'>
						<div className='control'>
							<label className='label' htmlFor='email'>
								Email
							</label>
							<input
								id='email'
								type='email'
								{...formik.getFieldProps('email')}
								className='input is-large has-text-info-dark'
								disabled={!isEditable}
								style={inputStyles}
							/>
						</div>
					</div>
					{formik.touched.email && formik.errors.email ? (
						<div className='help is-danger'>{formik.errors.email}</div>
					) : null}

					<div className='field'>
						<div className='control'>
							<label className='label' htmlFor='password'>
								Contraseña
							</label>

							<input
								id='password'
								type='password'
								{...formik.getFieldProps('password')}
								className='input is-large has-text-info-dark'
								disabled={!isEditable}
								style={inputStyles}
							/>
						</div>
						{formik.touched.password && formik.errors.password ? (
							<div className='help is-danger'>{formik.errors.password}</div>
						) : null}
					</div>
				</form>
			</div>
		</div>
	)
}

export default Profile
