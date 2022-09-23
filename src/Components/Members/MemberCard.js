import React from 'react'

const MenberCard = ({ name, role, src }) => {
  return (
    <div
      className='is-flex is-flex-direction-column is-align-items-stretch is-justify-content-flex-end'
      style={{
        background: `url(${src})`,
        width: '220px',
        height: '235px',
        backgroundSize: 'cover',
        borderRadius: '1.5rem '
      }}
    >
      <h2 className='title is-size-4 has-text-white has-text-centered my-0'>{name}</h2>
      <h2 className='title is-size-5 has-text-white has-text-centered mt-1 mb-4 has-text-weight-light'>
        {role}
      </h2>
    </div>
  )
}

export default MenberCard
