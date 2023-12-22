import React from "react";

import HeadingTitle from "../../components/HeadingTitle/HeadingTitle";
import PageContainer from "../../components/PageContainer/PageContainer";
import Banner from "../../components/banner/Banner";
import MultiIcons from "../../components/mutltiIcons/MultiIcons";
import {
  BookCar,
  DownloadApp,
  Faq,
  Hero,
  VehicleModels,
  WhyChooseUs,
} from "../imports";
import "./home.css";

import image2 from "../../assets/images/contact.png";
import image3 from "../../assets/images/letsDrive.png";
import image1 from "../../assets/images/selectCar.png";
import Reviews from "./reviews/Reviews";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <PageContainer>
        <BookCar />

        <div>
          <HeadingTitle
            title={"Plan your trip now"}
            text={"Quick & easy car rental"}
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
          </div>
        </div>
        <VehicleModels />
      </PageContainer>

      <Banner
        text={
          <>
            <h1 className="heading">Save big with our cheap car rental!</h1>
            <p className="banner__text">
              Top Airports. Local Suppliers.{" "}
              <span className="banner__subText">24/7</span> Support.
            </p>
          </>
        }
      />
      <PageContainer>
        <WhyChooseUs />
        <Reviews />
      </PageContainer>
      <Faq />
      <DownloadApp />
    </div>
  );
};

export default Home;
