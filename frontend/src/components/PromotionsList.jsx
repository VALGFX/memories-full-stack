import React from 'react'
import { assets } from '../assets/assets'
import PromotionCard from '../components/PromotionCard'

const PromotionsList = () => {
	// Lista de promoții este goală momentan
	const promotions = []

	return (
		<div className='grid gap-8 grid-cols-1'>
			{/* Dacă nu există promoții, afișăm un mesaj */}
			{promotions.length === 0 ? (
				<p className='text-center text-gray-500'>Momentan nu sunt promoții disponibile.</p>
			) : (
				promotions.map(promotion => (
					<PromotionCard key={promotion.id} promotion={promotion} />
				))
			)}
		</div>
	)
}

export default PromotionsList
