import React, { useState } from 'react'
import ReactQuill from 'react-quill'

import 'react-quill/dist/quill.snow.css'
import './AdcivityForm.css'

const ActivityForm = () => {
	const [value, setValue] = useState('')

	const handleSubmit = e => console.log(e)

	return (
		<div className='hero is-fullheight'>
			<div className='hero-body columns is-centered'>
				<div className='column is-8-tablet is-half-desktop is-full-mobile'>
					<form onSubmit={handleSubmit} className='box'>
						<div class='field is-horizontal'>
							<div class='field-label is-normal'>
								<label class='label'>Nombre</label>
							</div>
							<div className='field-body'>
								<p className='control has-icons-right'>
									<input
										id='title'
										name='title'
										className='title is-size-6'
										placeholder='Using CKEditor 5 build in React'
									></input>
								</p>
							</div>
						</div>
						<div class='field is-horizontal'>
							<div class='field-label is-normal'>
								<label class='label'>Descripción</label>
							</div>
							<div className='field-body'>
								<p className='control'>
									<ReactQuill theme='snow' value={value} onChange={setValue} />
								</p>
							</div>
						</div>
						<div class='control'>
							<button class='button is-primary'>Submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ActivityForm
