import React from 'react'

const MenberCard = ({ name, role, src }) => {
  return (
    <div
      className='is-flex box is-flex-direction-column is-align-items-stretch is-justify-content-flex-end px-0 py-2'
      style={{
        background: `url(${src})`,
        width: '200px',
        height: '225px',
        backgroundSize: 'cover',
        borderRadius: '1.5rem '
      }}
    >
      <h2 className='title is-size-4 has-text-white has-text-centered my-0'>{name}</h2>
      <h2 className='title is-size-5 has-text-white has-text-centered mt-1 has-text-weight-light'>
        {role}
      </h2>
    </div>
  )
}

export default MenberCard
