import React, {useEffect, useState} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {CiCalendarDate} from "react-icons/ci";
import {FaCarSide} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";
import carsJson from "../../../assets/json/cars.json";
import FullFrom from "../../../components/FullFrom/FullFrom";
import Input from "../../../components/Input/Input";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import Select from "../../../components/Select/Select";
import "./bookCar.css";

const BookCar = () => {
  const [carType, setCarType] = useState("");
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [dropOfLocation, setDropOfLocation] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOf, setDropOf] = useState("");

  const [showErr, setShowErr] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const locations = ["Alaska", "New York", "Nevada", "The Moon", "Mars"];
  const {cars} = carsJson;

  // car type

  const handleRequest = () => {
    if (!carType || !pickUpLocation || !dropOfLocation || !pickUp || !dropOf) {
      setShowErr(true);
      setShowSuccess(false);
    } else {
      setShowErr(false);
      setShowForm(true);
    }
  };

  const handleClose = (type) => {
    if (type == "success") {
      setShowSuccess(false);
    } else {
      setShowErr(false);
    }
  };

  // Reset All Data

  useEffect(() => {
    if (showSuccess) {
      setCarType("");
      setPickUpLocation("");
      setDropOfLocation("");
      setPickUp("");
      setDropOf("");
    }
  }, [showSuccess]);

  let errorMessage = (
    <p className="errMsg msgBetween ">
      All fields required!{" "}
      <AiOutlineClose onClick={() => handleClose("error")} />
    </p>
  );
  let successMessage = (
    <p className="successMsg msgBetween ">
      Check your email to confirm an order.
      <AiOutlineClose onClick={() => handleClose("success")} />
    </p>
  );
  const carTypeOptions = cars.map((item) => {
    return <option value={item.id}>{item.name}</option>;
  });

  const pickUpOptions = locations.map((item) => {
    return <option value={item}>{item}</option>;
  });
  const dropOfOptions = locations.map((item) => {
    return <option value={item}>{item}</option>;
  });

  return (
    <div className="bookCar">
      <h1>Book a Car</h1>
      {showSuccess && successMessage}
      {showForm && (
        <>
          <FullFrom
            setShowSuccess={setShowSuccess}
            setShowForm={setShowForm}
            pickDate={pickUp}
            pickLocation={pickUpLocation}
            dropDate={dropOf}
            dropLocation={dropOfLocation}
            carId={carType}
          />
        </>
      )}
      {showErr ? errorMessage : ""}
      <form>
        <Select
          options={carTypeOptions}
          starterOption={<option value="">Pick-up location</option>}
          setter={setCarType}
          value={carType}
          title={
            <>
              <FaCarSide />
              Select Car Type <span>*</span>
            </>
          }
        />

        <Select
          options={pickUpOptions}
          starterOption={<option value="">Pick-up location</option>}
          setter={setPickUpLocation}
          value={pickUpLocation}
          title={
            <>
              <FaLocationDot />
              Pick-up <span>*</span>
            </>
          }
        />

        <Select
          options={dropOfOptions}
          starterOption={<option value="">drop-of location</option>}
          setter={setDropOfLocation}
          value={dropOfLocation}
          title={
            <>
              {" "}
              <FaLocationDot /> Drop-of
              <span>*</span>
            </>
          }
        />

        <Input
          type={"date"}
          setter={setPickUp}
          id={"dropDate"}
          value={pickUp}
          title={
            <>
              <CiCalendarDate />
              Pick-up Date <span>*</span>
            </>
          }
        />
        <Input
          type={"date"}
          setter={setDropOf}
          id={"pickDate"}
          value={dropOf}
          title={
            <>
              <CiCalendarDate /> Drop-of Date <span>*</span>
            </>
          }
        />

        <div className="btnWrapper" onClick={handleRequest}>
          <PrimaryButton>Search</PrimaryButton>
        </div>

        {/*  */}
      </form>
    </div>
  );
};

export default BookCar;
