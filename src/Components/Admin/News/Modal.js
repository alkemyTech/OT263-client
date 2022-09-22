export default function Modal({ show, onClick, imgUrl }) {
	return (
		<div className={`modal ${show ? 'is-active' : ''}`}>
			<div className='modal-background'></div>
			<div className='modal-content'>
				<p className='image is-4by3'>
					<img src={imgUrl} alt='' />
				</p>
			</div>
			<button className='modal-close is-large' aria-label='close' onClick={onClick}></button>
		</div>
	)
}