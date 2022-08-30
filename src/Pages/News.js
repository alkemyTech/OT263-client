import React from 'react'
import { useParams } from 'react-router-dom';
import NewsDetailContainer from '../Components/NewsDetail/NewsDetailContainer';
import NewsList from '../Components/News/NewsList';

const News = () => {

	const { id } = useParams();
	
	if (id) {
		return <NewsDetailContainer id={id} />
	}
	
	return <NewsList />
}

export default News
