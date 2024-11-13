import { assets } from '../assets/assets.js'

const Divider = ({ width = 'w-8', color = '#414141' }) => (
	<div className={`${width} h-[2px]`} style={{ backgroundColor: color }} />
)

const Hero = () => {
	return (
		<div className='flex flex-col sm:flex-row border border-gray-400'>
			{/* Secțiunea din stânga */}
			<div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
				<div className='text-[#414141] text-center sm:text-left'>
					<div className='flex items-center gap-2'>
						<Divider width='w-8 md:w-11' />
						<p className='font-medium text-sm md:text-base'>CELE MAI VÂNDUTE</p>
					</div>
					<h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>
						Pour Femme
					</h1>
					<div className='flex items-center gap-2 cursor-pointer'>
						<p className='font-semibold text-sm md:text-base hover:underline'>
							CUMPĂRĂ ACUM
						</p>
						<Divider width='w-8 md:w-11' />
					</div>
				</div>
			</div>
			{/* Secțiunea din dreapta */}
			<img
				src={assets.hero_img}
				className='w-full sm:w-1/2 object-cover'
				alt='Imagine promoțională Pour Femme'
			/>
		</div>
	)
}

export default Hero
