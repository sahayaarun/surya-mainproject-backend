const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");

const app = express();

// 1. Database Connection
connectDB();

// 2. Middlewares and CORS Configuration
app.use(cors({
  origin: ["http://localhost:5173", "https://surya-mainproject-backend-production.up.railway.app"], 
  credentials: true
}));

app.use(express.json());

// 3. Health Check Route for Railway Deployment
app.get("/", (req, res) => {
    res.send("Backend server is running successfully!");
});

// 4. API Routes Initialization
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);

// 5. Server Port Setup
const PORT = process.env.PORT || 8080;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});