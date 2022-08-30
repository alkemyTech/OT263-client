import React from 'react'
import Card from './Card'

import { BsNewspaper, BsPeopleFill, BsDiagram3 } from 'react-icons/bs'
import { FaPeopleCarry } from 'react-icons/fa'
import { GiTalk } from 'react-icons/gi'
import { GoChecklist } from 'react-icons/go'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { TbSlideshow } from 'react-icons/tb'

import { routes } from '../../Config/routes'

const Cards = () => {
	return (
		<div className='container has-text-centered'>
			<div className='columns is-multiline is-8-tablet'>
				<Card title={'novedades'} link={routes.admin.news}>
					<BsNewspaper size={'5rem'} color={'black'} />
				</Card>
				<Card title={'actividades'} link={routes.admin.activities}>
					<GoChecklist size={'5rem'} color={'black'} />
				</Card>
				<Card title={'categorias'} link={routes.admin.categories}>
					<HiOutlineClipboardList size={'5rem'} color={'black'} />
				</Card>
				<Card title={'testimonios'} link={routes.admin.testimonials}>
					<GiTalk size={'5rem'} color={'black'} />
				</Card>
				<Card title={'organización'} link={routes.admin.organization}>
					<BsDiagram3 size={'5rem'} color={'black'} />
				</Card>
				<Card title={'slides'} link={routes.admin.slides}>
					<TbSlideshow size={'5rem'} color={'black'} />
				</Card>
				<Card title={'usuarios'} link={routes.admin.users}>
					<BsPeopleFill size={'5rem'} color={'black'} />
				</Card>
				<Card title={'miembros'} link={routes.admin.members}>
					<FaPeopleCarry size={'5rem'} color={'black'} />
				</Card>
			</div>
		</div>
	)
}

export default Cards
