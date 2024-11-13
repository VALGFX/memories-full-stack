import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = ({ discount }) => {
	const { currency, delivery_fee, cartItems, products } =
		useContext(ShopContext)

	const getCartAmount = () => {
		let totalAmount = 0
		for (const item in cartItems) {
			for (const size in cartItems[item]) {
				const quantity = cartItems[item][size]
				if (quantity > 0) {
					const product = products.find(product => product._id === item)
					if (product) {
						let price = product.price
						if (size === 'S') price *= 0.6
						else if (size === 'L') price *= 2
						totalAmount += price * quantity
					}
				}
			}
		}
		return totalAmount
	}

	const totalAmount = getCartAmount()
	const discountedAmount = totalAmount * (1 - discount / 100)

	return (
		<div className='w-full'>
			<div className='text-2xl'>
				<Title text1={'TOTAL'} text2={'CUMPĂRĂTURI'} />
			</div>

			<div className='flex flex-col gap-2 mt-2 text-sm'>
				<div className='flex justify-between'>
					<p>Subtotal</p>
					<p>
						{totalAmount.toFixed(2)} {currency}
					</p>
				</div>

				{discount > 0 && (
					<div className='flex justify-between'>
						<p>Reducere</p>
						<p>
							-{(totalAmount - discountedAmount).toFixed(2)} {currency}
						</p>
					</div>
				)}

				<hr />
				<div className='flex justify-between'>
					<p>Taxa de livrare</p>
					<p>
						{delivery_fee} {currency}
					</p>
				</div>
				<hr />
				<div className='flex justify-between'>
					<b>Total</b>
					<b>
						{(discountedAmount + delivery_fee).toFixed(2)} {currency}
					</b>
				</div>
			</div>
		</div>
	)
}

export default CartTotal
