import New from './New';
import '../CardListStyles.css';

function NewsList() {
    const newsMock = [
        { id: 1, title: 'Titulo de prueba', image: "./images/Somos-Mas/News/new1.png", description: 'Descripcion de prueba' },
        { id: 2, title: 'Titulo de prueba', image: "./images/Somos-Mas/News/new1.png", description: 'Descripcion de prueba' },
        { id: 3, title: 'Titulo de prueba', image: "./images/Somos-Mas/News/new1.png", description: 'Descripcion de prueba' },
        { id: 4, title: 'Titulo de prueba', image: "./images/Somos-Mas/News/new1.png", description: 'Descripcion de prueba' },
        { id: 5, title: 'Titulo de prueba', image: "./images/Somos-Mas/News/new2.png", description: 'Descripcion de prueba' }
    ]
    return (
        <div className='container mt-5'>
            <h1 className='title'>Ultimas novedades</h1>
            <div  className="is-flex-wrap-wrap columns is-mobile">
                {newsMock.map(e => <New key={e.id} item={e} />)}
            </div>
        </div>
    )
}

export default NewsList