import React, {useEffect, useState} from "react";
import jsonCars from "../../../assets/json/cars.json";
import HeadingTitle from "../../../components/HeadingTitle/HeadingTitle";
import "./vehicleModels.css";
const renderInfoArray = [
  "Model",
  "Mark",
  "Year",
  "Doors",
  "AC",
  "Transmission",
  "Fuel",
];

const vehicleModels = () => {
  const {cars} = jsonCars;
  const [car, setCar] = useState([]);

  useEffect(() => {
    if (cars.length || Array.isArray(cars)) {
      setCar(cars[0]);
    }
  }, [cars]);

  let carsListRender;
  if (cars) {
    carsListRender = cars.map((item) => {
      return (
        <li
          onClick={() => setCar(item)}
          className={`${car.id == item.id && "choosenCar"}`}
        >
          {item.name}
        </li>
      );
    });
  }

  let carsInfoRender;

  if (car) {
    carsInfoRender = renderInfoArray.map((item) => {
      return (
        <div className="col-div">
          <span>{item}</span>
          <span>{car[item.toLowerCase()]}</span>
        </div>
      );
    });
  }

  return (
    <div className="vehicleModels">
      <HeadingTitle
        title={"Vehicle Models"}
        text={"Our rental fleet"}
        subText={
          "Choose from a variety of our amazing vehicles to rent for your next adventure or business trip"
        }
      />
      <div className="vehicleModels__container">
        <div className="vehicleModels__list">
          <ul>{carsListRender}</ul>
        </div>
        <div className="vehicleModels__image">
          <img src={car.image} alt={car.title} title={car.name} />
        </div>
        <div className="vehicleModels__info">
          <div>
            <span>{car.rent}$</span>
            <span>/ rent per day</span>
          </div>
          {/*  */}
          {carsInfoRender}
          <button className="vehicleModels__info__btn">RESERVE NOW</button>
        </div>
      </div>
    </div>
  );
};

export default vehicleModels;
