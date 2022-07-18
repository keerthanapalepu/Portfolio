import React from "react";
import Heading from "../utils/Heading";
import "../styles/tech.css";
import TechCard from "../utils/TechCard";

import frontendImg from '../assets/frontend.png';
import backendImg from '../assets/backend.png';
import databaseImg from '../assets/database.png';
import languagesImg from '../assets/languages.png';
import toolsImg from '../assets/tools.png';

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
    <div className="wrapper">
      <div className="" id="tech">
        <Heading heading={"MY TECH STACK"} />
      <br />
        <div className="techcards-list">
          <span className="actions">


          <div className="row" >
            <div className="TechCard p-3 mb-2">
            <p className="tech">FRONTEND </p>
            <img className="techStackImage" src={frontendImg} alt="frontend" />
            {frontend.map(TechCardData)}
          </div>
          </div>


          <div className="row">
            <div className="TechCard p-3 mb-2">
            <p className="tech">BACKEND </p>
            <img className="techStackImage" src={backendImg} alt="backend" />
            {backend.map(TechCardData)}
          </div>
          </div>

          <div className="row" >
            <div className="TechCard p-3 mb-2">
            <p className="tech">DATABASES </p>
            <img className="techStackImage" src={databaseImg} alt="database" />
            {databases.map(TechCardData)}
          </div>
          </div>



          <div className="row" >
            <div className="TechCard p-3 mb-2">
            <p className="tech">LANGUAGES </p>
              <img className="techStackImage" src={languagesImg} alt="languages" />
              {languages.map(TechCardData)}
          </div>
          </div>

          <div className="row" >
            <div className="TechCard p-3 mb-2">
            <p className="tech">TOOLS </p>
              <img className="techStackImage" src={toolsImg} alt="tools" />
              {tools.map(TechCardData)}
          </div>
          </div>

          </span>
        </div>
      </div>
    </div>
  );
};

export default Tech;
