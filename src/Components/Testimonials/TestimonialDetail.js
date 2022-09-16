export default function AboutDetail({ selected: { name, image, content } }) {
    
    return (
        <div style={{ fontFamily: "Poppins" }} className="card">
            <div className="card-content p-4 columns">
                <div className="content column">
                        <div className="title-container">
                            <p className="title is-4">{name}</p>
                        </div>
                        <div className="text-container">
                            <p className="content">{content}</p>
                        </div>
                </div>
                <div className="card-image column">
                    <figure className="image is-5by4">
                        <img src={image} alt="news" />
                    </figure>
                </div>
            </div>
        </div>
    )
}