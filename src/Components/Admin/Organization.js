import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Fade from 'react-reveal/Fade';
// import useAxios from '../../app/hooks/useAxios'

const Organization = () => {
	const formik = useFormik({
		initialValues: {
			name: 'Somos Más',
			image:
				'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
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

	// TODO: fetchData on submit
	// const { fetchData, response, error, liading } = useAxios({
	// 	url: 'http://localhost:3001/organization/1',
	// 	method: 'put',
	// 	body: formik.values,
	// 	autorun: false
	// })

	const [imgUrl, setImgUrl] = useState(formik.values.image)

	const hasErrors = field => formik.touched[field] && formik.errors[field]

	useEffect(() => {
		const getImgData = file => {
			if (typeof file !== 'object') return file
			const fileUrl = URL.createObjectURL(file)
			setImgUrl(fileUrl)
		}
		getImgData(formik.values.image)
	}, [formik.values.image, formik])

	return (
    <Fade>
		<div className='hero is-fullheight'>
			<div className='hero-body columns is-centered'>
				<div className='column is-10-desktop is-full-mobile'>
					<h1 className='title'>Editar Organización</h1>
					<form onSubmit={formik.handleSubmit} encType='multipart/form-data' className='box'>
						<div
							className='field'
							style={{
								height: '33vh',
								background: `url(${imgUrl})`,
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center center'
							}}
						></div>
						<div className='field'>
							<label className='label' htmlFor='name'>
								Nombre
							</label>
							<input
								className={`input ${hasErrors('name') ? 'is-danger' : ''}`}
								type='text'
								id='name'
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
								onChange={e => {
									formik.setFieldValue('image', e.currentTarget.files[0])
									if (!formik.touched.image) formik.setTouched({ ...formik.touched, image: true })
								}}
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
										<button
											className='button  is-link'
											type='submit'
											disabled={
												!Object.keys(formik.touched).length ||
												hasErrors('name') ||
												hasErrors('image')
											}
										>
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
    </Fade>
	)
}

export default Organization
