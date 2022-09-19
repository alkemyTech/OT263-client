import React, { useState } from 'react';
import '../../Components/FormStyles.css';
import TextEditor from '../Admin/ActivityForm/TextEditor';

const categories = [
    { id: 1, name: 'category 1'},
    { id: 2, name: 'category 2'},
    { id: 3, name: 'category 3'},
    { id: 4, name: 'category 4'},
    { id: 5, name: 'category 5'}
]

const NewsForm = ({values, errors, handleChange, handleSubmit, handleImageChange, handleEditor}) => {


    

    return (
        <div className="container my-4">
            <div className='columns is-mobile'>
                <div className="column is-half-tablet is-offset-one-quarter-tablet is-full-mobile ">
                    <form onSubmit={handleSubmit}>
                        <label className='label mb-1'>Título</label>
                        <div className="control">
                            <input className="input" type="text" name='name' value={values.name} placeholder="Ingrese Título" onChange={handleChange} />
                        </div>
                        {errors.name && <p className=' mt-1 pt-0 help is-danger has-text-right'>{errors.name}</p>}
                        <label className='label mb-1'>Imagen</label>
                        <div className="control">
                            <input className="input" type="File" name='image' accept='image/*' value={values.image.filename? values.image.filename : undefined} placeholder="Inserte Imagen" onChange={handleImageChange} />
                        </div>
                        {errors.image && <p className=' mt-1 pt-0 help is-danger has-text-right'>{errors.image}</p>}
                        <TextEditor
                        label={'Contenido'} 
                        placeholder={'Novedades'}
                        value={values.content}
                        onChange={handleEditor}
                        />
                        {errors.content && <p className=' mt-0 pt-0 help is-danger has-text-right'>{errors.content}</p>}
                        <label className='label mb-1'>Categoria</label>
                        <div className="select">
                            <select name='category' value={values.category} onChange={handleChange}>
                                <option value="">Seleccione una categoria</option>
                                {categories.map(category => <option value={category.id} key={category.id}>{category.name}</option>)}
                            </select>
                        </div>
                        {errors.category && <p className=' mt-0 pt-0 help is-danger has-text-right'>{errors.category}</p>}
                        <p className="control">
                            <button className="button is-primary my-2" type='submit'>
                                Enviar
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewsForm;