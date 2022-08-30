import * as yup from 'yup';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

export const HomeSchema = yup.object().shape({
  homeText: yup.string().min(20,'Debe ser mínimo 20 caracteres' ).required('Este campo es obligatorio'),
  slide1: yup.mixed().test('type', 'Sólo admite archivos .jpeg/.png/.jpg',  (value) => {
    console.log(value); return value && SUPPORTED_FORMATS.includes(value.type)}),
  imgText1: yup.string().required('Este campo es obligatorio'),
  slide2: yup.mixed().test('type', 'Sólo admite archivos .jpeg/.png/.jpg',  (value) => {
    console.log(value); return value && SUPPORTED_FORMATS.includes(value.type)}),
  imgText2: yup.string().required('Este campo es obligatorio'),
  slide3: yup.mixed().test('type', 'Sólo admite archivos .jpeg/.png/.jpg',  (value) => {
    console.log(value); return value && SUPPORTED_FORMATS.includes(value.type)}),
  imgText3: yup.string().required('Este campo es obligatorio'),
  

});
