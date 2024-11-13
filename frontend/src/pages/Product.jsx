import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'
import { ShopContext } from '../context/ShopContext'

const Product = () => {
	const { productId } = useParams()
	const { products, currency, addToCart } = useContext(ShopContext)
	const [productData, setProductData] = useState(false)
	const [image, setImage] = useState('')
	const [size, setSize] = useState('')
	const [price, setPrice] = useState(0)

	const fetchProductData = async () => {
		products.map(item => {
			if (item._id === productId) {
				setProductData(item)
				setImage(item.image[0])
				setPrice(item.price) // Setăm prețul inițial
				return null
			}
		})
	}

	// Funcție pentru a calcula prețul în funcție de dimensiune
	const calculatePrice = selectedSize => {
		let newPrice = productData.price
		if (selectedSize === '30ml') {
			newPrice = newPrice * 0.6 // pentru M se înmulțește cu 1.6
		} else if (selectedSize === '100ml') {
			newPrice = newPrice * 2 // pentru L se înmulțește cu 2
		}
		setPrice(newPrice) // Actualizăm prețul
	}

	useEffect(() => {
		fetchProductData()
	}, [productId, products])

	return productData ? (
		<div className='pt-10 transition-opacity ease-in duration-500'>
			{/*----------- Product Data-------------- */}
			<div className='flex gap-8 sm:gap-12 flex-col sm:flex-row'>
				{/*---------- Product Images------------- */}
				<div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
					<div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
						{productData.image.map((item, index) => (
							<img
								onClick={() => setImage(item)}
								src={item}
								key={index}
								className='w-[20%] sm:w-[30%] sm:mb-3 flex-shrink-0 cursor-pointer hover:opacity-75 transition-all'
								alt={`product image ${index}`}
							/>
						))}
					</div>
					<div className='w-full sm:w-[80%]'>
						<img
							className='w-full h-auto object-contain'
							src={image}
							alt='main product image'
						/>
					</div>
				</div>

				{/* -------- Product Info ---------- */}
				<div className='flex-1'>
					<h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
					<div className='flex items-center gap-1 mt-2'>
						<img src={assets.star_icon} alt='' className='w-4' />
						<img src={assets.star_icon} alt='' className='w-4' />
						<img src={assets.star_icon} alt='' className='w-4' />
						<img src={assets.star_icon} alt='' className='w-4' />
						<img src={assets.star_dull_icon} alt='' className='w-4' />
						<p className='pl-2'>(122)</p>
					</div>
					<p className='mt-5 text-3xl font-medium'>
						{price}
						{currency}
					</p>
					<p className='mt-5 text-gray-500 md:w-4/5'>
						{productData.description.split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br />
							</React.Fragment>
						))}
					</p>
					<div className='flex flex-col gap-4 my-8'>
						<p>Select Size</p>
						<div className='flex gap-2'>
							{productData.sizes.map((item, index) => (
								<button
									onClick={() => {
										setSize(item)
										calculatePrice(item) // Actualizăm prețul când se selectează o dimensiune
									}}
									className={`border py-2 px-4 bg-gray-100 text-sm ${
										item === size ? 'border-orange-500' : ''
									}`}
									key={index}
								>
									{item}
								</button>
							))}
						</div>
					</div>
					<button
						onClick={() => addToCart(productData._id, size)}
						className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
					>
						ADD TO CART
					</button>
					<hr className='mt-8 sm:w-4/5' />
					<div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
						<p>100% Original product.</p>
						<p>Cash on delivery is available on this product.</p>
						<p>Easy return and exchange policy within 7 days.</p>
					</div>
				</div>
			</div>

			{/* ---------- Description & Review Section ------------- */}
			<div className='mt-20'>
				<div className='flex'>
					<b className='border px-5 py-3 text-sm'>Description</b>
					<p className='border px-5 py-3 text-sm'>Reviews (122)</p>
				</div>
				<div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
					<p>
						An e-commerce website is an online platform that facilitates the
						buying and selling of products or services over the internet...
					</p>
					<p>
						E-commerce websites typically display products or services along
						with detailed descriptions, images, prices, and any available
						variations...
					</p>
				</div>
			</div>

			{/* --------- display related products ---------- */}
			<RelatedProducts
				category={productData.category}
				subCategory={productData.subCategory}
			/>
		</div>
	) : (
		<div className='opacity-0'></div>
	)
}

export default Product
