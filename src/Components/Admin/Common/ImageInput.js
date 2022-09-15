import React, { useState } from 'react'
import { ImFolderUpload } from 'react-icons/im'

function ImageInput({ onChange, label = null }) {
	const [name, setName] = useState('No hay imagen seleccionada')

	const handleChange = e => {
		setName(e.target.files[0].name)
		onChange(e)
	}

	return label ? (
		<div className='field'>
			<div className='field-label is-normal mb-2'>
				<label className='label has-text-left'>{label}</label>
			</div>
			<div className='field-body' style={{ display: 'block' }}>
				<div className='field'>
					<div className='control is-expanded'>
						<div className='file'>
							<label className='file-label'>
								<input className='file-input' type='file' name='resume' onChange={handleChange} />
								<span className='file-cta'>
									<span className='file-icon'>
										<i className='fas fa-upload'></i>
									</span>
									<span className='file-label'>Eelgí tu imagen…</span>
								</span>
								<span className='file-name'>{name}</span>
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	) : (
		<>
			<button className='button has-background-primary-light'>
				<label htmlFor='image' style={{ cursor: 'pointer' }}>
					<span className='icon'>
						<ImFolderUpload />
					</span>
				</label>
			</button>
			<input
				style={{ display: 'none' }}
				id='image'
				type='file'
				className='input'
				accept='image/*'
				onChange={onChange}
			/>
		</>
	)
}

export default ImageInput
