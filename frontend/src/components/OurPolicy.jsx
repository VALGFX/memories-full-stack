import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
	return (
		<div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
			<div>
				<img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt='' />
				<p className=' font-semibold'>Politică de schimb ușor Policy</p>
				<p className=' text-gray-400'>
					Oferim o politică de schimb fără probleme
				</p>
			</div>
			<div>
				<img src={assets.quality_icon} className='w-12 m-auto mb-5' alt='' />
				<p className=' font-semibold'> Politica de returnare de 7 zile</p>
				<p className=' text-gray-400'>
					Oferim o politică de returnare gratuită de 7 zile
				</p>
			</div>
			<div>
				<img src={assets.support_img} className='w-12 m-auto mb-5' alt='' />
				<p className=' font-semibold'>Cel mai bun suport pentru clienți</p>
				<p className=' text-gray-400'>oferim asistență clienți 8:00 - 17:00</p>
			</div>
		</div>
	)
}

export default OurPolicy
