import React from 'react'
import Cards from '../Components/Admin/Cards'
import Fade from 'react-reveal/Fade';

const Admin = () => {
	return (
    <Fade>
		<div className='section hero is-fullheight'>
			<div className='hero-body '>
				<Cards />
			</div>
		</div>
    </Fade>
	)
}

export default Admin
