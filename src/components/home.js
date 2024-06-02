import React from "react";
import "../css/home.css";
import NavBar from "./NavBar";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="home-container">
        <div className="content">
          <h2>RampRealm</h2>
        </div>
      </div>
      <div className="about-container">
        <div className="about-text">
          <h2>About RampRealm</h2>
          <p>
            "RampRealm is your ultimate destination for mastering the art of
            skateboarding. Whether you're a beginner or an experienced skater,
            we offer a wide range of tools and resources to help you take your
            skills to the next level. our platform empowers you to push your
            limits and achieve your skateboarding goals. Join our vibrant
            community of skate enthusiasts, participate in competitions, and
            challenge yourself with new tricks. At RampRealm, the pursuit of
            excellence is endless – come join us on the journey to skateboarding
            mastery!"
          </p>
        </div>
        <div className="about-image"></div>
      </div>
      <footer className="footer">
        <div className="footer-text">
          <p>RampRealm by Subhikshni</p>
        </div>
        <div className="social-icons">
          <a
            className="Github_logo"
            href="https://github.com/YourGitHubUsername"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            className="Linkedin_logo"
            href="https://www.linkedin.com/in/yourlinkedinprofile"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
