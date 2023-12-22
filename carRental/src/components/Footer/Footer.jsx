import React from "react";
import {FaPhoneAlt} from "react-icons/fa";
import {IoIosMail} from "react-icons/io";
import PageContainer from "../PageContainer/PageContainer";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./footer.css";
const Footer = () => {
  return (
    <PageContainer>
      <div className="footer">
        <div className="footer-col">
          <h3>
            CAR <span>Rental</span>
          </h3>

          <p>
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>
          <p className="footer__icons">
            <FaPhoneAlt />
            (123)-456-789
          </p>
          <p className="footer__icons">
            <IoIosMail />
            aliomaralsloom@gmail.com
          </p>
        </div>
        {/*  */}

        <div className="footer-col">
          <h3>COMPANY</h3>
          <p>New York</p>
          <p>Careers</p>
          <p>Mobile</p>
          <p>Blog</p>
          <p>How we work</p>
        </div>

        <div className="footer-col">
          <h3>WORKING HOURS</h3>
          <p>Mon - Fri: 9:00AM - 9:00PM</p>
          <p>Sat: 9:00AM - 19:00PM</p>
          <p>Sun: Closed</p>
        </div>

        <div className="footer-col">
          <h3>SUBSCRIPTION</h3>
          <p>Subscribe your Email address for latest news & updates.</p>
          <input type="text" placeholder="Submit Your Email" />
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </PageContainer>
  );
};

export default Footer;
