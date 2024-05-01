import React from "react";
import "./navbar.css";
import frontcast from "../../assets/frontcast.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo-top">
        <img src={frontcast} alt="frontcastlogo" />
      </div>


      <div className="navbar-menu">
        <ul className="navbar-menu-ul">
          <li className="navbar-menu-account">حساب کاربری</li>
          <li>صفحه اصلی</li>
          <li>دوره های آموزشی</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
