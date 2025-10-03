// src/pages/Login.jsx
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/AuthContext.jsx";

// Extracted login function for testing
export const submitLogin = async ({ email, password }) => {
  try {
    const res = await axios.post("http://localhost:3000/api/auth/login", { email, password });
    if (res.data.success) return res.data;
    else throw new Error("Login failed");
  } catch (err) {
    if (err.response?.data?.error) throw new Error(err.response.data.error);
    else throw new Error("Server error");
  }
};

const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(null);
  const { login } = useContext(userContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await submitLogin({ email, password });
      localStorage.setItem("token", res.token);
      login(res.user.name);
      if (res.user.name === "admin") navigate("/admin-dashboard");
      else navigate("/user-dashboard");
    } catch (err) {
      seterror(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h2>Employee Management System</h2>
      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setemail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
