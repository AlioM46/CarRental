import React from "react";
import "./multiIcons.css";
const MultiIcons = ({image, title, text}) => {
  return (
    <div className="multiIcons">
      <img src={image} alt={title} title={text} />

      <div className="multiIcons__text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default MultiIcons;
