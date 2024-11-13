import mongoose from 'mongoose'

const connectDB = async () => {
	try {
		// Conectare la MongoDB
		await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})

		console.log('MongoDB connected successfully')
	} catch (error) {
		console.error('Failed to connect to MongoDB:', error.message)
		process.exit(1) // Închide aplicația dacă conexiunea la DB eșuează
	}
}

export default connectDB
