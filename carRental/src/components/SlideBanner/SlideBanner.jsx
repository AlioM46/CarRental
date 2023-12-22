import React from "react";
import {Link} from "react-router-dom";
import "./slideBanner.css";
const SlideBanner = ({page}) => {
  console.log(page);
  return (
    <div className="slideBanner">
      <div className="slideBanner__overlay"></div>
      <h2>{page}</h2>

      <div className="slideBanner__text">
        <Link to={"/"}>Home /</Link>
        <p>{page}</p>
      </div>
    </div>
  );
};

export default SlideBanner;
