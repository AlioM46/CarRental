import React, {useEffect, useState} from "react";
import {FaBars} from "react-icons/fa";
import {Link, useLocation} from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import PageContainer from "../PageContainer/PageContainer";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./nav.css";
const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const {pathname} = useLocation();
  useEffect(() => {
    setToggle(false);

    console.log("ASD");
  }, [pathname]);

  return (
    <PageContainer>
      <div className="nav">
        <div className="nav__logo">
          <img
            src={Logo}
            onClick={() => {
              window.location = "/";
            }}
          />
        </div>
        <ul className="nav__links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/models">Vehicle Models</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul className={`nav__links__mobile ${toggle && "active"}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/models">Vehicle Models</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li className="nav__links__login">
            <Link to={"/"}>Sign In</Link>
            <PrimaryButton>Register</PrimaryButton>
          </li>
        </ul>
        <div className="nav__login">
          <Link to={"/"}>Sign In</Link>
          <PrimaryButton>Register</PrimaryButton>
        </div>
        <div onClick={() => setToggle(!toggle)} className="nav__bar">
          <FaBars />
        </div>
      </div>
    </PageContainer>
  );
};

export default Nav;
