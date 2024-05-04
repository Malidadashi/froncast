import React from "react";
import nextjs from "../../assets/nextjs.jpg";
import { FaArrowLeftLong } from "react-icons/fa6";
const Sheets = () => {
  return (
    <div className="box1">
      <div className="box1-img">
        <img src={nextjs} alt="next.js" />
      </div>
      <div className="box1-complete">
        <ul className="box1-complete-ul">
          <li>تکمیل شده</li>
        </ul>
      </div>
      <div className="box1-title">
        <p>آموزش Next.js - دوره جامع</p>
      </div>
      <div className="box1-rowtitle">
        <div className="box1-rowtitle-price">
          <mark>
            870000
            تومان</mark>
        </div>
        <div className="box1-rowtitle-viewcourse">
          <p>
            مشاهده دوره <FaArrowLeftLong />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sheets;
