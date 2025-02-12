import axios from 'axios'
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const Header = () => {
	const [currentState, setCurrentState] = useState('Login')
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { token, setToken, navigate, backendUrl } = useContext(ShopContext)

	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')

	const logoutHandler = () => {
		setToken(null)
		localStorage.removeItem('token')
		navigate('/')
	}

	const onSubmitHandler = async event => {
		event.preventDefault()
		try {
			if (currentState === 'Sign Up') {
				const response = await axios.post(backendUrl + '/api/user/register', {
					name,
					email,
					password,
				})
				if (response.data.success) {
					setToken(response.data.token)
					localStorage.setItem('token', response.data.token)
					setIsModalOpen(false)
				} else {
					toast.error(response.data.message)
				}
			} else {
				const response = await axios.post(backendUrl + '/api/user/login', {
					email,
					password,
				})
				if (response.data.success) {
					setToken(response.data.token)
					localStorage.setItem('token', response.data.token)
					setIsModalOpen(false)
				} else {
					toast.error(response.data.message)
				}
			}
		} catch (error) {
			console.log(error)
			toast.error(error.message)
		}
	}

	const openModal = type => {
		setCurrentState(type)
		setIsModalOpen(true)
	}

	const goToOrders = () => {
		navigate('/orders')
	}

	return (
		<>
			<header
				className='flex justify-between items-center bg-white p-4 border-b border-gray-200 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[7vw] 
			'
			>
				{/* Stânga: Informații Contact */}
				<div className='flex items-center space-x-5'>
					<div className='p-2 rounded-lg bg-white shadow-md'>
						<img src={assets.phone_icon} alt='Phone Icon' />
					</div>
					<div>
						<p className='text-sm font-semibold text-gray-900'>067 553 659</p>
						<p className='text-xs text-gray-500'>
							Centru de Asistență și Contact
						</p>
					</div>
				</div>

				{/* Dreapta: Link-uri Autentificare sau Profil */}
				<div className='flex items-center space-x-4'>
					{token ? (
						<div className='flex items-center space-x-3'>
							<img
								className='w-5 cursor-pointer'
								src={assets.profile_icon}
								alt='Profile'
								onClick={goToOrders} // Redirecționează la /orders
							/>
							<span className='text-gray-400'>|</span>
							<button
								onClick={logoutHandler}
								className='text-sm text-red-600 hover:text-red-800'
							>
								Log out
							</button>
						</div>
					) : (
						<>
							<a
								onClick={() => openModal('Sign Up')}
								className='text-sm font-medium text-gray-700 hover:text-blue-600 cursor-pointer'
							>
								Cont nou
							</a>
							<span className='text-gray-400'>|</span>
							<a
								onClick={() => openModal('Login')}
								className='text-sm font-medium text-gray-700 hover:text-blue-600 cursor-pointer'
							>
								Autentificare
							</a>
						</>
					)}
				</div>
			</header>

			{/* Modalul (Pop-up) */}
			{isModalOpen && (
				<div className='fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50'>
					<div className='bg-white p-10 rounded-xl shadow-lg w-[95%] sm:w-[700px] relative'>
						{/* Buton Renunță */}
						<button
							onClick={() => setIsModalOpen(false)}
							className='absolute top-4 right-4 text-gray-600 text-sm font-medium'
						>
							Renunță
						</button>

						<div className='inline-flex items-center gap-2 mb-4'>
							<p className='prata-regular text-4xl'>{currentState}</p>
							<hr className='border-none h-[2px] w-10 bg-gray-800' />
						</div>

						{/* Formularul de Login/Sign Up */}
						{currentState === 'Sign Up' && (
							<input
								onChange={e => setName(e.target.value)}
								value={name}
								type='text'
								className='w-full px-4 py-3 border border-gray-800 rounded-lg text-lg'
								placeholder='Nume'
								required
							/>
						)}
						<input
							onChange={e => setEmail(e.target.value)}
							value={email}
							type='email'
							className='w-full px-4 py-3 border border-gray-800 rounded-lg text-lg mt-3'
							placeholder='Email'
							required
						/>
						<input
							onChange={e => setPassword(e.target.value)}
							value={password}
							type='password'
							className='w-full px-4 py-3 border border-gray-800 rounded-lg text-lg mt-3'
							placeholder='Parolă'
							required
						/>
						<div className='w-full flex justify-between text-sm mt-3'>
							<p className='cursor-pointer'>Ai uitat parola?</p>
							{currentState === 'Login' ? (
								<p
									onClick={() => setCurrentState('Sign Up')}
									className='cursor-pointer'
								>
									Creează cont
								</p>
							) : (
								<p
									onClick={() => setCurrentState('Login')}
									className='cursor-pointer'
								>
									Autentifică-te aici
								</p>
							)}
						</div>
						<button
							onClick={onSubmitHandler}
							className='bg-black text-white font-light px-10 py-3 mt-6 text-lg rounded-lg'
						>
							{currentState === 'Login' ? 'Sign In' : 'Sign Up'}
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default Header
