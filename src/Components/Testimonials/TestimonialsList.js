<<<<<<< HEAD
import Testimonial from '../../Pages/Testimonial'
import TestimonialForm from './TestimonialsForm'

export default function TestimonialsList({ data }) {
  return (
    <div className='container'>
      <h1 className='title'>Testimonios</h1>
      <div className='is-flex is-flex-wrap-wrap columns is-mobile'>
        {data.map(testimonial => (
          <Testimonial testimonial={testimonial} />
        ))}
      </div>
      <TestimonialForm />
    </div>
  )
}
=======
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
>>>>>>> 27e2c4e2f77167ba5f432b57dc3bc64bea91a990
