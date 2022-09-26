import '../CardListStyles.css'
import NewCard from './NewCard'

function NewsList({ data }) {
  return (
    <div className='container mt-5'>
      <h1 className='title'>Novedades</h1>
      <div className='is-flex-wrap-wrap hero columns is-mobile'>
        {data.map(news => (
          <NewCard key={news.id} item={news} />
        ))}
      </div>
    </div>
  )
}

export default NewsList
