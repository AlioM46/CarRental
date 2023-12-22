import React from "react";
import "./input.css";
const Input = ({type, setter, placeholder, value, id, title, style}) => {
  return (
    <div className="input">
      <label htmlFor={id}>{title}</label>
      <input
        value={value}
        style={style}
        type={type ? type : "text"}
        id={id}
        placeholder={placeholder}
        onChange={(e) => setter(e.target.value)}
      />
    </div>
  );
};

export default Input;
