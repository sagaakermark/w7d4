import React from "react";
import Experience from "./Experience";
import Education from "./Education";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "40vw" }}>
        <Education />
      </div>
      <div style={{ width: "60vw" }}>
        <Experience />
      </div>
    </div>
  );
};

export default About;
