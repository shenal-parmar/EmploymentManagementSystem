import express from "express";
const router = express.Router()
import {loginUser} from '../controller/userController.js'
import authMiddleware from "../middleware/authMiddleware.js";
import {verifiedUser} from "../controller/userController.js"
router.post("/login",loginUser)
router.get("/verify",authMiddleware,verifiedUser)

export default router