import { useState } from "react"
import Testimonial from "./Testimonial"
import TestimonialDetail from "./TestimonialDetail"
import TestimonialForm from "./TestimonialsForm"

export default function TestimonialsList({ data }) {
    const [selected, setSlected] = useState(data[0])
    const showSelected = (testimonial) => {
        setSlected(testimonial)
    }
    return (
        <div className="continer">
            <div>
                <TestimonialDetail selected={selected} />
            </div>            
            <div className="is-flex is-flex-wrap-wrap columns is-mobile">
                {data.map(testimonial => <Testimonial testimonial={testimonial} showSelected={showSelected} />)}
            </div>
            <TestimonialForm />
        </div>
    )
}