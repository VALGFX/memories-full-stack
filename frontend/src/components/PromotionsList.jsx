import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import PromotionCard from '../components/PromotionCard'

const PromotionsList = () => {
	const promotions = [
		{
			id: 1,
			name: '*Magia Zilei de 8 Martie',
			startDate: new Date('2025-03-08T00:00:00'), // Folosește startDate în loc de endDate
			image: assets.spring_img,
			id: 2,
			name: '*Magia Zilei de primavara',
			startDate: new Date('2025-04-01T00:00:00'), // Folosește startDate în loc de endDate
			image: assets.springs_img,
		},
	]

	const [timeRemaining, setTimeRemaining] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	})

	// Funcția care calculează diferența de timp
	const calculateTimeRemaining = () => {
		const currentDate = new Date()
		const startDate = promotions[0].startDate
		const timeDifference = startDate - currentDate

		if (timeDifference > 0) {
			const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
			const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
			const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
			const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

			setTimeRemaining({ days, hours, minutes, seconds })
		}
	}

	// Setăm intervalul pentru a actualiza timpul rămas la fiecare secundă
	useEffect(() => {
		calculateTimeRemaining()
		const intervalId = setInterval(calculateTimeRemaining, 1000)

		// Curățăm intervalul când componenta este dezmontată
		return () => clearInterval(intervalId)
	}, [])

	return (
		<div className='grid gap-8 grid-cols-1'>
			{/* Asigurăm o coloană per rând */}
			{promotions.map(promotion => (
				<PromotionCard 
					key={promotion.id} 
					promotion={promotion} 
					timeRemaining={timeRemaining} // Transmite timpul rămas către PromotionCard
				/>
			))}
		</div>
	)
}
