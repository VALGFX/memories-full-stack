import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
	return (
		<div>
			<div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
				<div>
					<img src={assets.logo} className='mb-5 w-32' alt='' />
					<p className='w-full md:w-2/3 text-gray-600'>
						La Memories, ne dedicăm furnizării celor mai bune produse și
						servicii pentru clienții noștri. Misiunea noastră este de a aduce
						calitate și satisfacție prin fiecare experiență pe care o oferim.
					</p>
				</div>

				<div>
					<p className='text-xl font-medium mb-5'>COMPANY</p>
					<ul className='flex flex-col gap-1 text-gray-600'>
						<li>Acasă</li>
						<li>Despre noi</li>
						<li>Livrare</li>
						<li>Politica de confidențialitate</li>
					</ul>
				</div>

				<div>
					<p className='text-xl font-medium mb-5'>CONTACTE</p>
					<ul className='flex flex-col gap-1 text-gray-600'>
						<li>+373 (67) 553659</li>
						<li>parfum.memories@gmail.com</li>
					</ul>
				</div>
			</div>

			<div>
				<hr />
				<p className='py-5 text-sm text-center'>
					Copyright 2024@ fe-memories-srl.vercel.app - All Right Reserved.
				</p>
			</div>
		</div>
	)
}

export default Footer
