import New from './New';
import '../CardListStyles.css';

function NewsList({data}) {    
    return (
        <div className='container mt-5 mb-5'>
            <h1 className='title'>Ultimas novedades</h1>
            <div  className="is-flex is-flex-direction-row is-flex-wrap-wrap mobile">
                {data.map(news => <New key={news.id} item={news} />)}
            </div>
        </div>
    )
}

export default NewsList