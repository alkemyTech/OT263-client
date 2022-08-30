import { useField } from "formik";
import React from "react";
import "../FormStyles.css";

const FormSelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-select">
            <label className="form-input-label form-select-label" htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} className="form-select-field"/>
            {meta.touched && meta.error ? (
                <div className="form-error-message">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default FormSelect;
