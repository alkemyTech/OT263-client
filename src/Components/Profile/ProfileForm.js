import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { routes } from "../../Config/routes";
import "bulma/css/bulma.min.css";
import Fade from "react-reveal/Fade";
import ProfileFormSchema from '../../Schemas/ProfileFormSchema';
import { deleteRequest } from '../../Services/privateApiService';
import { logOut } from '../../actions/userActions';
import { useDispatch } from 'react-redux';

function ProfileForm({user}) {
    const dispatch = useDispatch();
    const [isEditable, setIsEditable] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            // password: '',
        },
        enableReinitialize: true,
        validationSchema: ProfileFormSchema,
        isSubmitting: isEditable,

        onSubmit: (values) => {
            if (isEditable) return;

            console.log(JSON.stringify(values, null, 2));
        },
    });

    const inputStyles = {
        outline: "none",
        backgroundColor: "transparent",
        border: "none",
        borderRadius: 0,
        borderBottom: isEditable ? "2.5px solid #363636" : "none",
        boxShadow: "none",
        transition: "border-bottom 200ms ease-in",
    };

    const handleDeleteAccount = () => {
        deleteRequest('users', user.id)
        localStorage.removeItem("token");
        dispatch(logOut());
        navigate(routes.home, { replace: true });
    };

    return (
        <Fade>
            <div className="hero is-fullheight has-background-success-light">
                <div className="hero-body columns is-centered">
                    <div className="column is-half-desktop">
                        <h1 className="title is-hidden-tablet is-size-3 ml-4">
                            Mis Datos
                        </h1>
                        <form
                            onSubmit={formik.handleSubmit}
                            className="box"
                            id="profileForm"
                        >
                            <div className="field is-grouped is-grouped-right"> 
                                <span className="title title-3 is-size-3-tablet is-size-2-desktop mr-auto is-hidden-mobile">
                                    Mis Datos
                                </span>

                                {isEditable && (
                                    <button
                                        className='is-rounded is-responsive button is-info mx-2'
                                        type="button"
                                        onClick={() => setIsEditable(false)}
                                        >
                                            Cancelar
                                        </button>
                                )}

                                <button
                                    className="is-rounded is-responsive button is-info mx-2"
                                    type="submit"
                                    form="profileForm"
                                    onClick={() => setIsEditable(!isEditable)}
                                    disabled={
                                        isEditable &&
                                        Object.keys(formik.errors).length
                                    }
                                >
                                    {isEditable ? "Guardar" : "Editar"}
                                </button>

                                <button
                                    className="is-rounded is-responsive button is-danger mx-2"
                                    type="button"
                                    onClick={handleDeleteAccount}
                                >
                                    Borrar Cuenta
                                </button>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <label
                                        className="label has-text-warning-dark"
                                        htmlFor="firstName"
                                    >
                                        Nombre
                                    </label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        className="input is-large is-size-6-mobile"
                                        disabled={!isEditable}
                                        style={inputStyles}
                                        {...formik.getFieldProps("firstName")}
                                    />
                                </div>
                            </div>
                            {formik.touched.firstName &&
                            formik.errors.firstName ? (
                                <div className="help is-danger">
                                    {formik.errors.firstName}
                                </div>
                            ) : null}

                            <div className="field">
                                <div className="control">
                                    <label
                                        className="label has-text-warning-dark"
                                        htmlFor="lastName"
                                    >
                                        Apellido
                                    </label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        {...formik.getFieldProps("lastName")}
                                        className="input is-large is-size-6-mobile"
                                        disabled={!isEditable}
                                        style={inputStyles}
                                    />
                                </div>
                            </div>
                            {formik.touched.lastName &&
                            formik.errors.lastName ? (
                                <div className="help is-danger">
                                    {formik.errors.lastName}
                                </div>
                            ) : null}

                            <div className="field">
                                <div className="control">
                                    <label
                                        className="label has-text-warning-dark"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        {...formik.getFieldProps("email")}
                                        className="input is-large is-size-6-mobile"
                                        disabled={!isEditable}
                                        style={inputStyles}
                                    />
                                </div>
                            </div>
                            {formik.touched.email && formik.errors.email ? (
                                <div className="help is-danger">
                                    {formik.errors.email}
                                </div>
                            ) : null}

                            {/* <div className="field">
                                <div className="control">
                                    <label
                                        className="label has-text-warning-dark"
                                        htmlFor="password"
                                    >
                                        Contraseña
                                    </label>

                                    <input
                                        id="password"
                                        type="password"
                                        {...formik.getFieldProps("password")}
                                        className="input is-large is-size-6-mobile"
                                        disabled={!isEditable}
                                        style={inputStyles}
                                    />
                                </div>
                                {formik.touched.password &&
                                formik.errors.password ? (
                                    <div className="help is-danger">
                                        {formik.errors.password}
                                    </div>
                                ) : null}
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default ProfileForm