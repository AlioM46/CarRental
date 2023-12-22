import React from "react";
import aboutImage from "../../../assets/images/aboutImage.jpg";
import img1 from "../../../assets/images/carTypes.png";
import img2 from "../../../assets/images/rentalOutlets.png";
import img3 from "../../../assets/images/repairShop.png";
import "./aboutCompany.css";
const AboutCompany = () => {
  return (
    <div className="aboutCompany">
      <div className="about__image">
        <img src={aboutImage} alt="" />
      </div>

      {/*  */}
      <div className="about__text">
        <h3>About Company</h3>
        <h1>You start the engine and your adventure begins</h1>
        <p>
          Certain but she but shyness why cottage. Guy the put instrument sir
          entreaties affronting. Pretended exquisite see cordially the you.
          Weeks quiet do vexed or whose. Motionless if no to affronting
          imprudence no precaution. My indulged as disposal strongly attended.
        </p>

        <div className="about__icons__container">
          <AboutIcons text={"Car Types"} title={"20"} img={img1} />
          <AboutIcons text={"Rental Outlets"} title={"85"} img={img2} />
          <AboutIcons text={"Repair Shop"} title={"75"} img={img3} />
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;

const AboutIcons = ({img, title, text}) => {
  return (
    <div className="aboutIcon">
      <img src={img} alt={text} />
      <div className="aboutIcon__text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};
