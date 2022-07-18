import React from "react";
import SkillCard from "../utils/SkillCard";
import SkillData from "../constants/skilldata";

function SkillCardData(skill) {
  return (
    <SkillCard icon={skill.icon} name={skill.name} content={skill.content} />
  );
}

const Skills = () => {
  return (
    <div className="skills container-fluid wrapper" id="skills">
      <h1>WHAT I DO</h1>
      <h3>
        <i>things I'm skilled at and passionate about</i>
      </h3>
      <div className="row" >{SkillData.map(SkillCardData)}</div>
    </div>
  );
};

export default Skills;
