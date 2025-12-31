const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");

const app = express();
connectDB();

app.use(cors({
  origin: [
    "http://localhost:5173", 
    "https://surya-mainproject-frontend-ydxd.vercel.app"
  ], 
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend server is running successfully!");
});

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});