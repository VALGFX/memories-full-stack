import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const ProductCard = ({ id, image, name, price }) => {
	const { currency } = useContext(ShopContext)

	return (
		<div
			className='relative bg-white shadow-lg rounded-xl p-5 flex flex-col items-center transition-transform duration-300 hover:shadow-2xl hover:scale-105'
			style={{
				width: '280px',
				height: '400px', // Am păstrat o înălțime fixă pentru a rămâne uniform
			}}
		>
			{/* Imaginea produsului */}
			<Link to={`/product/${id}`} onClick={() => scrollTo(0, 0)}>
				<div
					className='flex items-center justify-center overflow-hidden rounded-xl'
					style={{ width: '220px', height: '220px' }}
				>
					<img
						src={image[0]}
						alt={name}
						className='object-contain w-full h-full transform transition-transform duration-300 hover:scale-105'
					/>
				</div>
			</Link>

			{/* Detalii produs */}
			<div className='w-full text-center m-4'>
				<p className='text-xl font-semibold text-gray-800 mb-2 break-words'>
					{name}
				</p>
			</div>

			{/* Prețul și butonul de adăugare în coș pe aceeași linie */}
			<div className='w-full flex items-center justify-between mb-4'>
				{/* Prețul */}
				<div className='border-2 border-gray-300 rounded-lg px-10 py-2'>
					<p className='text-lg font-medium text-black'>
						{price} {currency}
					</p>
				</div>
				{/* Butonul de adăugare în coș */}
				<button className='flex items-center justify-center w-12 h-12 rounded-xl bg-black text-white transition-transform duration-300 hover:scale-110'>
					<img src={assets.cart_icon_2} className='w-6' alt='Add to cart' />
				</button>
			</div>
		</div>
	)
}

export default ProductCard
