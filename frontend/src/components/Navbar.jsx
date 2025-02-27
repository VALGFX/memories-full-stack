import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
	const [visible, setVisible] = useState(false)
	const { setShowSearch, getCartCount, navigate } = useContext(ShopContext)

	return (
		<div className='sticky top-0 z-50 flex items-center justify-between py-5 font-medium bg-[#131010] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
			<Link to='/'>
				<img src={assets.logo} className='w-36' alt='Logo' />
			</Link>

			{/* Meniu pentru ecrane mari */}
			<ul className='hidden sm:flex gap-5 text-sm text-white'>
				{['/', '/collection', '/promotions', '/about', '/contact'].map(
					(path, index) => (
						<NavLink
							key={index}
							to={path}
							className='flex flex-col items-center gap-1'
						>
							<p>
								{
									['ACASĂ', 'PRODUSE', 'PROMOȚII', 'DESPRE NOI', 'CONTACT'][
										index
									]
								}
							</p>
							<hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
						</NavLink>
					)
				)}
			</ul>

			{/* Elemente din dreapta */}
			<div className='flex items-center gap-6'>
				{/* Buton de căutare */}
				<div className='p-2 rounded-lg bg-black drop-shadow-md'>
					<img
						onClick={() => {
							setShowSearch(true)
							navigate('/collection')
						}}
						src={assets.search_icon}
						className='w-5 cursor-pointer'
						alt='Search'
					/>
				</div>

				{/* Buton coș cumpărături */}
				<div className='p-2 relative rounded-lg bg-black drop-shadow-md'>
					<Link to='/cart'>
						<img src={assets.cart_icon_2} className='w-5' alt='Cart' />
						<span className='absolute right-[-5px] bottom-[-5px] w-4 text-center bg-red-500 text-white rounded-full text-xs'>
							{getCartCount()}
						</span>
					</Link>
				</div>

				{/* Buton meniu mobil */}
				<img
					onClick={() => setVisible(true)}
					src={assets.menu_icon}
					className='w-6 cursor-pointer sm:hidden drop-shadow-md'
					alt='Menu'
				/>
			</div>

			{/* Sidebar mobil */}
			<div
				className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 flex flex-col items-center justify-center text-white text-xl transition-transform duration-300 ${
					visible ? 'translate-x-0' : '-translate-x-full'
				}`}
				style={{ zIndex: 100 }}
			>
				{/* Buton de închidere */}
				<div
					onClick={() => setVisible(false)}
					className='absolute top-5 right-5 cursor-pointer'
				>
					<img src={assets.close_icon} className='w-6' alt='Close' />
				</div>

				{/* Link-uri meniu */}
				<nav className='flex flex-col gap-6 text-center'>
					{['/', '/collection', '/promotions', '/about', '/contact'].map(
						(path, index) => (
							<NavLink
								key={index}
								onClick={() => setVisible(false)}
								to={path}
								className='hover:text-gray-300 transition-colors'
							>
								{
									['ACASĂ', 'PRODUSE', 'PROMOȚII', 'DESPRE NOI', 'CONTACT'][
										index
									]
								}
							</NavLink>
						)
					)}
				</nav>
			</div>
		</div>
	)
}

export default Navbar
