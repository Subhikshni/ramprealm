import React from "react";
import NavBar2 from "../NavBar2.js";
import "./beginner.css";

const Beginner = () => {
  return (
    <div className="beginner-container">
      <NavBar2 />
      <h2>Beginner Skateboarding</h2>
      <section className="step">
        <h3>Step 1: Choosing the Right Skateboard</h3>
        <p>
          The first step to learning skateboarding is choosing the right
          skateboard. Make sure to select a board that suits your size and
          riding style.
        </p>
        <div className="image-container">
          <div className="skateboard-size"></div>
        </div>
      </section>
      <section className="step">
        <h3>Step 2: Getting Comfortable with Stance</h3>
        <p>
          Before you start riding, it's essential to get comfortable with your
          stance. Most skateboarders either ride regular (left foot forward) or
          goofy (right foot forward). Try both to see which feels more natural
          for you.
        </p>
        <div className="stance-section">
          <h4>Natural Skateboard Stance</h4>
          <div className="Natural"></div>
          <h4>Nollie Skateboard Stance</h4>
          <div className="Nollie"></div>
          <h4>Switch Skateboard Stance</h4>
          <div className="Switch"></div>
          <h4>Fakie Skateboard Stance</h4>
          <div className="Fakie"></div>
        </div>
      </section>
      <section className="step">
        <h3>Step 3: Learning to Push</h3>
        <p>Pushing is the fundamental skill in skateboarding.</p>
        <ul>
          <li>
            Stand with your feet parallel to your board and next to the rear
            wheels.
          </li>
          <li>
            Place your dominant foot at the front of the skateboard just behind
            the front trucks, with the tip of your shoe at a 45-degree angle and
            over the bolts.
          </li>
          <li>Bend your front leg knee and lean forward.</li>
          <li>Bend your back knee slightly.</li>
          <li>Push off the ground with your rear foot.</li>
          <li>
            As the skateboard starts moving, bring your back foot onto the deck
            in a smooth movement.
          </li>
          <li>Use both arms to keep your balance on the board.</li>
          <li>
            Turn your chest perpendicular to the board and twist your front
            foot's heel so that it lies across the deck.
          </li>
          <li>
            Reposition your feet perpendicular to the board and skate away.
          </li>
          <li>
            Are you losing speed? Place your back foot again on the ground, push
            once or twice, and resume riding.
          </li>
        </ul>
        <div className="image-container">
          <div className="push"></div>
        </div>
      </section>
      {/* Add more steps as needed */}
    </div>
  );
};

export default Beginner;
