import React from "react";
import Heading from "../utils/Heading";
import "../styles/tech.css";
import TechCard from "../utils/TechCard";

import TitleSvg from "../assets/svgComponents/titleSVG"
import FrontendSVG from "../assets/svgComponents/frontendSVG"
import BackendSVG from "../assets/svgComponents/backendSVG"
import LanguageSVG from "../assets/svgComponents/languagesSVG"
import DatabaseSVG from "../assets/svgComponents/databaseSVG"
import ToolSVG from "../assets/svgComponents/toolSVG"


import {
  frontend,
  backend,
  databases,
  languages,
  tools
} from "../constants/techdata";

function TechCardData(tech) {
  return <TechCard name={tech.name} logo={tech.logo} />;
}

const Tech = () => {
  return (
    <div className="container">
      <div className="" id="tech">
        <Heading heading={"MY TECH STACK"} />
      <br />
        <div className="techcards-list">
          <span className="actions">


          <div className="row" >
            <div className="TechCard p-3 mb-2">
            <p className="tech">FRONTEND </p>
            <div className="container">
            <div className="row">
              <div className="col-lg-6 techsvg left">
              <FrontendSVG alignItems="center" height="80%" width="60%"/>
              </div>
              <div className="col-lg-6 techicons right">
              {frontend.map(TechCardData)}
              </div>
            </div>
            </div>
          </div>
          </div>

          <div className="row" >
            <div className="TechCard p-3 mb-2">
            <p className="tech">BACKEND </p>
            <div className="container">
            <div className="row">
              <div className="col-lg-6 techicons left">
              {backend.map(TechCardData)}
              </div>
              <div className="col-lg-6 techsvg right">
              <BackendSVG alignItems="center" height="80%" width="60%"/>
              </div>
            </div>
            </div>
          </div>
          </div>


          <div className="row" >
            <div className="TechCard p-3 mb-2">
            <p className="tech">DATABASES </p>
            <div className="container">
            <div className="row">
            <div className="col-lg-6 techsvg left">
               <DatabaseSVG alignItems="center" height="80%" width="60%"/>
            </div>
              <div className="col-lg-6 techicons right">
              {databases.map(TechCardData)}
              </div>
            </div>
            </div>
          </div>
          </div>

          <div className="row" >
            <div className="TechCard p-3 mb-2">
            <p className="tech">LANGUAGES </p>
            <div className="container">
            <div className="row">
              <div className="col-lg-6 techicons left">
              {languages.map(TechCardData)}
              </div>
              <div className="col-lg-6 techsvg right">
              <LanguageSVG alignItems="center" height="80%" width="60%"/>
              </div>
            </div>
            </div>
          </div>
          </div>


          <div className="row" >
            <div className="TechCard p-3 mb-2">
            <p className="tech">TOOLS </p>
            <div className="container">
            <div className="row">
            <div className="col-lg-6 techsvg left">
               <ToolSVG alignItems="center" height="80%" width="60%"/>
            </div>
              <div className="col-lg-6 techicons right">
              {tools.map(TechCardData)}
              </div>
            </div>
            </div>
          </div>
          </div>


          </span>
        </div>
      </div>
    </div>
  );
};

export default Tech;
