import React from 'react'
import { Outlet } from 'react-router-dom'
import TestimonialForm from '../Components/Testimonials/TestimonialsForm'

const Testimonials = () => {
	return (
		<>
			<h1>Testimonios</h1>
			<Outlet />
			<TestimonialForm />
		</>
	)
}

export default Testimonials
