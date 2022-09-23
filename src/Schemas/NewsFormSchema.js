import * as Yup from "yup";
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

export const validationSchema = Yup.object().shape({
    name: Yup.string().required("Titulo es requerido"),
    image: Yup.mixed().test('type', 'Sólo admite archivos .jpeg/.png/.jpg',  (value) => {
        return value && SUPPORTED_FORMATS.includes(value.type)}),
    content: Yup.string().min(20, 'Contenido demasiado corto').required('Agregue un contenido'),
    category: Yup.number().positive('Seleccione una categoria').required("Seleccione una categoria"),
  });