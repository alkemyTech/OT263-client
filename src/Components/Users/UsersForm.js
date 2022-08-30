import React from "react";
import { Form, Formik } from "formik";
import { userEditSchema } from "../../schemas";
import post from "../../Services/apiService.js";
import FormTextInput from "../FormComponents/FormTextInput";
import FormSelect from "../FormComponents/FormSelect";
import "../FormStyles.css";
import Swal from "sweetalert2";

const UserForm = ({ user }) => {
    return (
        <Formik
        initialValues={{
            name: user.name,
            lastName: user.lastName,
            roleId: user.roleId,
        }}
        validationSchema={userEditSchema}
        onSubmit={async (values, { setSubmitting }) => {
            try {
                await post(
                    "http://localhost:3000/users/" + user.id,
                    values
                    );
                    setSubmitting(false);
                    Swal.fire({
                        title: "¡Listo!",
                        text: "El usuario ha sido actualizado",
                        icon: "success",
                        confirmButtonText: "OK",
                    });
                } catch (error) {
                    Swal.fire({
                        title: "Error",
                        text: "Ha ocurrido un error",
                        icon: "error",
                        confirmButtonText: "OK",
                    });
                }
            }}
        >
            {formik => {
                return (
            <Form className="form-container">
                <FormTextInput
                    label="Nombre"
                    type="text"
                    name="name"
                    placeholder="Nombre"
                />
                <FormTextInput
                    label="Apellido"
                    type="text"
                    name="lastName"
                    placeholder="Apellido"
                />
                <FormSelect label="Rol" name="roleId">
                    {user.roleId === "1" && <option value="1">Administrador</option>}
                    <option value="2">Usuario</option>
                </FormSelect>

                <button type="submit" className="submit-btn" disabled={Object.keys(formik.errors).length > 0}>
                    Submit
                </button>
            </Form>
            )}
            }
        </Formik>
    );
};

export default UserForm;
