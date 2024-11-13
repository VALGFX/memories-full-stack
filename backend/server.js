import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import connectCloudinary from './config/cloudinary.js'
import connectDB from './config/mongodb.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'
import productRouter from './routes/productRoute.js'
import userRouter from './routes/userRoute.js'

// App Config
const app = express()
const port = process.env.PORT || 4000

// Connect to MongoDB and Cloudinary
connectDB()
connectCloudinary()

// CORS Configuration
const allowedOrigins = [
	'https://fe-memories-srl.vercel.app', // Frontend
	'https://fe-memories-srl-admin.vercel.app', // Admin panel
]

// Set CORS options
const corsOptions = {
	origin: (origin, callback) => {
		if (!origin || allowedOrigins.includes(origin)) {
			callback(null, true) // Allow the request
		} else {
			callback(new Error('Not allowed by CORS')) // Reject the request
		}
	},
	credentials: true, // Allow cookies if needed
	methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
}

// Middlewares
app.use(express.json())
app.use(cors(corsOptions))

// API endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

// Basic route for testing if the server is running
app.get('/', (req, res) => {
	res.send('API Working')
})

// Start the server
app.listen(port, () => {
	console.log(`Server started on PORT : ${port}`)
})
