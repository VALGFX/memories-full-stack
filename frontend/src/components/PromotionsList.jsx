import React from 'react'
import { assets } from '../assets/assets'
import PromotionCard from '../components/PromotionCard'

const PromotionsList = () => {
	const promotions = [
		{
			id: 1,
			name: ' STUDENT & ÎNCREDERE',
			endDate: new Date('2025-10-8T00:00:00'),
			image: assets.spring_img,
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
