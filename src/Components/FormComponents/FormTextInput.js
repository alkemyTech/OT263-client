import React from 'react'
import { useField } from 'formik';
import "../FormStyles.css";

const FormTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label className="form-input-label" htmlFor={props.id || props.name}>{label}</label>
            <input className="form-input-field" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="form-error-message">{meta.error}</div>
            ) : null}
        </>
    );
};

export default FormTextInput