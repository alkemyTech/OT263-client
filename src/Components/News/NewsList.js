import New from './New';
import '../CardListStyles.css';

function NewsList() {
    const newsMock = [
        { id: 2, title: 'Titulo de prueba', image: "./images/Somos-Mas/News/new1.png", description: 'Descripcion de prueba' },
        { id: 1, title: 'Titulo de prueba', image: "./images/Somos-Mas/News/new2.png", description: 'Descripcion de prueba' }
    ]
    return (
        <div className='container mt-5'>
            <h1 className='title'>Ultimas novedades</h1>
            <div  className="container columns is-mobile">
                {newsMock.map(e => <New key={e.id} item={e} />)}
            </div>
        </div>
    )
}

export default NewsList