import { Link } from 'react-router-dom';
import '../CardListStyles.css';

function New({ item: { id, image, title } }) {
    return (
        <Link  to={`/new/${id}`} className="column">
            <div style={{ background: "#7E9AFD", border: "1px solid #0038FF", fontFamily: "Poppins", borderRadius: "2rem" }} className="card is-rounded">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-three-fifths">
                                <img src={image} alt="news" />
                            </figure>
                        </div>
                        <div className="title-container">
                            <p className="title is-4">{title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default New