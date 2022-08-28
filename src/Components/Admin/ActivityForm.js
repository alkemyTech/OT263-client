import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const ActivityForm = () => {
	const [value, setValue] = useState('')

	return (
		<div className='hero is-fullheight'>
			<div className='hero-body columns is-centered'>
				<div className='column is-half-tablet is-full-mobile'>
					<h1 className='title is-size-4 is-size-6-mobile'>
						Using CKEditor 5 build in React
					</h1>
					<ReactQuill theme='snow' value={value} onChange={setValue} />
				</div>
			</div>
		</div>
	)
}

export default ActivityForm
