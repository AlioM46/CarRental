import React from "react";
import "./select.css";
const Select = ({setter, options, starterOption, title, value}) => {
  return (
    <div className="select">
      <label>{title}</label>
      <select value={value} onChange={(e) => setter(e.target.value)}>
        {starterOption}
        {options}
      </select>
    </div>
  );
};

export default Select;
