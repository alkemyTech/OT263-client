export default function Testimonial({ testimonial, showSelected} ) {
    return (
        <div onClick={()=> showSelected(testimonial)} className="column is-two-thirds-mobile is-two-thirds-tablet is-half-desktop is-one-quarter-widescreen  m-auto">
            <div style={{ background: "#7E9AFD", border: "1px solid #0038FF", fontFamily: "Poppins", borderRadius: "2rem" }} className="card is-rounded">
                <div className="card-content p-4">
                    <div className="card-image">
                        <figure className="image is-5by4">
                            <img src={testimonial.image} alt="news" />
                        </figure>
                    </div>
                    <div className='card-media'>
                        <div class="media-right">
                            <div className="title-container">
                                <p className="title is-4">{testimonial.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}