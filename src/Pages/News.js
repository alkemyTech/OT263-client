import React from 'react'
import { useParams } from 'react-router-dom';
import NewsDetail from '../Components/NewsDetail/NewsDetail';
import NewsList from '../Components/News/NewsList';

const News = () => {

	const { id } = useParams();
	
	if (id) {
		return <NewsDetail id={id} />
	}
	
	return <NewsList />
}

export default News
