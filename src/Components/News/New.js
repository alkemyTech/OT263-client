import { Link } from 'react-router-dom';
import '../CardListStyles.css';

function New({ item: { id, image, name } }) {
    return (
        <Link to={`/news/${id}`} className="column is-full-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen  m-auto">
            <div style={{ background: "#7E9AFD", border: "1px solid #0038FF", fontFamily: "Poppins", borderRadius: "2rem" }} className="card is-rounded">
                <div className="card-content p-4 columns">
                    <div className="card-image column">
                        <figure className="image is-5by4">
                            <img src={image} alt="news" />
                        </figure>
                    </div>
                    <div className='card-media column'>
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