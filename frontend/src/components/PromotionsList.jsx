import React from 'react'
import { assets } from '../assets/assets'
import PromotionCard from '../components/PromotionCard'

const PromotionsList = () => {
	const promotions = [
		{
			id: 1,
			name: ' STUDENT & ÎNCREDERE',
			endDate: new Date('2024-11-18T00:00:00'),
			image: assets.student_img,
		},
		{
			id: 2,
			name: 'Black Friday - Reduceri de până la 50%!',
			endDate: new Date('2024-11-29T00:00:00'),
			image: assets.hero_img,
		},
	]

	return (
		<div className='grid gap-8 grid-cols-1'>
			{' '}
			{/* Asigurăm o coloană per rând */}
			{promotions.map(promotion => (
				<PromotionCard key={promotion.id} promotion={promotion} />
			))}
		</div>
	)
}

export default PromotionsList
