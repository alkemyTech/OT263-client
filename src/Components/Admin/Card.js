import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ title, link, children }) => {
	return (
		<div className='column has-text-centered box is-one-quarter is-shadowless'>
			<div className='card'>
				<div className='card-header is-shadowless'>
					<p className='card-header-title is-centered has-text-grey is-capitalized'>
						{title}
					</p>
				</div>
				<div className='card-content is-shadowless p-0'>{children}</div>
				<div className='card-footer' style={{ border: 'none' }}>
					<span className='card-footer-item is-centered is-borderless'>
						<Link to={link}>
							<button className='button has-background-primary-dark has-text-white is-responsive'>
								Ver más
							</button>
						</Link>
					</span>
				</div>
			</div>
		</div>
	)
}
export default Card
