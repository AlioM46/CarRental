import React from "react";
import "./headingTitle.css";
const HeadingTitle = ({title, text, subText, textAlign}) => {
  let style;
  if (textAlign == "left") {
    style = {
      alignItems: "flex-start",
    };
  }
  return (
    <div style={style} className="headingTitle">
      <h3>{title}</h3>
      <h1>{text}</h1>
      <p>{subText}</p>
    </div>
  );
};

export default HeadingTitle;
