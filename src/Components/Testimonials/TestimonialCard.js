import React from 'react'
import './TestimonialsCard.css'

const TestimonialCard = ({ image, name, content }) => {
  return (
    <div
      className='is-flex box is-flex-direction-column px-4 py-2 pb-4 box is-justify-content-flex-start'
      style={{ background: '#FDFFA4', width: '260px', borderRadius: '1.5rem' }}
    >
      <div
        className='mt-2'
        style={{
          background: `url(${image})`,
          width: '95px',
          height: '95px',
          backgroundSize: 'cover',
          borderRadius: '50%'
        }}
      ></div>
      <div className='content'>
        <h2 className='is-size-5 has-text-black has-text-left has-text-weight-light my-3'>
          {name}
        </h2>
        <p className='has-text-black mt-1 has-text-weight-light testimonial-text'>{content}</p>
      </div>
    </div>
  )
}

export default TestimonialCard
