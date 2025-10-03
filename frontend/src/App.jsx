import { useState } from "react";
// import "./App.css";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import UserDashboard from "./pages/UserDashboard";

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/admin-dashboard"></Navigate>}
        ></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/admin-dashboard" element={<AdminDashboard/>}></Route>
        <Route path="/user-dashboard" element={<UserDashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
