import React from "react";
import "../styles/icons.css";
const ContactMeIcons = (props) => {
  return (
    <>
      <a
        href={props.link}
        className={props.name}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="fa-stack fa-lg ">
          <i className="fa fa-circle fa-stack-2x"></i>
          <i className={props.icon}></i>
        </span>
      </a>
    </>
  );
};

export default ContactMeIcons;
