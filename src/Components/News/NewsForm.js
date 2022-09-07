import React, { useState } from 'react';
import '../../Components/FormStyles.css';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';


const NewsForm = () => {
    const [initialValues, setInitialValues] = useState({
        title: '',
        content: '',
        category: ''
    });

    const handleChange = (e) => {
        if (e.target.name === 'title') {
            setInitialValues({ ...initialValues, title: e.target.value })
        } 
        if (e.target.name === 'category') {
            setInitialValues({ ...initialValues, category: e.target.value })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(initialValues);
    }

    const handleCKEditor = (event, editor) => {
        const data = editor.getData();
        setInitialValues({...initialValues, content: data})
    }

    return (
        <div className="container my-4">
            <div className='columns is-mobile'>
                <div className="column is-half-tablet is-offset-one-quarter-tablet is-full-mobile ">
                    <form onSubmit={handleSubmit}>
                        <label className='label'>Título</label>
                        <div className="control">
                            <input className="input" type="text" name='title' placeholder="Ingrese Título" onChange={handleChange} />
                        </div>
                        <label className='label'>Contenido</label>
                        <CKEditor
                        editor={ClassicEditor}
                        data= 'Agrega lo que quieras aquíii'
                        onInit={editor=> {

                        }}
                        onChange={handleCKEditor}
                        
                        />


                        <label className='label'>Categoria</label>
                        <div class="select">
                            <select name='category' onChange={handleChange}>
                                <option value="" disabled>Select category</option>
                                <option value="1">Demo option 1</option>
                                <option value="2">Demo option 2</option>
                                <option value="3">Demo option 3</option>
                            </select>
                        </div>

                        <p className="control">
                            <button className="button is-primary" type='submit'>
                                Enviar
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </div>







        /*
            <form className="form-container" onSubmit={handleSubmit}>
                <input className="input-field" type="text" name="title" value={initialValues.title || ''} onChange={handleChange}></input>
                <input className="input-field" type="text" name="content" value={initialValues.content || ''} onChange={handleChange}></input>
                <select className="select-field" name="category" value={initialValues.category || ''} onChange={handleChange}>
                    <option value="" disabled>Select category</option>
                    <option value="1">Demo option 1</option>
                    <option value="2">Demo option 2</option>
                    <option value="3">Demo option 3</option>
                </select>
                <button className="submit-btn" type="submit">Send</button>
            </form>
            */
    );
}

export default NewsForm;