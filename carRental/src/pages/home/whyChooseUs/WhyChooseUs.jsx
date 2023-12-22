import React from "react";
import {MdOutlineArrowForwardIos} from "react-icons/md";
import img1 from "../../../assets/images/allPricing.png";
import img2 from "../../../assets/images/crossCountry.png";
import img3 from "../../../assets/images/noHiddenCharges.png";
import carImage from "../../../assets/images/threeCars.png";
import HeadingTitle from "../../../components/HeadingTitle/HeadingTitle";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import MultiIcons from "../../../components/mutltiIcons/MultiIcons";
import "./whyChooseUs.css";
const WhyChooseUs = () => {
  return (
    <div className="whyChooseUs">
      <img src={carImage} alt="" />

      <div className="whyChooseUs__container">
        <div className="whyChooseUs__text">
          <HeadingTitle
            title={"Why Choose Us"}
            text={"Best valued deals you will ever find"}
            subText={
              "Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.          "
            }
            textAlign={"left"}
          />
          <PrimaryButton>
            Find Details <MdOutlineArrowForwardIos />
          </PrimaryButton>
        </div>

        <div className="whyChooseUs__icons">
          <MultiIcons
            title={"Cross Country Drive"}
            image={img2}
            text={
              "Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures."
            }
          />
          <MultiIcons
            title={"All Inclusive Pricing"}
            image={img1}
            text={
              "Get everything you need in one convenient, transparent price with our all-inclusive pricing policy."
            }
          />
          <MultiIcons
            title={"No Hidden Charges"}
            image={img3}
            text={
              "Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
