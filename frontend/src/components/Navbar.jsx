import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
	const [visible, setVisible] = useState(false)
	const { setShowSearch, getCartCount, navigate } = useContext(ShopContext)

	return (
		<div className='sticky top-0 z-50 flex items-center justify-between py-5 font-medium bg-[#131010] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] dar'>
			<Link to='/'>
				<img src={assets.logo} className='w-36' alt='Logo' />
			</Link>

			<ul className='hidden sm:flex gap-5 text-sm text-white'>
				<NavLink to='/' className='flex flex-col items-center gap-1'>
					<p>ACASĂ</p>
					<hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
				</NavLink>
				<NavLink to='/collection' className='flex flex-col items-center gap-1'>
					<p>PRODUSE</p>
					<hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
				</NavLink>
				<NavLink to='/promotions' className='flex flex-col items-center gap-1'>
					<p>PROMOȚII</p>
					<hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
				</NavLink>
				<NavLink to='/about' className='flex flex-col items-center gap-1'>
					<p>DESPRE NOI</p>
					<hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
				</NavLink>
				<NavLink to='/contact' className='flex flex-col items-center gap-1'>
					<p>CONTACT</p>
					<hr className='w-2/4 border-none h-[1.5px] bg-white hidden' />
				</NavLink>
			</ul>

			<div className='flex items-center gap-6'>
				{/* Search Block */}
				<div className='flex items-center space-x-5'>
					<div className='p-2 rounded-lg bg-black drop-shadow-[1px_1px_10px_rgba(255,255,255,0.6)]'>
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
				</div>

				{/* Cart Block */}
				<div className='flex items-center space-x-5'>
					<div className='p-2 rounded-lg bg-black drop-shadow-[1px_1px_10px_rgba(255,255,255,0.6)]'>
						<Link to='/cart' className='relative'>
							<img
								src={assets.cart_icon_2}
								className='w-5 min-w-5'
								alt='Cart'
							/>
							<p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
								{getCartCount()}
							</p>
						</Link>
					</div>
				</div>

				{/* Menu Icon */}
				<img
					onClick={() => setVisible(true)}
					src={assets.menu_icon}
					className='w-5 cursor-pointer drop-shadow-[1px_1px_10px_rgba(255,255,255,0.4)] sm:hidden'
					alt='Menu'
				/>
			</div>

			{/* Sidebar menu for small screens */}
			<div
				className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-black transition-all ${
					visible ? 'w-full' : 'w-0'
				}`}
			>
				<div className='flex flex-col text-white'>
					<div
						onClick={() => setVisible(false)}
						className='flex items-center gap-4 p-3 cursor-pointer'
					>
						<img
							className='h-4 rotate-180 drop-shadow-[1px_1px_10px_rgba(255,255,255,0.4)]'
							src={assets.dropdown_icon}
							alt='Back'
						/>
						<p>Back</p>
					</div>
					<NavLink
						onClick={() => setVisible(false)}
						className='py-2 pl-6 border-t border-white'
						to='/'
					>
						ACASĂ
					</NavLink>
					<NavLink
						onClick={() => setVisible(false)}
						className='py-2 pl-6 border-t border-white'
						to='/collection'
					>
						PRODUSE
					</NavLink>
					<NavLink
						onClick={() => setVisible(false)}
						className='py-2 pl-6 border-t border-white'
						to='/promotions'
					>
						PROMOȚII
					</NavLink>
					<NavLink
						onClick={() => setVisible(false)}
						className='py-2 pl-6 border-t border-white'
						to='/about'
					>
						DESPRE NOI
					</NavLink>
					<NavLink
						onClick={() => setVisible(false)}
						className='py-2 pl-6 border-t border-white'
						to='/contact'
					>
						CONTACT
					</NavLink>
				</div>
			</div>
		</div>
	)
}

export default Navbar
