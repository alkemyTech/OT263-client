import TestimonialForm from "./TestimonialsForm"
import TestimonialCard from './TestimonialCard'

export default function TestimonialsList({ data }) {
    return (
        <div className="container">
            <h1 className="title">Testimonios</h1>
            <div className="is-flex is-justify-around is-flex-wrap-wrap columns is-mobile gap-4">
                {data.map(testimonial => <TestimonialCard item={testimonial} />)}
            </div>
            <TestimonialForm />
        </div>
    )
}