import React from 'react'

const Button = ({ text, disabled }) => {
	return (
		<div className='field'>
			<div className='field-label'></div>
			<div className='field-body'>
				<div className='field'>
					<div className='control is-expanded has-text-right'>
						<button className='button is-info' disabled={disabled}>
							{text}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Button
