import New from './New';
import '../CardListStyles.css';
import React from 'react';
import useAxios from '../../app/hooks/useAxios';
import Loader from '../Loader/Loader';


function NewsList() {  

    const { response, loading } = useAxios({
		method: 'get',
		headers: JSON.stringify({
			'Content-Type': 'application/json',
			Accept: '*/*'
		}),
		url: `http://localhost:3001/news`
	})
    

    return loading ? (
		<section className='hero is-fullheight'>
			<div className='hero-body'>
				<Loader color={'blue'} size={'80px'} weight={'5'} image={'../../logo.svg'} />
			</div>
		</section>
    ) : response ? (
        <section className='section'>
        <div className='container is-table'>
            <h1 className='title'>Ultimas novedades</h1>
            <div  className="columns is-multiline">
                {response.data.map(news => <New key={news.id} item={news} />)}
            </div>
        </div>
        </section> 

    ) : (
		<section className='hero is-fullheight'>
			<div className='hero-body'>
				<h1 className='title'>Error 404 - Novedad No Encontrada</h1>
			</div>
		</section>
	)
}

export default NewsList
