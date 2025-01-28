import React from 'react'
import { assets } from '../assets/assets'
import PromotionCard from '../components/PromotionCard'

const PromotionsList = () => {
	const promotions = [
		{
			{/* Asigurăm o coloană per rând *
			id: 2,
			name: 'MERRY CHRISTMAS',
			endDate: new Date('2024-12-20T00:00:00'),
			image: assets.christmas_img,*/}
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
