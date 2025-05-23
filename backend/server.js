import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import connectCloudinary from './config/cloudinary.js';
import connectDB from './config/mongodb.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import productRouter from './routes/productRoute.js';
import userRouter from './routes/userRoute.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB and Cloudinary
connectDB();
connectCloudinary();

// CORS Configuration
const allowedOrigins = [
  'https://fe-memories-srl.vercel.app', // Frontend
  'https://fe-memories-srl-admin.vercel.app', // Admin panel
];

const corsOptions = {
  origin: function (origin, callback) {
    // If origin is not present or matches any allowed origin, allow the request
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Allow credentials (cookies, etc.)
};

// middlewares
app.use(express.json());
app.use(cors(corsOptions));

// API Endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

// Root endpoint to test if the API is working
app.get('/', (req, res) => {
  res.send('API Working');
});

// Start server
app.listen(port, () => {
  console.log(`Server started on PORT : ${port}`);
});
