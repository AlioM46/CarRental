import React from "react";
import {AiOutlineClose} from "react-icons/ai";
import {FaExclamationCircle} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";
import json from "../../assets/json/cars.json";
import Input from "../Input/Input";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./fullFrom.css";

const FullFrom = ({
  pickDate,
  pickLocation,
  dropDate,
  dropLocation,
  carId,
  setShowForm,
  setShowSuccess,
}) => {
  const {cars} = json;
  let car;
  if (cars) {
    car = cars.find((item) => item.id == carId);
  }

  const style = {
    backgroundColor: "rgba(0,0,0,.05)",
    border: "1px solid rgba(0,0,0,.1)",
    borderRadius: "2px",
  };

  return (
    <div className="fullForm">
      <div className="fullForm__overlay"></div>
      <div className="header">
        <p>COMPLETE RESERVATION</p>
        <AiOutlineClose onClick={() => setShowForm(false)} />
      </div>
      <div className="subText">
        <FaExclamationCircle />
        <p>Upon completing this reservation enquiry, you will receive:</p>
        <span>
          Your rental voucher to produce on arrival at the rental desk and a
          toll-free customer support number.
        </span>
      </div>
      <div className="collectedInfo">
        <div className="info">
          <div>
            <label>
              <FaLocationDot /> Pick-Up Date & Time
            </label>
            <p>
              {new Date(pickDate).toLocaleDateString()} / <input type="time" />
            </p>
          </div>

          <div>
            <label>
              <FaLocationDot /> Drop-Off Date & Time
            </label>
            <p>
              {new Date(dropDate).toLocaleDateString()} / <input type="time" />
            </p>
          </div>

          <div>
            <label>
              <FaLocationDot /> Pick-Up Location
            </label>
            <p>{pickLocation}</p>
          </div>

          <div>
            <label>
              <FaLocationDot /> Drop-Off Location
            </label>
            <p>{dropLocation}</p>
          </div>
        </div>
        <div className="carInfo">
          <div>
            <p>
              Car - <span>{car.name}</span>
            </p>
            <img src={car.image} alt="" />
          </div>
        </div>
      </div>
      <div className="form__line"></div>

      <div className="personal__form">
        <p>PERSONAL INFORMATION</p>

        <div className="twoCol">
          <Input
            type={"text"}
            setter={""}
            value={""}
            style={style}
            id={"fName"}
            title={
              <>
                <p>
                  First Name <span>*</span>
                </p>
              </>
            }
          />
          <Input
            type={"text"}
            setter={""}
            value={""}
            style={style}
            id={"lName"}
            title={
              <>
                <p>
                  Last Name <span>*</span>
                </p>
              </>
            }
          />
        </div>

        <div className="twoCol">
          <Input
            type={"text"}
            setter={""}
            value={""}
            style={style}
            id={"pNum"}
            title={
              <>
                <p>
                  Phone Number <span>*</span>
                </p>
              </>
            }
          />
          <Input
            type={"number"}
            setter={""}
            value={""}
            style={style}
            id={"age"}
            title={
              <>
                <p>
                  Age <span>*</span>
                </p>
              </>
            }
          />
        </div>

        {/*  */}
        <Input
          type={"email"}
          setter={""}
          value={""}
          style={style}
          id={"email"}
          title={
            <>
              <p>
                Email <span>*</span>
              </p>
            </>
          }
        />
        <Input
          type={"text"}
          setter={""}
          value={""}
          style={style}
          id={"address"}
          title={
            <>
              <p>
                Address <span>*</span>
              </p>
            </>
          }
        />

        <div className="twoCol">
          <Input
            type={"text"}
            setter={""}
            value={""}
            style={style}
            id={"city"}
            title={
              <>
                <p>
                  City <span>*</span>
                </p>
              </>
            }
          />
          <Input
            type={"text"}
            setter={""}
            value={""}
            style={style}
            id={"zip"}
            title={
              <>
                <p>
                  Zip Code <span>*</span>
                </p>
              </>
            }
          />
        </div>
        {/*  */}

        <div className="checkboxDiv">
          <input type="checkbox" name="" id="checkbox" />
          <label htmlFor="checkbox">
            Please send me latest news and updates
          </label>
        </div>
        <div
          onClick={() => {
            setShowForm(false);
            setShowSuccess(true);
          }}
          className="w-44 mt-4"
        >
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default FullFrom;
