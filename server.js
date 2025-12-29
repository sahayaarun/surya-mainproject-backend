const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
// 1. Import the new Job Routes
const jobRoutes = require("./routes/jobRoutes"); 

const app = express();

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors()); // Enables cross-origin requests
app.use(express.json()); // Allows server to accept JSON data

// Routes
app.use("/api/auth", authRoutes); // Authentication routes

// 2. Add the Job routes to the middleware
// This will link http://localhost:5000/api/jobs to your jobRoutes.js file
app.use("/api/jobs", jobRoutes); 

// Server Port Configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});