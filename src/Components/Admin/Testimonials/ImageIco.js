import { BsCardImage } from 'react-icons/bs'
import { MdOutlineImageNotSupported } from 'react-icons/md'

export default function ImageIcon({ showModal, hasImage }) {
	return (
		<abbr title='Mostrar Imagen' style={{ textDecoration: 'none' }}>
			<span className='icon' onClick={showModal} style={{ cursor: 'pointer' }}>
				{hasImage ? <BsCardImage /> : <MdOutlineImageNotSupported />}
			</span>
		</abbr>
	)
}