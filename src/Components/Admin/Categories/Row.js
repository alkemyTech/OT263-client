import { useState, useEffect } from 'react'
import RichTextInput from '../Common/RichTextInput'
import { IoIosSave } from 'react-icons/io'
import { GrEdit } from 'react-icons/gr'

import Modal from './Modal'
import DeleteButton from '../../Buttons/DeleteButton'


export default function Row({ index, data, onChange, onDelete, onSubmit, isNew = false }) {
	const [editable, setEditable] = useState(isNew)
	const [showModal, setShowModal] = useState(false)
	const toggleClass = editable ? 'has-background-primary-light' : ''
	//const [error, setError] = useState({ name: '', message: '' })

	useEffect(() => {
		setEditable(false)
	}, [data])

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
						<RichTextInput
							className={toggleClass}
							value={data.description}
							onChange={value => onChange(index, 'description', value)}
						/>
					) : (
						<div
							className='static-text'
							dangerouslySetInnerHTML={{ __html: editable ? '' : data.description }}
						></div>
					)}
				</td>
				<td className={toggleClass}>
					<div className='buttons has-addons is-flex is-flex-wrap-nowrap'>
						<button
							//disabled={(editable && !data.name) || !data.message || data.message === '<p><br></p>'}
							className='button'
							onClick={() => {
								if (editable) onSubmit(index)
								setEditable(!editable)
							}}
						>
							<span className='icon'>{editable ? <IoIosSave /> : <GrEdit />}</span>
						</button>
						<DeleteButton handleDelete={() => onDelete(data.id)} />
					</div>
				</td>
				<td hidden={!showModal}>
					<Modal show={showModal} onClick={() => setShowModal(false)} imgUrl={data.image} />
				</td>
			</tr>
		</>
	)
}