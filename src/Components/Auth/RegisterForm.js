import React from 'react';
import { useFormik } from 'formik';
import { registerSchema } from '../../Schemas/index';
import { PostRegister } from "../../Services/privateApiService"
import {useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logIn } from '../../actions/userActions';


const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const {values, errors, handleChange, handleSubmit} = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""

    },
    validationSchema: registerSchema,
    onSubmit: async values => {
      const {firstName, lastName, email, password} = values
      const newUser = {
        firstName,
        lastName,
        email,
        password
      }
      const user = await PostRegister(newUser)
      dispatch(logIn(user))

      localStorage.setItem("token", user.token)
      user && navigate('/')
    },
  });


  return (

        <form className='register-container' onSubmit={handleSubmit}>
          <input className={`input is-hovered ${errors.firstName ? 'is-danger mb-0': 'mb-2'}`}
            id="firstName" 
            type="text" 
            name="firstName" 
            value={values.firstName} 
            onChange={handleChange} 
            placeholder="Nombre"
          />
          {errors.firstName && <p className=' mt-0 pt-0 help is-danger'>{errors.firstName}</p>}
          <input className={`input is-hovered ${errors.lastName ? 'is-danger mb-0': 'mb-2'}`}
            id="lastName" 
            type="text" 
            name="lastName" 
            value={values.lastName} 
            onChange={handleChange} 
            placeholder="Apellido"
          />
          {errors.lastName && <p className=' mt-0 pt-0 help is-danger'>{errors.lastName}</p>}
          <input className={`input is-hovered ${errors.email ? 'is-danger mb-0': 'mb-2'}`}
            id="email" 
            type="text" 
            name="email" 
            value={values.email} 
            onChange={handleChange} 
            placeholder="Email"
          />
          {errors.email && <p className='mt-0 pt-0 help is-danger'>{errors.email}</p>}
          <input className={`input is-hovered ${errors.password ? 'is-danger mb-0': 'mb-2'}`}
            id="password" 
            type="password" 
            name="password" 
            value={values.password} 
            onChange={handleChange} 
            placeholder="Contraseña"
          />
          {errors.password && <p className='mt-0 pt-0 help is-danger'>{errors.password}</p>}
          <button 
            className="button is-fullwidth py-3"  
            style={{backgroundColor:"rgb(255, 0, 0, 1)"}} 
            type="submit">
              <span className='has-text-white-ter is-size-4'>Registrarse</span>
          </button>
      </form>
   
  );
}
 
export default RegisterForm;