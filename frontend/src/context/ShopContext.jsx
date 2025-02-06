import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const ShopContext = createContext()

const ShopContextProvider = props => {
	const currency = 'MDL'
	const delivery_fee = 0
	const backendUrl = import.meta.env.VITE_BACKEND_URL
	const [search, setSearch] = useState('')
	const [showSearch, setShowSearch] = useState(false)
	const [cartItems, setCartItems] = useState({})
	const [products, setProducts] = useState([])import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const ShopContext = createContext()

const ShopContextProvider = props => {
	const currency = 'MDL'
	const delivery_fee = 0
	const backendUrl = import.meta.env.VITE_BACKEND_URL
	const [search, setSearch] = useState('')
	const [showSearch, setShowSearch] = useState(false)
	const [cartItems, setCartItems] = useState({})
	const [products, setProducts] = useState([])
	const [token, setToken] = useState('')
	const navigate = useNavigate()

	const addToCart = async (itemId, size) => {
		if (!size) {
			toast.error('Select Product Size')
			return
		}

		let cartData = structuredClone(cartItems)

		if (cartData[itemId]) {
			if (cartData[itemId][size]) {
				cartData[itemId][size] += 1
			} else {
				cartData[itemId][size] = 1
			}
		} else {
			cartData[itemId] = {}
			cartData[itemId][size] = 1
		}
		setCartItems(cartData)

		if (token) {
			try {
				await axios.post(
					backendUrl + '/api/cart/add',
					{ itemId, size },
					{ headers: { token } }
				)
			} catch (error) {
				console.log(error)
				toast.error(error.message)
			}
		}
	}

	const getCartCount = () => {
		let totalCount = 0
		for (const items in cartItems) {
			for (const item in cartItems[items]) {
				try {
					if (cartItems[items][item] > 0) {
						totalCount += cartItems[items][item]
					}
				} catch (error) {}
			}
		}
		return totalCount
	}

	const updateQuantity = async (itemId, size, quantity) => {
		let cartData = structuredClone(cartItems)

		cartData[itemId][size] = quantity

		setCartItems(cartData)

		if (token) {
			try {
				await axios.post(
					backendUrl + '/api/cart/update',
					{ itemId, size, quantity },
					{ headers: { token } }
				)
			} catch (error) {
				console.log(error)
				toast.error(error.message)
			}
		}
	}

	const getCartAmount = () => {
		let totalAmount = 0
		for (const items in cartItems) {
			let itemInfo = products.find(product => product._id === items)
			for (const item in cartItems[items]) {
				try {
					if (cartItems[items][item] > 0) {
						totalAmount += itemInfo.price * cartItems[items][item]
					}
				} catch (error) {}
			}
		}
		return totalAmount
	}

	const getProductsData = async () => {
		try {
			const response = await axios.get(backendUrl + '/api/product/list')
			if (response.data.success) {
				setProducts(response.data.products.reverse())
			} else {
				toast.error(response.data.message)
			}
		} catch (error) {
			console.log(error)
			toast.error(error.message)
		}
	}

	const getUserCart = async token => {
		try {
			const response = await axios.post(
				backendUrl + '/api/cart/get',
				{},
				{ headers: { token } }
			)
			if (response.data.success) {
				setCartItems(response.data.cartData)
			}
		} catch (error) {
			console.log(error)
			toast.error(error.message)
		}
	}

	useEffect(() => {
		getProductsData()
	}, [])

	useEffect(() => {
		if (!token && localStorage.getItem('token')) {
			setToken(localStorage.getItem('token'))
			getUserCart(localStorage.getItem('token'))
		}
		if (token) {
			getUserCart(token)
		}
	}, [token])

	const value = {
		products,
		currency,
		delivery_fee,
		search,
		setSearch,
		showSearch,
		setShowSearch,
		cartItems,
		addToCart,
		setCartItems,
		getCartCount,
		updateQuantity,
		getCartAmount,
		navigate,
		backendUrl,
		setToken,
		token,
	}

	return (
		<ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
	)
}

export default ShopContextProvider

	const [sortedProducts, setSortedProducts] = useState([]) // 🔥 Produsele sortate
	const [token, setToken] = useState('')
	const navigate = useNavigate()

	// 🔥 Funcție pentru sortarea produselor
	const sortProducts = (type) => {
		let sorted = [...products]

		switch (type) {
			case 'newest':
				sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
				break
			case 'popular':
				sorted.sort((a, b) => b.popularity - a.popularity) // Sortare descrescătoare
				break
			default:
				sorted = [...products]
		}

		setSortedProducts(sorted)
	}

	// 🔥 Funcție pentru a obține produsele de pe backend
	const getProductsData = async () => {
		try {
			const response = await axios.get(backendUrl + '/api/product/list')
			if (response.data.success) {
				const fetchedProducts = response.data.products.reverse() // Cele mai noi sunt primele
				setProducts(fetchedProducts)
				setSortedProducts(fetchedProducts) // Inițializare
			} else {
				toast.error(response.data.message)
			}
		} catch (error) {
			console.log(error)
			toast.error(error.message)
		}
	}

	// 🔥 Când produsele se schimbă, aplicăm sortarea curentă
	useEffect(() => {
		sortProducts('newest') // Implicit: cele mai noi produse
	}, [products])

	useEffect(() => {
		getProductsData()
	}, [])

	useEffect(() => {
		if (!token && localStorage.getItem('token')) {
			setToken(localStorage.getItem('token'))
			getUserCart(localStorage.getItem('token'))
		}
		if (token) {
			getUserCart(token)
		}
	}, [token])

	const value = {
		products: sortedProducts, // 🔥 Folosim produsele sortate
		sortProducts, // 🔥 Expunem funcția pentru Collection.js
		currency,
		delivery_fee,
		search,
		setSearch,
		showSearch,
		setShowSearch,
		cartItems,
		addToCart,
		setCartItems,
		getCartCount,
		updateQuantity,
		getCartAmount,
		navigate,
		backendUrl,
		setToken,
		token,
	}

	return (
		<ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
	)
}

export default ShopContextProvider
