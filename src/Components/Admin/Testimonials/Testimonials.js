import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'

import './Testimonials.css'
import 'react-quill/dist/quill.snow.css'

import Row from './Row'
import Header from './Header'
import FormModal from './FormModal'
import { get, put } from '../../../Services/apiService'
import deleteHelper from '../../Buttons/deleteHelper'

const URI='http://localhost:3001/testimonials'

function Testimonials() {
	const [data, setData] = useState(null)
	const [showForm, setShowForm] = useState(false)

	const handleChange = (index, name, value) => {
		const newData = [...data]

		const newRow = data[index]
		newRow[name] = value
		newData[index] = newRow

		setData(newData)
	}

	const handleDelete =async (e) => {
		const { index,id } = e.currentTarget.dataset
		const newData = data.filter((val, i) => i !== Number(index))
		await deleteHelper(id, 'testimonials', data, setData)
		setData(newData)
	}

	const handleSubmit = index => {
		put(`${URI+"/"+data[index].id}`, data[index])
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
			<h1 className='title is-1 my-5 has-text-centered'> Tabla de Testimonios</h1>
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



export default Testimonials
