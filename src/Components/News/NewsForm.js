import React, { useState } from 'react'
import '../../Components/FormStyles.css'
import Fade from 'react-reveal/Fade'
import TextEditor from '../Admin/ActivityForm/TextEditor'

const categories = [
  { id: 1, name: 'category 1' },
  { id: 2, name: 'category 2' },
  { id: 3, name: 'category 3' },
  { id: 4, name: 'category 4' },
  { id: 5, name: 'category 5' }
]

const NewsForm = ({
  values,
  errors,
  handleChange,
  handleSubmit,
  handleImageChange,
  handleEditor
}) => {
  return (
    <Fade>
      <div className='container my-4'>
        <div className='columns is-mobile'>
          <div className='column is-half-tablet is-offset-one-quarter-tablet is-full-mobile '>
            <form onSubmit={handleSubmit}>
              <label className='label mb-1 mt-3 pl-1'>Título</label>
              <div className='control'>
                <input
                  className={`input ${errors.name ? 'is-danger' : ''}`}
                  type='text'
                  name='name'
                  value={values.name}
                  placeholder='Ingrese Título'
                  onChange={handleChange}
                />
              </div>
              {errors.name && (
                <p className=' mt-1 pt-0 help is-danger has-text-right'>{errors.name}</p>
              )}
              <label className='label mb-1 mt-3 pl-1'>Imagen</label>
              <div className='file has-name is-fullwidth'>
                <label className='file-label'>
                  <input className='file-input' type='file' name='image' onChange={handleImageChange}/>
                  <span className='file-cta'>
                    <span className='file-label'>Elegí la imagen…</span>
                  </span>
                  <span className='file-name'>
                    {values.image.name ? values.image.name : undefined}
                  </span>
                </label>
              </div>
              {errors.image && (
                <p className=' mt-1 pt-0 help is-danger has-text-right'>{errors.image}</p>
              )}
              <TextEditor
                error={errors.content}
                label={'Contenido'}
                placeholder={'Novedades'}
                value={values.content}
                onChange={handleEditor}
              />
              <label className='label mb-1 mt-3 pl-1'>Categoria</label>
              <div className='control'>
                <div
                  className={`select ${errors.category ? 'is-danger' : ''}`}
                  style={{ width: '100%' }}
                >
                  <select
                    name='category'
                    value={values.category}
                    onChange={handleChange}
                    style={{ width: '100%' }}
                  >
                    <option value=''>Seleccione una categoria</option>
                    {categories.map(category => (
                      <option value={category.id} key={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className=' mt-0 pt-0 help is-danger has-text-right'>{errors.category}</p>
                  )}
                </div>
              </div>
              <p className='control has-text-right'>
                <button
                  className='button is-link my-5'
                  type='submit'
                  disabled={Object.keys(errors).length}
                >
                  Enviar
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default NewsForm
