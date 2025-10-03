import dotenv from "dotenv";
dotenv.config();
import connectToDatabase from "./dbConnection/db.js";
import express from 'express'
import cors from 'cors'
import router from './routes/authRoutes.js';
connectToDatabase()
const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/auth",router)
app.listen(process.env.PORT,()=>console.log(
`Server started at PORT : ${process.env.PORT}`))