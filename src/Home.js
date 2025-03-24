import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Home.css";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); // Remove login state
    navigate("/", { replace: true });
    window.location.reload(); // Force React to update the UI
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <div className="content">
        <h1>Home Page</h1>
        <p>You are now logged in.</p>
      </div>
    </div>
  );
}

export default Home;
