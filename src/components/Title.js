import React from "react";
// import BackgroundImage from "../assets/background.jpg";
import Icons from "./Icons";
// add button and background image

const myStyle = {
  paddingTop: "9%",
  textAlight: "center"
};

const Title = () => {
  return (
    // <div id="title" style={myStyle}>
    <div className="container-fluid">
      <h1 style={myStyle}>Full-stack</h1>
      <h1>
        <strong className="strong">Web</strong> &{" "}
        <strong className="strong">Mobile</strong>
      </h1>
      <h1>Developer</h1>
      <br />
      <Icons />
      <a href="#skills"  class="btn btn-outline-light btn-lg title-button">
        TELL ME MORE
      </a>
    </div>
    // </div>
  );
};

export default Title;
