import express from 'express'
import {
	adminLogin,
	loginUser,
	registerUser,
} from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/register', async (req, res) => {
	try {
		await registerUser(req, res)
	} catch (error) {
		console.error('Error during registration:', error)
		res
			.status(500)
			.json({
				message: 'An error occurred during registration',
				error: error.message,
			})
	}
})

userRouter.post('/login', async (req, res) => {
	try {
		await loginUser(req, res)
	} catch (error) {
		console.error('Error during login:', error)
		res
			.status(500)
			.json({ message: 'An error occurred during login', error: error.message })
	}
})

userRouter.post('/admin', async (req, res) => {
	try {
		await adminLogin(req, res)
	} catch (error) {
		console.error('Error during admin login:', error)
		res
			.status(500)
			.json({
				message: 'An error occurred during admin login',
				error: error.message,
			})
	}
})

export default userRouter
