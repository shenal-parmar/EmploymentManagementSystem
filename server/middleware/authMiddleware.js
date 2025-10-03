import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";
//just checks if token  present and user present if not there then retutns error
const verifyUser = async (req, res, next) => {
  console.log("authmiddleware verify user called");
  const token = req.headers.authorization.split(' ')[1];
  try {
    if (!token) {
      res.status(404).json({
        success: false,
        error: "Token not found",
      });
    }
    const verifiedtoken = jwt.verify(token, process.env.JWT_KEY);
    if (!verifiedtoken) {
      res.status(404).json({
        success: false,
        error: "Token not Valid",
      });
    }
    // console.log("res from middleware",req);
    const user = await User.findById({id:verifiedtoken._id})
    if(!user){
      res.status(404).json({
        status:false,
        error:"User not found for verify"
      })
    } 
    console.log("verifiedtoken data: ", verifiedtoken);
    req.body = user
    next()
  } catch (error) {
    console.log("error at verification",error);
    
  }
};
export default verifyUser
