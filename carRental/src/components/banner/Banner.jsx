import React from "react";
import {FaPhone} from "react-icons/fa";
import "./banner.css";

const Banner = ({text, mode}) => {
  if (mode == "second") {
    return (
      <div className="banner">
        <div className="flex items-center gap-10 bannerParent ">
          <h2 className="banner__heading__medium">
            Book a car by getting in touch with us
          </h2>
          <span className="banner__subText__large">
            <FaPhone />
            (123)-456-789
          </span>
        </div>
      </div>
    );
  }

  return <div className={`banner `}>{text}</div>;
};

export default Banner;
