import React from "react";
import "../styles/h1.css";
const Heading = (props) => {
  return (
    <div className="heading">
      <h1 style={{ textAlign: "center" }}>{props.heading}</h1>
    </div>
  );
};

export default Heading;
