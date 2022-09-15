import React from 'react'
import ReactQuill from 'react-quill'

const modules = {
	toolbar: [
		[{ header: '1' }, { header: '2' }],
		['bold', 'italic', 'underline'],
		[{ list: 'ordered' }, { list: 'bullet' }],
		['link', 'image'],
		['clean']
	],
	clipboard: {
		matchVisual: false
	}
}

const formats = [
	'header',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'list',
	'bullet',
	'link',
	'image'
]

const RichTextInput = ({ className, value, onChange, error = '' }) => {
	return (
		<>
			<ReactQuill
				className={className}
				value={value}
				onChange={onChange}
				theme='snow'
				modules={modules}
				formats={formats}
			/>
			{error && <p className='help is-danger'>{error}</p>}
		</>
	)
}

export default RichTextInput
