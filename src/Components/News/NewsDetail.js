import React from "react";
import "./NewsDetail.css";
import { useParams } from 'react-router-dom'
import useAxios from '../../app/hooks/useAxios'
import Loader from '../Loader/Loader'
import moment from 'moment/moment';

const NewsDetail = () => {

	const { id } = useParams()


	const { response, loading } = useAxios({
		method: 'get',
		headers: JSON.stringify({
			'Content-Type': 'application/json',
			Accept: '*/*'
		}),
		url: `http://localhost:3001/news/${id}`
	})

	return loading ? (
		<section className='hero is-fullheight'>
			<div className='hero-body'>
				<Loader color={'blue'} size={'80px'} weight={'5'} image={'../../logo.svg'} />
			</div>
		</section>
	) : response ? (
		<div className="container my-1">
			<div className='columns is-mobile'>
				<div className="column is-full-tablet is-offset-one-quarter-tablet is-full-mobile is-four-fifths-desktop mx-auto">
					<div className="box news-detail-container my-2 py-0 px-2">
						<h1 className="news-detail-title">{response.data.name}</h1>
						<figure className="image mx-auto my-2" style={{maxWidth:'800px', maxWeight:'480px'}}>
						<img
							style={{width:'100%', height:'100%'}}
							src={response.data.image}
							alt={response.data.name}
						/>
						</figure>
						<p className='has-text-centered-desktop is-italic PadDate'>{moment(response.data.createdAt).format('LLL')}</p>
						
						<p className="news-detail-body">{response.data.content}</p>
					</div>
				</div>
			</div>
		</div>
	) : (
		<section className='hero is-fullheight'>
			<div className='hero-body'>
				<h1 className='title'>Error 404 - Actividad No Encontrada</h1>
			</div>
		</section>
	)
};

export default NewsDetail;
