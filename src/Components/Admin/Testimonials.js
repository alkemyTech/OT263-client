import React, { useEffect, useState } from 'react'
import { GrEdit } from 'react-icons/gr'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { IoIosSave } from 'react-icons/io'

function Testimonials() {
	const [data, setData] = useState(mockData())

	const handleChange = e => {
		const { index, name } = e.target.dataset
		const newData = [...data]

		const newRow = data[index]
		newRow[name] = e.target.value

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
				<Header />
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
		</div>
	)
}

function Row({ index, data, onChange, onDelete, onSubmit }) {
	const [editable, setEditable] = useState(false)
	const toggleClass = editable ? 'has-background-primary-light has-text-weight-bold' : ''

	useEffect(() => {
		setEditable(false)
	}, [data])

	return (
		<tr key={index}>
			<th className={toggleClass}>{index + 1}</th>
			<td className={toggleClass}>
				{editable ? (
					<input
						data-name='name'
						data-index={index}
						onChange={onChange}
						type='text'
						value={data?.name}
						className={`${toggleClass} input is-primary`}
					></input>
				) : (
					data.name
				)}
			</td>
			<td className={toggleClass}>
				{editable ? (
					<textarea
						data-name='message'
						data-index={index}
						onChange={onChange}
						type='textarea'
						value={data?.message}
						className={`${toggleClass} textarea is-primary`}
					></textarea>
				) : (
					data.message
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
	)
}

function Header() {
	return (
		<thead>
			<tr>
				<th>
					<abbr title='Número'>N°</abbr>
				</th>
				<th>Nombre</th>
				<th>Mensaje</th>
				<th></th>
			</tr>
		</thead>
	)
}

// TODO: delete
function mockData() {
	return [
		{
			name: 'Moana Larsen',
			message:
				'magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam'
		},
		{
			name: 'Bertha Hebert',
			message:
				'purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum.'
		},
		{
			name: 'Elijah Gallegos',
			message:
				'tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper'
		},
		{
			name: 'Amery Dickson',
			message:
				'lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci'
		},
		{
			name: 'Brynne Anderson',
			message:
				'orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis'
		},
		{
			name: 'Bryan Hebert',
			message:
				'purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum.'
		},
		{
			name: 'John Smith',
			message:
				'purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum.'
		},
		{
			name: 'Lyan Scobedo',
			message:
				'purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum.'
		}
	]
}

export default Testimonials
