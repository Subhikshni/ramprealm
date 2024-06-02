import React from "react";
import { Link } from "react-router-dom";
import "../css/learn.css";
import Navbar2 from "./NavBar2";

const Learn = () => {
  const username = localStorage.getItem("username");

  return (
    <div className="learn-container">
      <Navbar2 />
      <h2>Learn Skateboarding</h2>
      <div className="section">
        <h3>Beginner</h3>
        <p>
          Whether you're just starting out or looking to refresh your skills,
          our beginner section has everything you need to get rolling.
        </p>
        <Link to={`/profile2/${username}/learn/beginner`}>
          <button className="btn">Get Started</button>
        </Link>
      </div>
      <div className="section">
        <h3>Intermediate</h3>
        <p>
          Ready to take your skateboarding to the next level? Our intermediate
          section is packed with tips and tricks to help you progress.
        </p>
        <Link to={`/profile2/${username}/learn/intermediate`}>
          <button className="btn">Take it Further</button>
        </Link>
      </div>
    </div>
  );
};

export default Learn;
