import React from 'react'

const NewCard = ({ title, text, image, url }) => {
  return (
    <div
      className='is-flex box is-flex-direction-column px-4 py-2 pb-4 box is-justify-content-flex-start'
      style={{ background: '#FDFFA4', width: '250px' }}
    >
      <div
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
          {title}
        </h2>
        <p className='has-text-black mt-1 has-text-weight-light testimonial-text'>{text}</p>
      </div>
    </div>
  )
}

export default NewCard
