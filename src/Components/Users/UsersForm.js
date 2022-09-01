import React from "react";
import { Form, Formik } from "formik";
import { userEditSchema } from "../../schemas";
import { patch } from "../../Services/apiService";
import FormTextInput from "../FormComponents/FormTextInput";
import FormSelect from "../FormComponents/FormSelect";
import "../FormikStyles.css";
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
                await patch(
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
                {user.roleId === "1" && <FormSelect label="Rol" name="roleId">
                    <option value="1">Administrador</option>
                    <option value="2">Usuario</option>
                </FormSelect>}

                <button type="submit" className="submit-btn" disabled={Object.keys(formik.errors).length > 0}>
                    Enviar
                </button>
            </Form>
            )}
            }
        </Formik>
    );
};

export default UserForm;
