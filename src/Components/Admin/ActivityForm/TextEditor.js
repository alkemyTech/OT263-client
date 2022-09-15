import React from 'react'
import ReactQuill from 'react-quill'

import 'react-quill/dist/quill.snow.css'
import './TextEditor.css'

const TextEditor = ({ placeholder, value, onChange, error = '' }) => {
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

	return (
		<div className='field'>
			<div className='field-label is-normal mb-2'>
				<label className='label has-text-left'>Descripción</label>
			</div>
			<div className='field-body'>
				<div className='field'>
					<div className='control is-expanded'></div>
					<ReactQuill
						theme='snow'
						placeholder={placeholder}
						value={value}
						onChange={onChange}
						modules={modules}
						formats={formats}
						className={`${error ? 'is-danger' : ''}`}
					/>
				</div>
			</div>
			<p className='help is-danger'>{error}</p>
		</div>
	)
}

export default TextEditor
