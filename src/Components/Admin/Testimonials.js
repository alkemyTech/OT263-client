import React, { useState } from 'react'
import { GrEdit } from 'react-icons/gr'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { IoIosSave } from 'react-icons/io'

function Testimonials() {
	const [data, setData] = useState(mockData())

	const handleChange = e => {
		console.log(e.target.name)
	}

	return (
		<div className='table-container'>
			<table className='table is-is-fullwidth'>
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
				<tbody>
					{data.map((row, index) => (
						<Row key={index} index={index} data={row} onChange={handleChange} />
					))}
				</tbody>
			</table>
			{/* <Modal /> */}
		</div>
	)
}

function Row({ index, data, onChange }) {
	const [editable, setEditable] = useState(false)

	return (
		<tr key={index}>
			<th className={editable ? 'has-background-primary-light has-text-weight-bold' : ''}>
				{index + 1}
			</th>
			<td
				name='name'
				onInput={onChange}
				contentEditable={editable}
				className={editable ? 'has-background-primary-light has-text-weight-bold' : ''}
			>
				{data.name}
			</td>
			<td
				name='message'
				onInput={onChange}
				contentEditable={editable}
				className={editable ? 'has-background-primary-light has-text-weight-bold' : ''}
			>
				{data.message}
			</td>
			<td className={editable ? 'has-background-primary-light has-text-weight-bold' : ''}>
				<div className='buttons has-addons is-flex is-flex-wrap-nowrap'>
					<button
						className='button'
						onClick={() => {
							setEditable(!editable)
						}}
					>
						<span className='icon'>{editable ? <IoIosSave /> : <GrEdit />}</span>
					</button>
					<button className='button'>
						<span className='icon'>
							<RiDeleteBin5Line />
						</span>
					</button>
				</div>
			</td>
		</tr>
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
