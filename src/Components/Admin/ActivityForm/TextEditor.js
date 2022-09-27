import React from 'react'
import ReactQuill from 'react-quill'

import 'react-quill/dist/quill.snow.css'
import './TextEditor.css'

const TextEditor = ({ placeholder, value, onChange, label="Descripción", error}) => {
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
			<div className='field-label is-normal mb-1 mt-3'>
				<label className='label has-text-left ml-1'>{label}</label>
			</div>
			<div className='field-body' style={{border: `1px solid ${error ? '#ef2e55' : 'rgb(219,219,219)'}`, borderRadius: '7px'}}>
				<div className='field'>
					<div className='control is-expanded'></div>
					<ReactQuill
						theme='snow'
						placeholder={placeholder}
						value={value}
						onChange={onChange}
						modules={modules}
						formats={formats}
						style={{width: '100%'}}
					/>
				</div>
			</div>
			<p className='help is-danger'>{error}</p>
		</div>
	)
}

export default TextEditor
