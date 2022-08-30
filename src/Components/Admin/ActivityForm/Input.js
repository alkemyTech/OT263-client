import React from 'react'

const Input = ({ label, placeholder, value, onChange }) => {
	return (
		<div className='field'>
			<div className='field-label is-normal mb-2'>
				<label className='label has-text-left'>{label}</label>
			</div>
			<div className='field-body'>
				<div className='field'>
					<p className='control is-expanded'>
						<input
							id='title'
							name='title'
							className='input'
							placeholder={placeholder}
							value={value}
							onChange={onChange}
						></input>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Input
