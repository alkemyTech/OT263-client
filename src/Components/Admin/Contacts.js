import React from 'react'

function renderRow(contact, index) {
	return (
		<tr key={index}>
			<th>{index + 1}</th>
			<td>{contact.name}</td>
			<td>{contact.phone}</td>
			<td>{contact.email}</td>
			<td>{contact.message}</td>
		</tr>
	)
}

const Contacts = () => {
	const data = mockData()
	return (
		<div className='table-container'>
			<table className='table is-is-fullwidth'>
				<thead>
					<tr>
						<th>
							<abbr title='Número'>N°</abbr>
						</th>
						<th>Nombre</th>
						<th>Teléfono</th>
						<th>Email</th>
						<th>Mensaje</th>
					</tr>
				</thead>
				<tbody>{data?.map(renderRow)}</tbody>
			</table>
		</div>
	)
}

// TODO: delete
function mockData() {
	return [
		{
			name: 'Moana Larsen',
			email: 'nunc.laoreet@hotmail.com',
			phone: '1-364-471-1523',
			message:
				'magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam'
		},
		{
			name: 'Bertha Hebert',
			email: 'sem@outlook.org',
			phone: '1-356-778-8644',
			message:
				'purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum.'
		},
		{
			name: 'Elijah Gallegos',
			email: 'lacus.vestibulum@icloud.org',
			phone: '1-653-124-1028',
			message:
				'tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper'
		},
		{
			name: 'Amery Dickson',
			email: 'urna@google.couk',
			phone: '(759) 857-9642',
			message:
				'lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci'
		},
		{
			name: 'Brynne Anderson',
			email: 'sed.sem@outlook.ca',
			phone: '(764) 713-0361',
			message:
				'orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis'
		},
		{
			name: 'Bryan Hebert',
			email: 'bryan@outlook.org',
			phone: '1-356-778-8644',
			message:
				'purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum.'
		},
		{
			name: 'John Smith',
			email: 'john@google.org',
			phone: '1-356-778-8644',
			message:
				'purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum.'
		},
		{
			name: 'Lyan Scobedo',
			email: 'lyam@outlook.org',
			phone: '1-356-778-8644',
			message:
				'purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum.'
		}
	]
}

export default Contacts
