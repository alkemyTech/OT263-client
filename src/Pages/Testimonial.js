export default function Testimonial({ item:testimonial } ) {
    return (
        <div  className="column is-two-thirds-mobile is-two-thirds-tablet is-half-desktop is-one-quarter-widescreen  m-auto">
            <div style={{ background: "#FDFFA4", border: "1px solid #0038FF", fontFamily: "Poppins", borderRadius: "2rem" }} className="card is-rounded">
                <div className="card-content p-4">
                    <div className="">
                        <figure  className="image is-128x128">
                            <img className="is-rounded" src={testimonial.image} alt="news" />
                        </figure>
                    </div>
                    <div className='card-media'>
                        <div class="media-right">
                            <div className="title-container">
                                <p className="subtitle mt-3">{testimonial.name}</p>
                                <p className="">{testimonial.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}