import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(404).json({
      message: "user not found",
      success: false,
      error: "User not found",
    });
  }
  const isMatches = await bcrypt.compare(password, user.password);
  if (!isMatches) {
    res.status(404).json({
      success: false,
      error: "User password incorrect",
    });
  }
  const token = jsonwebtoken.sign(//data,key,exptime
    { _id: user._id, role: user.role },
    process.env.JwT_KEY,
    {expiresIn:"10d"}
  );
  res.status(200).json({
    success:true,
    token,
    user:user,
    id:user._id,
  })

};
const verifiedUser = (req,res)=>{
  return res.status(200).json({
    message:"done ",
    success:true
  })
}
export {
  loginUser,verifiedUser
}
