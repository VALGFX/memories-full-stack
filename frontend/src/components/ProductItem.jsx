import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const ProductCard = ({ id, image, name, price }) => {
	const { currency, addToCart } = useContext(ShopContext)

	const handleAddToCart = () => {
		const size = '50 ml' // Dimensiunea implicită
		addToCart(id, size)
	}

	return (
		<div
			className='relative bg-white shadow-lg rounded-xl p-5 flex flex-col items-center 
			transition-transform duration-300 hover:shadow-2xl hover:scale-105 
			w-full sm:w-64 md:w-72 lg:w-80 h-auto mb-5' // Adaugă spațiere între carduri
		>
			{/* Imaginea produsului */}
			<Link to={`/product/${id}`} onClick={() => scrollTo(0, 0)}>
				<div className='flex items-center justify-center overflow-hidden rounded-xl w-full sm:w-48 md:w-56 lg:w-64 h-40 sm:h-44 md:h-52'>
					<img
						src={image[0]}
						alt={name}
						className='object-contain w-full h-full transform transition-transform duration-300 hover:scale-105'
					/>
				</div>
			</Link>

			{/* Detalii produs */}
			<div className='w-full text-center mt-4'>
				<p className='text-lg sm:text-xl font-semibold text-gray-800 mb-2 break-words'>{name}</p>
			</div>

			{/* Prețul și butonul de adăugare în coș */}
			<div className='w-full flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-5 mt-4'>
				{/* Prețul */}
				<div className='border-2 border-gray-300 rounded-lg px-6 py-2'>
					<p className='text-md sm:text-lg font-medium text-black'>{price} {currency}</p>
				</div>
				{/* Butonul de adăugare în coș */}
				<button
					onClick={handleAddToCart}
					className='flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-black text-white transition-transform duration-300 hover:scale-110'
				>
					<img src={assets.cart_icon_2} className='w-5 sm:w-6' alt='Add to cart' />
				</button>
			</div>
		</div>
	)
}

export default ProductCard
