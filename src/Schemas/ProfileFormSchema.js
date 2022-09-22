import * as Yup from "yup";

const ProfileFormSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "Mínimo 2 caracteres")
        .max(15, "Máximo 15 caracteres")
        .required("Campo Obligatorio"),
    lastName: Yup.string()
        .min(2, "Mínimo 2 caracteres")
        .max(15, "Máximo 15 caracteres")
        .required("Campo Obligatorio"),
    email: Yup.string()
        .email("Email inválido")
        .required("Campo Obligatorio"),
    password: Yup.string()
        .min(5, "Mínimo 5 caracteres")
        .required("Campo Obligatorio"),
})

export default ProfileFormSchema;