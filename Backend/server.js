import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoutes.js';  //problem
import cors from 'cors';

// Configure env
dotenv.config();

// Database config
connectDB();

// Create express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use('/api/v1/auth', authRoutes) //problem

// REST API
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

// PORT
const PORT = process.env.PORT || 6500;

// Run listen
app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
