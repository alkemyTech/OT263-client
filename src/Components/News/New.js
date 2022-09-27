import { Link } from 'react-router-dom';
import '../CardListStyles.css';
import moment from 'moment/moment';

function New({ item: { id, image, name, createdAt } }) {
    return (
        <Link to={`/news/${id}`} className="column is-two-fifths-tablet is-one-third-desktop is-one-third-widescreen mt-2">

            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={image} alt="news" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{name}</p>
                        </div>
                    </div>

                    <div className="content">
                        <time>{moment(createdAt).format('LL')}</time>
                    </div>
                </div>
                <footer class="card-footer">
                    <span class="card-footer-item">Ver más</span>
                </footer>
            </div>

        </Link >
    )
}

export default New