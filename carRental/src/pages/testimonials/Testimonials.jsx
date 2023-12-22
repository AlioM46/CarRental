import React from "react";
import harryPoter from "../../assets/images/harryPoter.jpg";
import ron from "../../assets/images/ron.jpg";
import HeadingTitle from "../../components/HeadingTitle/HeadingTitle";
import PageContainer from "../../components/PageContainer/PageContainer";
import SlideBanner from "../../components/SlideBanner/SlideBanner";
import Banner from "../../components/banner/Banner";
import TestimonialsCard from "../../components/testimonialsCard/TestimonialsCard";
import "./testimonials.css";
const Testimonials = () => {
  return (
    <div className="testimonials__parent">
      <SlideBanner page={"Testimonials"} />

      <PageContainer>
        <HeadingTitle
          title={"Reviewed by People"}
          text={"Client's Testimonials"}
          subText={
            "Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you."
          }
        />

        <div className="testimonials__cards__container">
          <TestimonialsCard
            text={
              "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."
            }
            image={harryPoter}
            name={"Parry Hotter"}
            city={"Belgrade"}
          />
          <TestimonialsCard
            text={
              "The car was in great condition and made our trip even better. Highly recommend for this car rental website!"
            }
            image={ron}
            name={"Ron Rizzly"}
            city={"Novi Sad"}
          />{" "}
        </div>
      </PageContainer>
      <Banner mode={"second"} />
    </div>
  );
};

export default Testimonials;
