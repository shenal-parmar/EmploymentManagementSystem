import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const userContext = createContext();
const AuthContext = ({ children }) => {
  const [user, setuser] = useState();
  const [Loading, setLoading] = useState(true)
  console.log("authcontext called");
  useEffect(() => {
    try {
      console.log("verify context method called");
      const verifyToken = async () => {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:3000/api/auth/verify", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("res of verify", res);
        if (res.data.success) {
          setuser(user);
        } else {
          setLoading(false)
          setuser(null);
        }
      };
      verifyToken();
    } catch (error) {
      setuser(null)
      setLoading(false)
      res.status(500).json({
        success: false,
        error: error,
        message: "server error at authcontext",
      });
    }finally{
      setLoading(false)
    }
  }, []);

  const login = (user) => {
    console.log("authcontext login called");
    setuser(user);
  };
  const logout = () => {
    console.log("authcontext logout called");
    localStorage.removeItem("token");
    setuser(null);
  };
  return (
    <userContext.Provider value={{ login, logout, user ,Loading}}>
      {children}
    </userContext.Provider>
  );
};

export const useAuth = () => useContext(userContext);
export default AuthContext;
