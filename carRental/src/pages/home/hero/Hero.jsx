import React from "react";
import {FaAngleRight} from "react-icons/fa";
import CarImage from "../../../assets/images/bg-carImage.png";
import bgImage from "../../../assets/images/bg-image.png";
import PageContainer from "../../../components/PageContainer/PageContainer";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../../components/SecondaryButton/SecondaryButton";
import "./hero.css";

const Hero = () => {
  return (
    <PageContainer>
      <div className="hero">
        <div className="hero__text">
          <p>Plan your trip now</p>

          <div className="hero__text__title">
            <p>
              Save <span>big</span> with out car rental{" "}
            </p>
          </div>

          <span className="hero__text__subText">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </span>
          <div className="hero__text__buttons">
            <PrimaryButton>
              Book Ride <FaAngleRight />
            </PrimaryButton>
            <SecondaryButton>
              Learn More <FaAngleRight />
            </SecondaryButton>
          </div>
        </div>

        <div className="hero__images">
          <div>
            <img src={CarImage} />
          </div>

          <div>
            <img src={bgImage} />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Hero;
