import React from 'react'

const Input = ({ label, placeholder, value, onChange }) => {
	return (
		<div className='field'>
			<div className='field-label is-normal mb-2'>
				<label className='label has-text-left' htmlFor='name'>
					{label}
				</label>
			</div>
			<div className='field-body'>
				<div className='field'>
					<p className='control is-expanded'>
						<input
							id='name'
							name='name'
							placeholder={placeholder}
							className='input'
							value={value}
							onChange={e => onChange(e.target.value)}
						></input>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Input
