import React, { useEffect, useState } from 'react'

const Countdown = ({ endDate }) => {
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

	function calculateTimeLeft() {
		const difference = endDate - new Date()
		let timeLeft = {}

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			}
		}
		return timeLeft
	}

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft())
		}, 1000)

		return () => clearInterval(timer)
	}, [endDate])

	return (
		<div className='flex gap-2 mt-4 text-gray-800'>
			{timeLeft.days !== undefined ? (
				<>
					<TimeBox label='Zile' value={timeLeft.days} />
					<TimeBox label='Ore' value={timeLeft.hours} />
					<TimeBox label='Minute' value={timeLeft.minutes} />
					<TimeBox label='Secunde' value={timeLeft.seconds} />
				</>
			) : (
				<span>Promoția a expirat!</span>
			)}
		</div>
	)
}

const TimeBox = ({ label, value }) => (
	<div className='flex flex-col items-center p-2 bg-gray-200 rounded-lg w-16'>
		<span className='font-semibold text-lg'>{value}</span>
		<span className='text-xs text-gray-500'>{label}</span>
	</div>
)

export default Countdown
