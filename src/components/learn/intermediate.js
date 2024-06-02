import React from "react";
import NavBar2 from "../NavBar2.js";
import "./intermediate.css";

const Intermediate = () => {
  return (
    <div className="intermediate-container">
      <NavBar2 />
      <h2>Intermediate Skateboarding</h2>
      <section className="step">
        <h3>Step 1: Mastering Ollies</h3>
        <p>
          Ollies are fundamental tricks in skateboarding. Learn the proper foot
          placement and motion to execute an ollie.
        </p>
        <div className="ollie"></div>
      </section>
      <section className="step">
        <h3>Step 2: Kickflips and Heelflips</h3>
        <p>
          Practice kickflips and heelflips to add variety to your trick
          repertoire. Mastering these tricks requires precise footwork and
          timing.
        </p>
        <div className="kickflip"></div>
        <div className="heelflip"></div>
      </section>
      <section className="step">
        <h3>Step 3: Grinds and Slides</h3>
        <p>
          Learn how to grind and slide on rails and ledges. These advanced
          techniques require balance, control, and confidence.
        </p>
        <div className="grind"></div>
        <div className="slide"></div>
      </section>
      {/* Add more steps as needed */}
    </div>
  );
};

export default Intermediate;
