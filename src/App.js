import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Register from "./Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={localStorage.getItem("isAuthenticated") ? <Navigate to="/home" /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={localStorage.getItem("isAuthenticated") ? <Home /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
