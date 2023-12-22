import React from "react";
import {FaRegStar} from "react-icons/fa";
import {FaCar} from "react-icons/fa6";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./carCard.css";
const CarCard = ({item}) => {
  console.log(item);
  return (
    <div className="carCard">
      <img src={item.image} alt="" />
      <div className="carCard__info">
        <h2>
          <p>{item.name}</p>
          <div>
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>
        </h2>
        {/*  */}
        <h2 className="price">
          <p>${item.rent}</p>
          <span>per day</span>
        </h2>
      </div>
      {/*  */}
      <div className="carCard__text">
        <h2>
          <p>
            <FaCar /> {item.model}
          </p>
          <p>
            <FaCar />
            <p>{item.transmission}</p>
          </p>
        </h2>
        <h2>
          <p>
            {item.doors}
            <FaCar />
          </p>
          <p>
            <p>{item.fuel}</p>
            <FaCar />
          </p>
        </h2>
      </div>
      <PrimaryButton>Book Ride</PrimaryButton>
    </div>
  );
};

export default CarCard;
