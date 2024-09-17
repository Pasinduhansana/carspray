import React from "react";
import bgimg from "../assets/Worker.jpg";
import Button from "./Button";

const AboutUS = () => {
  return (
    <>
      <div id="about-us">
        <div className="backgorund-bg">
          <img src={bgimg} alt="Backgorund image" />

          <h1 className="header-div">About US</h1>

          <div className="AboutUS-docked-panel">
            <div className="AboutUS-docked-panel-content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                inventore, dignissimos reiciendis earum consequatur sunt sequi
                maxime consequuntur nostrum natus! Officiis iure unde
                necessitatibus sed nam qui blanditiis dolores? Tempora ducimus
                explicabo aspernatur laboriosam quam repellat, totam maxime!
                Dolore repellendus eos eum illum perferendis porro voluptates.
                Possimus at perferendis aliquid sequi autem dolor modi
                aspernatur solur porro! Eaque odio corrupti quae dolore iure?
              </p>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                inventore, dignissimos reiciendis earum consequatur sunt sequi
                maxime consequuntur nostrum natus! Officiis iure unde
                necessitatibus sed nam qui blanditiis dolores? Tempora ducimus
                explicabo aspernatur laboriosam quam?
              </p>

              <Button>REQUEST A QUATATION</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUS;
