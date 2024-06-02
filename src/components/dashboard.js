import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar2 from "./NavBar2";
import "../css/dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [learningProgress, setLearningProgress] = useState(0);
  const [savedItemsCount, setSavedItemsCount] = useState(0);
  const [forumPostsCount, setForumPostsCount] = useState(0);
  const [safetyPrecautions, setSafetyPrecautions] = useState({
    helmet: false,
    kneePads: false,
    elbowPads: false,
  });

  const username = localStorage.getItem("username");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5003/profile2/${username}`
        );
        const user = response.data.username;
        setUserData(user);
        setLearningProgress(user.learningProgress || 0);
        setSafetyPrecautions(
          user.safetyPrecautions
            ? JSON.parse(user.safetyPrecautions)
            : {
                helmet: false,
                kneePads: false,
                elbowPads: false,
              }
        );
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [username]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  const handleProgressChange = (event) => {
    setLearningProgress(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setSafetyPrecautions({
      ...safetyPrecautions,
      [event.target.name]: event.target.checked,
    });
  };

  const saveProgress = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5003/profile2/${username}/progress`,
        {
          learningProgress,
          safetyPrecautions,
        }
      );

      // Check if the new progress is greater than the previous value
      if (response.data.learningProgress > learningProgress) {
        console.log("Congratulations! Your progress has increased!");
        // You can display a notification or perform any other action to appreciate the user
      }

      console.log("Progress saved successfully:", response.data);
    } catch (error) {
      console.error("Error saving progress:", error);
    }
  };

  return (
    <div>
      <NavBar2 />
      <div className="container">
        {userData && (
          <div className="dashboard">
            <h2>Welcome back, {userData.fullname}!</h2>
            <div className="summary">
              <div className="summary-item">
                <h3>Learning Progress</h3>
                <p>{learningProgress}% Complete</p>
                <input
                  type="range"
                  value={learningProgress}
                  onChange={handleProgressChange}
                  max="100"
                  className="progress-slider"
                />
                <button className="button" onClick={saveProgress}>
                  Save Progress
                </button>
              </div>
              <div className="summary-item">
                <h3>Safety Precautions</h3>
                <div className="checkboxes">
                  <label>
                    <input
                      type="checkbox"
                      name="helmet"
                      checked={safetyPrecautions.helmet}
                      onChange={handleCheckboxChange}
                    />
                    Helmet
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="kneePads"
                      checked={safetyPrecautions.kneePads}
                      onChange={handleCheckboxChange}
                    />
                    Knee Pads
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="elbowPads"
                      checked={safetyPrecautions.elbowPads}
                      onChange={handleCheckboxChange}
                    />
                    Elbow Pads
                  </label>
                </div>
                <button className="button" onClick={saveProgress}>
                  Save Safety Precautions
                </button>
              </div>

              <div className="summary-item">
                <h3>Forum Activity</h3>

                <Link to={`/profile2/${username}/forum`}>Go to Forum</Link>
              </div>
            </div>
            <div className="actions">
              <Link to={`/profile2/${username}/learn`} className="button">
                Start Learning
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
