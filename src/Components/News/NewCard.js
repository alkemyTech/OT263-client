import React from 'react'
import { Link } from 'react-router-dom'
import './NewCard.css'

const NewCard = ({ title, text, image, url }) => {
  return (
    <div
      className='columns box'
      style={{ background: '#7E9AFD', borderRadius: '1rem', border: '1px solid blue' }}
    >
      <div
        className='column is-flex-grow-1 is-flex-shrink-0 new-image'
        style={{
          background: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          borderRadius: '1rem'
          // margin: '1rem'
        }}
      ></div>
      <div className='column px-4 is-flex is-flex-direction-column is-align-items-flex-start'>
        <h2 className='is-size-5 has-text-black has-text-left has-text-weight-light mb-3'>
          {title}
        </h2>
        <p className='has-text-black mt-1 has-text-weight-light new-text'>{text}</p>
        <Link to={url} style={{ marginTop: 'auto', width: '100%' }}>
          <span
            className='button is-fullwidth mt-2 box has-text-weight-bold is-size-6'
            style={{ background: 'blue', color: 'white', border: 'blue' }}
          >
            Ver novedad
          </span>
        </Link>
      </div>
    </div>
  )
}

export default NewCard
