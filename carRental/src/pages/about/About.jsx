import React from "react";
//
import image2 from "../../assets/images/contact.png";
import image3 from "../../assets/images/letsDrive.png";
import image1 from "../../assets/images/selectCar.png";
//

// Images
import HeadingTitle from "../../components/HeadingTitle/HeadingTitle";
import PageContainer from "../../components/PageContainer/PageContainer";
import SlideBanner from "../../components/SlideBanner/SlideBanner";
import Banner from "../../components/banner/Banner";
import MultiIcons from "../../components/mutltiIcons/MultiIcons";
import AboutCompany from "./aboutCompany/AboutCompany";
const About = () => {
  return (
    <div>
      <SlideBanner page={"About us"} />
      <PageContainer>
        <AboutCompany />
        <HeadingTitle
          title={"Plan your trip now"}
          text={"Quick & easy car rental"}
          subText={""}
        />
        <div className="div-row">
          <MultiIcons
            image={image1}
            title={"Select Car"}
            text={
              "We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs"
            }
          />
          <MultiIcons
            image={image2}
            title={"Contact Operator"}
            text={
              "Our knowledgeable and friendly operators are always ready to help with any questions or concerns"
            }
          />
          <MultiIcons
            image={image3}
            title={"Let's Drive"}
            text={
              "Whether you're hitting the open road, we've got you covered with our wide range of cars"
            }
          />
        </div>{" "}
      </PageContainer>
      <Banner mode={"second"} />
    </div>
  );
};

export default About;
