import React from "react";
// import BackgroundImage from "../assets/background.jpg";
import Icons from "./Icons";
import TitleSvg from "../assets/svgComponents/titleSVG"

const Title = () => {
  return (
    <div>
    <div className="container" style={{paddingTop: "15%" , paddingBottom: "5%"}} >
    <div className="row title_col" >
    <div class="col" >
    <div className="home__title">
      <h1 className="title__h1">Full-stack</h1>
      <h1>
        <strong className="strong">Web</strong> &{" "}
        <strong className="strong">Mobile</strong>
      </h1>
      <h1 className="title__h1">Developer</h1>
      <br />
      <Icons />
      <a href="#skills"  class="btn btn-outline-light btn-lg title-button">
        TELL ME MORE
      </a>
    </div>
  </div>
  <div className="col svg__title">
  <TitleSvg  alignItems="center" height="70%" width="80%"/>
  </div>
  </div>
  </div>
  <div class="custom-shape-divider-bottom-1658234901">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
  </div>
  );
};

export default Title;
