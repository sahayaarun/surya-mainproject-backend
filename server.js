const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");

const app = express();

// 1. Connect to MongoDB 
connectDB();

// 2. Middlewares
app.use(cors()); 
app.use(express.json()); 

// 3. Health Check Route (ரயில்வே எரர் வராமல் தடுக்க இது மிக முக்கியம்)
app.get("/", (req, res) => {
    res.send("Backend server is running successfully!");
});

// 4. API Routes
app.use("/api/auth", authRoutes); 
app.use("/api/jobs", jobRoutes); 

// 5. Server Port Configuration 
const PORT = process.env.PORT || 8080;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});