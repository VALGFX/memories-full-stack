import React from 'react'
import Countdown from '../components/Countdown'

const PromotionCard = ({ promotion }) => {
	return (
		<div className='w-full h-auto mt-[20px] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row border border-gray-200 hover:shadow-xl transition-shadow duration-300'>
			{/* Informațiile despre promoție - Stânga */}
			<div className='p-6 flex flex-col justify-center md:w-1/2'>
				<h2 className='text-2xl font-semibold text-gray-800 mb-2'>
					{promotion.name}
				</h2>
				<p className='text-gray-600 text-base mb-4'>Promoția se începe în :</p>
				<Countdown endDate={promotion.endDate} />
			</div>

			{/* Imaginea promoției - Dreapta */}
			<div className='relative md:w-auto h-56 md:h-[514px]'>
				<img
					src={promotion.image}
					alt={promotion.name}
					className='object-cover w-full h-full rounded-lg transform transition-transform duration-300 hover:scale-105'
				/>
			</div>
		</div>
	)
}

export default PromotionCard
