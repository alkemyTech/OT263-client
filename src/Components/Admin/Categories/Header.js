import { VscNewFile } from 'react-icons/vsc'

export default function Header({ onClick }) {
	return (
		<thead>
			<tr>
				<th>
					<abbr title='Número'>N°</abbr>
				</th>
				<th>Nombre</th>				
				<th>Mensaje</th>
				<th>
					<div className='buttons has-addons is-flex is-flex-wrap-nowrap'>
						<button className='button' onClick={onClick}>
							<span className='icon'>
								<VscNewFile />{' '}
							</span>
							<span>Nuevo</span>
						</button>
					</div>
				</th>
			</tr>
		</thead>
	)
}