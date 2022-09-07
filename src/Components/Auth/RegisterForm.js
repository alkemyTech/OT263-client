import React from 'react';
import { useFormik } from 'formik';
import { registerSchema } from '../../Schemas';


const onSubmit = (values, actions) => {
    const {firstName, lastName, email, password} = values
    const newUser = {
        firstName,
        lastName,
        email,
        password
    }
    
}

const RegisterForm = () => {
    const {values, errors, handleChange, handleSubmit} = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""

        },
        validationSchema: registerSchema,
        onSubmit,
    });


    return (
        <div className='columns'>
        <div className='column bulma-center-mixin-parent is-flex is-flex-direction-column is-flex-wrap-nowrap is-justify-content-center mx-0 px-0'>
            <div className='mt-4 bulma-center-mixin'>
                <div className='is-flex is-flex-direction-column mb-4' style={{margin:"0 auto", maxWidth: "450px"}}>
                <p className='subtitle is-6'>Bienvenido</p>
                <span className='title'>Crea una cuenta</span>
                </div>
                <form className='form-container'  onSubmit={handleSubmit}>
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
                    <button className="button is-fullwidth py-3"  style={{backgroundColor:"rgb(255, 0, 0, 1)"}} type="submit"><span className='has-text-white-ter is-size-4'>Registrarse</span></button>
                </form>
            </div>
            <p className='' style={{paddingTop:'150px', textAlign:"center"}}>¿Ya tienes una cuenta? <strong style={{color:'red'}}>Inicia Sesión</strong></p>
        </div>
        <figure className='column is-hidden-mobile is-half' style={{boxSizing:'border-box'}}>
        <img  src='images/Rectangle-4.png' alt="" />
        </figure>
        </div>
    );
}
 
export default RegisterForm;