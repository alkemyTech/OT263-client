import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade';

import './News.css'
import 'react-quill/dist/quill.snow.css'

import Row from './Row';
import Header from './Header';
import FormModal from './FormModal';
import { get } from '../../../Services/apiService';

const URI='http://localhost:3001/news'

function AdminNews() {
	const [data, setData] = useState(null)
	const [showForm, setShowForm] = useState(false)

	const handleChange = (index, name, value) => {
		console.log(index)
		console.log(name)
		console.log(value)
		const newData = [...data]

		const newRow = data[index]
		newRow[name] = value
		newData[index] = newRow

//		setData(newData)
	}

	const handleDelete = e => {
		const { index } = e.currentTarget.dataset
		const newData = data.filter((val, i) => i !== Number(index))
		console.log( newData)
//		setData(newData)
	}

	const handleSubmit = index => {
		console.log('PUT htttp://localhost:3000/testimonials/' + index)
		console.log('data:', JSON.stringify(data[index]))
		// TODO: dispatch
	}

	useEffect(() => {
		get(URI)
			.then(({data})=>{
				setData(data)
			})
	}, [])

	return (
    <Fade>
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
    </Fade>
	)
}

export default AdminNews
