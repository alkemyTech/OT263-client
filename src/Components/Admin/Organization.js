import React from 'react'
import { FormikProvider, useFormik } from 'formik'
import * as Yup from 'yup'

const Organization = () => {
	const formik = useFormik({
		initialValues: {
			name: '',
			image: ''
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.min(5, 'Debe ser mayor a 5 caracteres')
				.max(50, 'Debe ser menor a 50 caracteres')
				.required('Obligatorio'),
			image: Yup.mixed().required('Obligatorio')
		}),

		onSubmit: values => {
			console.log(JSON.stringify(values, null, 2))
		}
	})

	const hasErrors = field => formik.touched[field] && formik.errors[field]

	console.log(formik)

	return (
		<div className='hero is-fullheight'>
			<div className='hero-body columns is-centered'>
				<div className='column is-10-desktop is-full-mobile'>
					<form onSubmit={formik.handleSubmit} encType='multipart/form-data' className='box'>
						<div className='field'>
							<label className='label'>Nombre</label>
							<input
								className={`input ${hasErrors('name') ? 'is-danger' : ''}`}
								type='text'
								name='name'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.name}
							/>
							{hasErrors('name') ? <p className='help is-danger'>{formik.errors['name']}</p> : null}
						</div>
						<div className='field'>
							<label className='label'>Imagen</label>
							<label htmlFor='image' className='button'>
								Elegí tu imagen
							</label>
							<input
								className={`button ${hasErrors('image') ? 'is-danger' : ''}`}
								style={{ display: 'none' }}
								id='image'
								name='image'
								type='file'
								accept='image/*'
								onChange={e => formik.setFieldValue('image', e.currentTarget.files[0])}
								onBlur={formik.handleBlur}
							/>
							<div className=''>{formik.values.image?.name}</div>
							{hasErrors('image') ? (
								<p className='help is-danger'>{formik.errors['image']}</p>
							) : null}
						</div>
						<div className='field'>
							<div className='field-label'></div>
							<div className='field-body'>
								<div className='field'>
									<div className='control is-expanded has-text-right'>
										<button className='button  is-link' type='submit'>
											Guardar
										</button>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Organization
