import React from "react";
import { aboutme1, aboutme2, aboutme3 } from "../constants/aboutme";
import Paragraph from "../utils/Paragraph";
import Heading from "../utils/Heading";
import "../styles/h1.css";
// add avatar
const About = () => {
  return (
    <div className="section wrapper ">
      <div className="section-content " id="aboutme">
      <Heading heading={"ABOUT ME"} />
        <div style={{ fontSize: "18px" }}>
          <Paragraph info={"Let's break the ice a little"} />
          <Paragraph info={aboutme1} />
          <Paragraph info={aboutme2} />
          <Paragraph info={aboutme3} />
        </div>
      </div>
    </div>
  );
};

export default About;
