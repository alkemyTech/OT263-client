import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'

import { GrEdit } from 'react-icons/gr'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { IoIosSave } from 'react-icons/io'
import { BsCardImage } from 'react-icons/bs'
import { MdOutlineImageNotSupported } from 'react-icons/md'
import { ImFolderUpload } from 'react-icons/im'
import { VscNewFile } from 'react-icons/vsc'

import './Testimonials.css'
import 'react-quill/dist/quill.snow.css'

function Testimonials() {
	const [data, setData] = useState(mockData())
	const [showForm, setShowForm] = useState(false)

	const handleChange = (index, name, value) => {
		const newData = [...data]

		const newRow = data[index]
		newRow[name] = value
		newData[index] = newRow

		setData(newData)
	}

	const handleDelete = e => {
		const { index } = e.currentTarget.dataset
		const newData = data.filter((val, i) => i !== Number(index))

		setData(newData)
	}

	const handleSubmit = index => {
		console.log('PUT htttp://localhost:3000/testimonials/' + index)
		console.log('data:', JSON.stringify(data[index]))
		// TODO: dispatch
	}

	return (
		<div className='table-container'>
			<table className='table is-fullwidth'>
				<Header onClick={() => setShowForm(true)} />
				<tbody>
					{data?.map((row, index) => (
						<Row
							key={index}
							index={index}
							data={row}
							onChange={handleChange}
							onDelete={handleDelete}
							onSubmit={handleSubmit}
						/>
					))}
				</tbody>
			</table>
			<FormModal showForm={showForm} onClose={() => setShowForm(false)} />
		</div>
	)
}

function Row({ index, data, onChange, onDelete, onSubmit, isNew = false }) {
	const [editable, setEditable] = useState(isNew)
	const [showModal, setShowModal] = useState(false)
	const toggleClass = editable ? 'has-background-primary-light' : ''

	useEffect(() => {
		setEditable(false)
	}, [data])

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
		<>
			<tr key={index}>
				<th className={toggleClass}>{index + 1}</th>
				<td className={toggleClass}>
					{editable ? (
						<input
							data-index={index}
							onChange={e => onChange(index, 'name', e.target.value)}
							type='text'
							value={data?.name}
							className={`${toggleClass} input`}
						></input>
					) : (
						data.name
					)}
				</td>
				<td className={toggleClass}>
					{editable ? (
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
								onChange={e => onChange(index, 'image', e.target.files)}
							/>
						</>
					) : (
						<abbr title='Mostrar Imagen' style={{ textDecoration: 'none' }}>
							<span
								className='icon'
								onClick={() => setShowModal(true)}
								style={{ cursor: 'pointer' }}
							>
								{data.image ? <BsCardImage /> : <MdOutlineImageNotSupported />}
							</span>
						</abbr>
					)}
				</td>
				<td className={toggleClass}>
					{editable ? (
						<ReactQuill
							theme='snow'
							className={toggleClass}
							value={data.message}
							onChange={value => onChange(index, 'message', value)}
							modules={modules}
							formats={formats}
						/>
					) : (
						<div
							className='static-text'
							dangerouslySetInnerHTML={{ __html: editable ? '' : data.message }}
						></div>
					)}
				</td>
				<td className={toggleClass}>
					<div className='buttons has-addons is-flex is-flex-wrap-nowrap'>
						<button
							className='button'
							onClick={() => {
								if (editable) onSubmit(index)
								setEditable(!editable)
							}}
						>
							<span className='icon'>{editable ? <IoIosSave /> : <GrEdit />}</span>
						</button>
						<button data-index={index} className='button' onClick={onDelete}>
							<span className='icon'>
								<RiDeleteBin5Line />
							</span>
						</button>
					</div>
				</td>
			</tr>
			<Modal show={showModal} onClick={() => setShowModal(false)} imgUrl={data.image} />
		</>
	)
}

function FormModal({ showForm, onClose }) {
	return (
		<div className={`modal ${showForm ? 'is-active' : ''}`}>
			<div className='modal-background'></div>
			<div className='modal-content'>
				<div className='field'>
					<label className='label'>Name</label>
					<div className='control'>
						<input className='input' type='text' placeholder='Text input' />
					</div>
				</div>
			</div>
			<button className='modal-close is-large' aria-label='close' onClick={onClose}></button>
		</div>
	)
}

function Modal({ show, onClick, imgUrl }) {
	return (
		<div className={`modal ${show ? 'is-active' : ''}`}>
			<div className='modal-background'></div>
			<div className='modal-content'>
				<p className='image is-4by3'>
					<img src={imgUrl} alt='' />
				</p>
			</div>
			<button className='modal-close is-large' aria-label='close' onClick={onClick}></button>
		</div>
	)
}

function Header({ onClick }) {
	return (
		<thead>
			<tr>
				<th>
					<abbr title='Número'>N°</abbr>
				</th>
				<th>Nombre</th>
				<th>Imagen</th>
				<th>Mensaje</th>
				<th>
					<div className='buttons has-addons is-flex is-flex-wrap-nowrap'>
						<button className='button' onClick={onClick}>
							<span className='icon'>
								<VscNewFile />{' '}
							</span>
							<span>Nuevo</span>
						</button>
					</div>
				</th>
			</tr>
		</thead>
	)
}

// TODO: delete
function mockData() {
	return [
		{
			name: 'Moana Larsen',
			image:
				'https://images.unsplash.com/photo-1508779544523-dd1b27685be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
			message:
				'magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam'
		},
		{
			name: 'Bertha Hebert',
			image:
				'https://images.unsplash.com/photo-1535090042247-30387644aec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1375&q=80',
			message:
				'purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum.'
		},
		{
			name: 'Elijah Gallegos',
			image:
				'https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

			message:
				'tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper'
		},
		{
			name: 'Amery Dickson',
			image:
				'https://images.unsplash.com/photo-1508779544523-dd1b27685be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
			message:
				'lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci'
		},
		{
			name: 'Brynne Anderson',
			image:
				'https://images.unsplash.com/photo-1508779544523-dd1b27685be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
			message:
				'orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis'
		},
		{
			name: 'Bryan Hebert',
			image:
				'https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

			message:
				'purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum.'
		},
		{
			name: 'John Smith',
			image:
				'https://images.unsplash.com/photo-1535090042247-30387644aec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1375&q=80',
			message:
				'purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum.'
		},
		{
			name: 'Lyan Scobedo',
			image:
				'https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
			message:
				'purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum.'
		}
	]
}

export default Testimonials
