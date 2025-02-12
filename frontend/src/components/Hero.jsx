import { assets } from '../assets/assets.js'

const Hero = () => {
	return (
		<div className='w-full h-auto mt-[20px]'>
			<video
				className='w-full h-[514px] object-cover  rounded-xl'
				src={assets.hero_img}
				autoPlay
				loop
				muted
				playsInline
			/>
		</div>
	)
}

export default Hero
