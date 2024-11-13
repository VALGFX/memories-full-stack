import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const ProductItem = ({ id, image, name, price }) => {
	const { currency } = useContext(ShopContext)

	return (
		<Link
			onClick={() => scrollTo(0, 0)}
			className='group block p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105'
			to={`/product/${id}`}
		>
			<div className='relative overflow-hidden rounded-lg'>
				<img
					className='w-full h-64 object-contain group-hover:scale-105 transition-transform duration-300 ease-in-out'
					src={image[0]}
					alt={name}
				/>
			</div>
			<div className='pt-4 pb-2'>
				<p className='text-lg font-semibold text-gray-800 truncate'>{name}</p>
				<p className='text-sm font-medium text-gray-600'>
					{price} {currency}
				</p>
			</div>
		</Link>
	)
}

export default ProductItem
