import Testimonial from "./Testimonial"
import TestimonialForm from "./TestimonialsForm"

export default function TestimonialsList({ data }) {
    return (
        <div className="container">
            <h1 className="title">Testimonios</h1>
            <div className="is-flex is-flex-wrap-wrap columns is-mobile">
                {data.map(testimonial => <Testimonial testimonial={testimonial} showSelected={showSelected} />)}
            </div>
            <TestimonialForm />
        </div>
    )
}