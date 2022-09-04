import React from 'react';
import { useFormik } from 'formik'
import { HomeSchema } from '../../Schemas/HomeFormSchema';


const onSubmit = (values) => {
  const homeEdit = values; 
}



const HomeForm = () => {

  const handleImageChange = (e) => {
      e.preventDefault();
      let reader = new FileReader();
      let file = e.target.files[0];
      if (file) {
        reader.readAsDataURL(file);
        setFieldValue(e.target.name, file);
      }
      
      }

  const { values, errors, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      homeText: "",
      slide1: undefined,
      imgText1: undefined,
      slide2: undefined,
      imgText2: undefined,
      slide3: undefined,
      imgText3: undefined,
      file: undefined

    },
    validationSchema: HomeSchema,
    onSubmit
  });



  return (
    <div className="container is-max-desktop my-4">
      <div className='columns is-mobile'>
        <div className="column is-half-tablet is-offset-one-quarter-tablet is-full-mobile ">
          <form onSubmit={handleSubmit}>
            <label className='label'>Texto de Bienvenida</label>
            <div className="control mb-4">
              <textarea
                className="textarea"
                placeholder="Escribe una bienvenida aquí"
                name='homeText'
                value={values.homeText}
                type='text'
                onChange={handleChange}
              ></textarea>
            </div>
            {errors.homeText && <p className=' mt-0 pt-0 help is-danger has-text-right'>{errors.homeText}</p>}
            <div className="file has-name is-right my-2">
              <label className="file-label">
                <input className="file-input" type="file" name="slide1" onChange={handleImageChange}/>
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload"></i>
                  </span>
                  <span className="file-label">
                    Slide 1
                  </span>
                </span>
                <span className="file-name">
                {values.slide1? values.slide1.name : 'Agregar una Imagen .jpg, .jpeg, .png'}
                </span>
              </label>
            </div>
            {errors.slide1 && <p className=' mt-0 pt-0 help is-danger has-text-right'>{errors.slide1}</p>}

            <div className="field has-addons has-addons-right">
              <div className="control" style={{ width: "16rem" }}>
                <input className="input" type="text" name='imgText1' onChange={handleChange} placeholder="Ingrese texto" />
              </div>
              <p className="control">
                <span className="button is-static" style={{ width: "6.5rem" }}>
                  Texto
                </span>
              </p>
            </div>
            {errors.imgText1 && <p className=' mt-0 pt-0 help is-danger has-text-right'>{errors.imgText1}</p>}

            <div className="file has-name is-right my-2">
              <label className="file-label">
                <input className="file-input" type="file" name="slide2" onChange={handleImageChange} />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload"></i>
                  </span>
                  <span className="file-label">
                    Slide 2
                  </span>
                </span>
                <span className="file-name">
                {values.slide2? values.slide2.name : 'Agregar una Imagen .jpg, .jpeg, .png'}
                </span>
              </label>
            </div>
            {errors.slide2 && <p className=' mt-0 pt-0 help is-danger has-text-right'>{errors.slide2}</p>}

            <div className="field has-addons has-addons-right">
              <div className="control" style={{ width: "16rem" }}>
                <input className="input" type="text" name='imgText2' onChange={handleChange} placeholder="Ingrese texto" />
              </div>
              <p className="control">
                <span className="button is-static" style={{ width: "6.5rem" }}>
                  Texto
                </span>
              </p>
            </div>
            {errors.imgText2 && <p className=' mt-0 pt-0 help is-danger has-text-right'>{errors.imgText2}</p>}

            <div className="file has-name is-right my-2">
              <label className="file-label">
                <input className="file-input" type="file" name="slide3" onChange={handleImageChange} />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload"></i>
                  </span>
                  <span className="file-label">
                    Slide 3
                  </span>
                </span>
                <span className="file-name">
                {values.slide2? values.slide2.name : 'Agregar una Imagen .jpg, .jpeg, .png'}
                </span>
              </label>
            </div>
            {errors.slide3 && <p className=' mt-0 pt-0 help is-danger has-text-right'>{errors.slide3}</p>}

            <div className="field has-addons has-addons-right">
              <div className="control" style={{ width: "16rem" }}>
                <input className="input" type="text" name='imgText3' onChange={handleChange} placeholder="Ingrese texto" />
              </div>
              <p className="control">
                <span className="button is-static" style={{ width: "6.5rem" }}>
                  Texto
                </span>
              </p>
            </div>
            {errors.imgText2 && <p className=' mt-0 pt-0 help is-danger has-text-right'>{errors.imgText2}</p>}

            <div className="field is-grouped is-grouped-centered mt-6">
              <p className="control">
                <button className="button is-primary" type='submit'>
                  Enviar
                </button>
              </p>
              <p className="control">
                <button className="button is-light" type='reset'>
                  Cancelar
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default HomeForm