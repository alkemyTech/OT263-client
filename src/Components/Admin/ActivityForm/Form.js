import React from 'react'

const Form = ({ children, onSubmit, title }) => {
	return (
		<div className='hero is-fullheight'>
			<div className='hero-body columns is-centered'>
				<div className='column is-10-desktop is-full-mobile'>
					<form onSubmit={onSubmit} className='box'>
						<label className='label is-large'>{title}</label>
						{children}
					</form>
				</div>
			</div>
		</div>
	)
}

export default Form
