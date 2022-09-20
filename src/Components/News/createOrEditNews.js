import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types'
import useAxios from '../../app/hooks/useAxios'
import NewsForm from './NewsForm';
import { validationSchema } from '../../schemas/NewsFormSchema';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../Config/routes'


const CreateOrEditNews = ({ news: { id, name, image, content, category } }) => {
  const isNewNote = id === 0
  const navigate = useNavigate()

  const onSubmit = values => {
    fetchData()
  
    if (error) return
  
  }
  
  const { values, errors, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      name,
      image,
      content,
      category
    },
    validationSchema: validationSchema,
    onSubmit
  });

  const { fetchData, error, response } = useAxios({
		method: isNewNote ? 'post' : 'put',
		headers: JSON.stringify({
			'Content-Type': 'application/json',
			Accept: '*/*',
      Authorization: 'Bearer token'
		}),
		url: `http://localhost:3001/news/${!isNewNote? id : ''}`,
		body:JSON.stringify({
			name: values.name,
      image: values.image,
      content: values.content,
      categoryId: values.category
    }),
		autoRun: false
	})

  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    if (file) {
      console.log(file)
      reader.readAsDataURL(file);
      setFieldValue(e.target.name, file); 
    }
    }

    const handleEditor = (value) => {
      setFieldValue('content', value);
  }
    
  return (
    <>
    <NewsForm
    values={values}
    errors={errors}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
    setFieldValue={setFieldValue}
    handleImageChange={handleImageChange}
    handleEditor={handleEditor}
    />
    </>
  )
}

CreateOrEditNews.propTypes = {
	news: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
    image: PropTypes.string,
		content: PropTypes.string,
    category: PropTypes.number,
	})
}

CreateOrEditNews.defaultProps = {
	news: {
		id: 0,
		name: '',
    image: '',
		content: '',
    category: 0
	}
}

export default CreateOrEditNews