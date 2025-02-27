import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const ProductCard = ({ id, image, name, price }) => {
	const { currency, addToCart } = useContext(ShopContext)

	const handleAddToCart = () => {
		const size = '50 ml' // Dimensiune implicită
		addToCart(id, size)
	}

	return (
		<div
			className='w-full max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm bg-white shadow-md rounded-xl p-4 sm:p-5 flex flex-col items-center 
		transition-transform duration-300 hover:shadow-2xl hover:scale-[1.03]'
		>
			{/* Imaginea produsului */}
			<Link
				to={`/product/${id}`}
				onClick={() => scrollTo(0, 0)}
				className='w-full flex justify-center'
			>
				<div className='relative overflow-hidden rounded-xl w-full h-40 sm:h-48 md:h-56'>
					<img
						src={image[0]}
						alt={name}
						className='object-contain w-full h-full transform transition-transform duration-300 hover:scale-105'
					/>
				</div>
			</Link>

			{/* Detalii produs */}
			<div className='w-full text-center mt-4'>
				<p className='text-md sm:text-lg md:text-xl font-semibold text-gray-800 line-clamp-2'>
					{name}
				</p>
			</div>

			{/* Preț și buton de adăugare în coș */}
			<div className='w-full flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-5 mt-4'>
				{/* Preț */}
				<div className='border-2 border-gray-300 rounded-lg px-6 py-2'>
					<p className='text-sm sm:text-lg font-medium text-black'>
						{price} {currency}
					</p>
				</div>

				{/* Buton Adaugă în coș */}
				<button
					onClick={handleAddToCart}
					className='flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-black text-white 
					transition-transform duration-300 hover:scale-110 shadow-md'
				>
					<img
						src={assets.cart_icon_2}
						className='w-5 sm:w-6'
						alt='Add to cart'
					/>
				</button>
			</div>
		</div>
	)
}

export default ProductCard
