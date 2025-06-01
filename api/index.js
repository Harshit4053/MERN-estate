
import express, { Router } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js'

dotenv.config();

const app = express();
const port = 3000;


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB!");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});


app.use('/api/user', userRouter);
 