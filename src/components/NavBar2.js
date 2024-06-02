import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../css/navbar2.css";

function Navbar2() {
  const username = localStorage.getItem("username") || "";
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to={`/profile2/${username}/home2`} className="nav-link">
          Home
        </Link>
        <Link to={`/profile2/${username}/learn`} className="nav-link">
          Learn
        </Link>

        <Link to={`/profile2/${username}/dashboard`} className="nav-link">
          Dashboard
        </Link>

        <Link to={`/profile2/${username}/bestbrands`} className="nav-link">
          Best Brands
        </Link>

        <Link to={`/profile2/${username}`} className="nav-link">
          Profile
        </Link>
      </div>
    </nav>
  );
}

export default Navbar2;
