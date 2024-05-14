import React from "react";
import "./navbar.css";
import { useState } from "react";
import frontcast from "../../assets/frontcast.png";
import CoureseContainer from "../Course/CoureseContainer"
import CustomComponent from "./CustomComponent";
const Navbar = () => {
  const [hideCourse, setHideCourse] = useState(false)  
  return (
    <div className="navbar">
      <div className="navbar-logo-top">
        <img src={frontcast} alt="frontcastlogo" />
      </div>


      <div className="navbar-menu">
        <ul className="navbar-menu-ul">
          <li className="navbar-menu-account">حساب کاربری</li>
          <li>صفحه اصلی</li>
          <li onClick={CoureseContainer} >دوره های آموزشی</li>
          <button onClick={()=> setHideCourse(!hideCourse)}>click here
          </button>
        </ul>
        <CustomComponent isShow={hideCourse}/>
      </div>
    </div>
  );
};

export default Navbar;
