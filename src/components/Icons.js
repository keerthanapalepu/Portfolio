import React from "react";
import ContactmeIcons from "../utils/ContactmeIcons";
import ContactmeData from "../constants/contactme";

function ContactIconData(info) {
  return <ContactmeIcons icon={info.icon} name={info.name} link={info.link} />;
}

const Icons = () => {
  return (
    <div className="iconclass">
      <span>{ContactmeData.map(ContactIconData)}</span>
    </div>
  );
};

export default Icons;
