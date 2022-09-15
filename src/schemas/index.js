import * as yup from "yup";

export const registerSchema = yup.object().shape({
    firstName: yup.string().required("Este campo es obligatorio"),
    lastName: yup.string().required("Este campo es obligatorio"),
    email: yup
        .string()
        .email("Ingrese un email valido")
        .required("Este campo es obligatorio"),
    password: yup
        .string()
        .min(6, "Debe ser mínimo 6 caracteres")
        .required("Este campo es obligatorio"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email('Ingrese un email valido').required('Este campo es obligatorio'),
  password: yup.string().min(6,  'Debe ser mínimo 6 caracteres').required('Este campo es obligatorio'),
})

export const userEditSchema = yup.object().shape({
    name: yup.string().required("Este campo es obligatorio"),
    lastName: yup.string().required("Este campo es obligatorio"),
    roleId: yup
        .string()
        .oneOf(["1", "2"], "Tipo de rol invalido")
});

