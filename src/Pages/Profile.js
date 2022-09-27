import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Fade from 'react-reveal/Fade';

import { routes } from '../Config/routes'

import 'bulma/css/bulma.min.css'
import { useSelector } from 'react-redux'
import { selectLoges } from '../features/login/logedSlice'

const Profile = () => {
	const user=useSelector(selectLoges)	
	const navigate = useNavigate()
	const [isEditable, setIsEditable] = useState(false)

	// TODO: get initial values from store
	const formik = useFormik({
		initialValues: {
			firstName: user?.firstName || '',
			lastName: user?.lastName || '',
			email: user?.email || '',
			password: user?.password || ''
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
			if (isEditable) return

			// TODO: update user
			console.log(JSON.stringify(values, null, 2))
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

	const handleDeleteAccount = () => {
		// TODO: delete user
		const { value } = formik.getFieldProps()
		console.log(value)
		navigate(routes.home, { replace: true })
	}

	return (
		<Fade>
			<ProfileForm user={user} />
		</Fade>
	);
};

<<<<<<< HEAD
export default Profile;
=======
						<div className='field'>
							<div className='control'>
								<label className='label has-text-warning-dark' htmlFor='firstName'>
									Nombre
								</label>
								<input
									placeholder={user.firstName}
									id='firstName'
									type='text'
									className='input is-large is-size-6-mobile'
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
								<label className='label has-text-warning-dark' htmlFor='lastName'>
									Apellido
								</label>
								<input
									placeholder={user.lastName}
									id='lastName'
									type='text'
									{...formik.getFieldProps('lastName')}
									className='input is-large is-size-6-mobile'
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
								<label className='label has-text-warning-dark' htmlFor='email'>
									Email
								</label>
								<input
									placeholder={user.email}
									id='email'
									type='email'
									{...formik.getFieldProps('email')}
									className='input is-large is-size-6-mobile'
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
								<label className='label has-text-warning-dark' htmlFor='password'>
									Contraseña
								</label>

								<input
									id='password'
									type='password'
									{...formik.getFieldProps('password')}
									className='input is-large is-size-6-mobile'
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
		</div>
    </Fade>
	)
}

export default Profile
>>>>>>> 27e2c4e2f77167ba5f432b57dc3bc64bea91a990
