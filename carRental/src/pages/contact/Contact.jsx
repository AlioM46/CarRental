import React from "react";
import {FaLocationArrow, FaPhone} from "react-icons/fa";
import {MdEmail, MdMarkEmailRead} from "react-icons/md";
import Input from "../../components/Input/Input";
import PageContainer from "../../components/PageContainer/PageContainer";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import SlideBanner from "../../components/SlideBanner/SlideBanner";
import Banner from "../../components/banner/Banner";
import "./contact.css";
const Contact = () => {
  return (
    <div>
      <SlideBanner page={"Contact Us"} />
      <PageContainer>
        <div className="contact__container">
          <div className="contact__info">
            <h2>Need additional information?</h2>
            <p>
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <p>
              <FaPhone /> (123)-456-789
            </p>
            <p>
              <MdEmail /> aliomaralsloom@gmail.com
            </p>
            <p>
              <FaLocationArrow /> Saudi Arabia, Riyadh
            </p>
            {/*  */}
          </div>

          {/*  */}

          <div className="contact__form">
            <Input
              type={"text"}
              title={
                <>
                  Full Name
                  <span>*</span>
                </>
              }
              id={"fName"}
              placeholder={` For E.g "John Doe"`}
            />
            <Input
              type={"text"}
              title={
                <>
                  Email
                  <span>*</span>
                </>
              }
              id={"email"}
              placeholder={`youremail@example.com`}
            />

            <Input
              type={"text"}
              title={
                <>
                  Tell us about it
                  <span>*</span>
                </>
              }
              id={"textArea"}
              placeholder={`Write Here....`}
            />
            <PrimaryButton>
              <MdMarkEmailRead />
              Send Message
            </PrimaryButton>
          </div>
        </div>
      </PageContainer>
      <Banner mode={"second"} />
    </div>
  );
};

export default Contact;
