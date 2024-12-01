import React from 'react'
import BestSeller from '../components/BestSeller'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import NewsletterBox from '../components/NewsletterBox'
import OurPolicy from '../components/OurPolicy'
import NewCollection from '../components/NewCollection'

const Home = () => {
	return (
		<div>
			<Hero />
			<LatestCollection />
			<BestSeller />
			<OurPolicy />
			<NewsletterBox />
		</div>
	)
}

export default Home
