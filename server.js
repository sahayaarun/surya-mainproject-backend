const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");

const app = express();

// 1. Connect to MongoDB 
// Using the new credentials updated in Railway variables
connectDB();

// 2. Middlewares
app.use(cors()); // Enables cross-origin requests
app.use(express.json()); // Allows server to accept JSON data

// 3. Routes
app.use("/api/auth", authRoutes); // Authentication routes
app.use("/api/jobs", jobRoutes); // Job routes

// 4. Server Port Configuration 
// Configured with '0.0.0.0' and port 8080 for Railway deployment
const PORT = process.env.PORT || 8080;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});