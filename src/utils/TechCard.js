import React from "react";

const TechCard = (props) => {
  return (
    <>
      <span title={props.name}>
      <span className="medium iconify mySpan" data-icon={props.logo}></span>
      </span>
    </>
  );
};

export default TechCard;
