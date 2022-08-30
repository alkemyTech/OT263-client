import React from "react";
import { Form, Formik, useField } from "formik";
import axios from "axios";
import { userEditSchema } from "../../schemas";

import "../FormStyles.css";

const UserForm = (user) => {
    const MyTextInput = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
            <>
                <label htmlFor={props.id || props.name}>{label}</label>
                <input className="text-input" {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </>
        );
    };
    const MySelect = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
            <div>
                <label htmlFor={props.id || props.name}>{label}</label>
                <select {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </div>
        );
    };

    return (
        <Formik
            initialValues={{
                name: user.name,
                lastName: user.lastName,
                roleId: user.roleId,
            }}
            validationSchema={userEditSchema}
            onSubmit={(values, { setSubmitting }) => {
                axios.post("http://localhost:3000/users/" + user.id, values);
                setSubmitting(false);
            }}
        >
            <Form>
                <MyTextInput
                    label="Nombre"
                    type="text"
                    name="name"
                    placeholder="Nombre"
                />
                <MyTextInput
                    label="Apellido"
                    type="text"
                    name="lastName"
                    placeholder="Apellido"
                />
                <MySelect label="Rol" name="roleId">
                    <option value="1">Administrador</option>
                    <option value="2">Usuario</option>
                </MySelect>
            </Form>
        </Formik>
    );
};

export default UserForm;
