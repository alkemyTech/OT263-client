import { Link } from 'react-router-dom';
import '../CardListStyles.css';

function New({ item: { id, image, name } }) {
    return (
        <Link to={`/news/${id}`} className="column is-full-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen  m-auto">
            <div className="card is-rounded">
                <div className="card-content p-4">
                    <div className="card-image">
                        <figure className="image is-5by4">
                            <img src={image} alt="news" width={150} height={150} style={{objectFit:'cover'}}/>
                        </figure>
                    </div>
                    <div className='card-media mt-5'>
                        <div class="media-right">
                            <div className="title-container">
                                <p className="title is-4">{name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link >
    )
}

export default New