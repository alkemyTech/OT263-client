import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Fade from 'react-reveal/Fade';

import { routes } from '../Config/routes';

import 'bulma/css/bulma.min.css'
import { useSelector } from 'react-redux'
import { selectLoges } from '../features/login/logedSlice'
import { put } from '../Services/apiService';

const Profile = () => {
    const user = useSelector(selectLoges);
    const navigate = useNavigate();
    const [isEditable, setIsEditable] = useState(false);

	// TODO: get initial values from store
	const formik = useFormik({
		initialValues: {
			firstName: user?.firstName || '',
			lastName: user?.lastName || '',
			email: user?.email || ''			
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
			email: Yup.string().email('Email inválido').required('Campo Obligatorio')
		}),
		onSubmit: values => {
			//if (isEditable) return
			put(`http://localhost:3001/users/${user.id}`, values)
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
        transition: 'border-bottom 200ms ease-in',
    };

    const handleDeleteAccount = () => {
        // TODO: delete user
        const { value } = formik.getFieldProps();
        navigate(routes.home, { replace: true });
    };

    return (
        <Fade>
            <div className='hero is-fullheight has-background-success-light'>
                <div className='hero-body columns is-centered'>
                    <div className='column is-half-desktop'>
                        <h1 className='title is-hidden-tablet is-size-3 ml-4'>
                            Mis Datos
                        </h1>
                        <form
                            onSubmit={formik.handleSubmit}
                            className='box'
                            id='profileForm'
                        >
                            <div className='field is-grouped is-grouped-right'>
                                <span className='title title-3 is-size-3-tablet is-size-2-desktop mr-auto is-hidden-mobile'>
                                    Mis Datos
                                </span>
                                <button
                                    className='is-rounded is-responsive button is-info mx-2'
                                    type='submit'
                                    form='profileForm'
                                    onClick={() => setIsEditable(!isEditable)}
                                    disabled={
                                        isEditable &&
                                        Object.keys(formik.errors).length
                                    }
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
                                    <label
                                        className='label has-text-warning-dark'
                                        htmlFor='firstName'
                                    >
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
                            {formik.touched.firstName &&
                            formik.errors.firstName ? (
                                <div className='help is-danger'>
                                    {formik.errors.firstName}
                                </div>
                            ) : null}

                            <div className='field'>
                                <div className='control'>
                                    <label
                                        className='label has-text-warning-dark'
                                        htmlFor='lastName'
                                    >
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
                            {formik.touched.lastName &&
                            formik.errors.lastName ? (
                                <div className='help is-danger'>
                                    {formik.errors.lastName}
                                </div>
                            ) : null}

                            <div className='field'>
                                <div className='control'>
                                    <label
                                        className='label has-text-warning-dark'
                                        htmlFor='email'
                                    >
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
                                <div className='help is-danger'>
                                    {formik.errors.email}
                                </div>
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
					</form>
				</div>
			</div>
		</div>
    </Fade>
	)
}

export default Profile
