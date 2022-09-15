import { Link } from 'react-router-dom';
import '../CardListStyles.css';

function New({ item: { id, image, title } }) {
    return (
        <Link  to={`news/${id}`} className="column is-full-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd m-auto">
            <div style={{ background: "#7E9AFD", border: "1px solid #0038FF", fontFamily: "Poppins", borderRadius: "2rem" }} className="card is-rounded">
                <div className="card-content p-4">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image 128x128">
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