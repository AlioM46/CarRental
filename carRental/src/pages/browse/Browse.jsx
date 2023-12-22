import React from "react";
import CarsJson from "../../assets/json/cars.json";
import PageContainer from "../../components/PageContainer/PageContainer";
import SlideBanner from "../../components/SlideBanner/SlideBanner";
import Banner from "../../components/banner/Banner";
import CarCard from "../../components/carCard/CarCard";

import "./browse.css";
const Browse = () => {
  const {cars} = CarsJson;
  return (
    <div>
      <SlideBanner page={"Vehicle Models"} />
      <PageContainer>
        <div className="cars__container">
          <div className="cars__container">
            {cars?.map((item, idx) => {
              return <CarCard key={idx} item={item} />;
            })}
          </div>
        </div>
      </PageContainer>
      <Banner mode={"second"} />
    </div>
  );
};

export default Browse;
