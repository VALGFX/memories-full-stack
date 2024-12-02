import { assets } from '../assets/assets.js';

const Hero = () => {
	return (
		<div className="w-full h-auto">
			<video
				className="w-full h-full object-cover"
				src={assets.hero_img}
				autoPlay
				loop
				muted
				playsInline
			/>
		</div>
	);
};

export default Hero;
