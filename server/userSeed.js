import bcrypt from "bcrypt";
import User from "./models/User.js";
import connectToDatabase from "./dbConnection/db.js";

const registerUser = async () => {
  try {
    await connectToDatabase()
    const hashPassword = await bcrypt.hash("admin", 10);
    const newUser = new User({
      name: "admin",
      email: "admin@gmail.com",
      password: hashPassword,
      role: "admin",
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
  }
};
registerUser() 