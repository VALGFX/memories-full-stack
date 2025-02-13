import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import { ShopContext } from '../context/ShopContext'

const ProductList = () => {
	const { products } = useContext(ShopContext)

	return (
		<div className='container mx-auto px-4'>
			<h2 className='text-3xl font-bold text-center my-6'>Produsele Noastre</h2>

			{/* Grid cu 20px spațiere între produse */}
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
				{products.map((product) => (
					<ProductCard key={product.id} {...product} />
				))}
			</div>
		</div>
	)
}

export default ProductList
