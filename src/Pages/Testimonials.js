import React from 'react'
import { Outlet } from 'react-router-dom'
import TestimonialForm from '../Components/Testimonials/TestimonialsForm'
import Fade from 'react-reveal/Fade';

const Testimonials = () => {
	return (
		<Fade>
			<h1>Testimonios</h1>
			<Outlet />
			<TestimonialForm />
		</Fade>
	)
}

export default Testimonials
