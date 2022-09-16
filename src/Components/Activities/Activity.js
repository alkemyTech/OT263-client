import React from 'react'
import { useParams } from 'react-router-dom'
import useAxios from '../../app/hooks/useAxios'
import Loader from '../Loader/Loader'

const Activity = () => {
	const { id } = useParams()

	const { response, loading } = useAxios({
		method: 'get',
		headers: JSON.stringify({
			'Content-Type': 'application/json',
			Accept: '*/*'
		}),
		url: `http://localhost:3001/activities/${id}`
	})

	return loading ? (
		<section className='hero is-fullheight'>
			<div className='hero-body'>
				<Loader color={'blue'} size={'80px'} weight={'5'} image={'../../logo.svg'} />
			</div>
		</section>
	) : response ? (
		<section className='section is-large' style={{ padding: '3rem 0' }}>
			<section className='hero is-small'>
				<div className='hero-body'>
					<h1 className='title px-6'>Actividades</h1>
				</div>
			</section>
			<section
				className='hero is-halfheight is-primary'
				style={{
					background: `url(${response.image})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center center'
				}}
			></section>
			<section className='hero is-small'>
				<div className='hero-body columns is-centered'>
					<div className='container has-text-centered column is-half-tablet'>
						<h1 className='title my-6' style={{ textAlign: 'left' }}>
							{response.name}
						</h1>
						<p className='subtitle' style={{ textAlign: 'left' }}>
							{response.description}
						</p>
					</div>
				</div>
			</section>
		</section>
	) : (
		<section className='hero is-fullheight'>
			<div className='hero-body'>
				<h1 className='title'>Error 404 - Actividad No Encontrada</h1>
			</div>
		</section>
	)
}

export default Activity
