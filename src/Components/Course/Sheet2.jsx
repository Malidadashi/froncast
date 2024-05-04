import React from "react";
import js_advanced_concepts from "../../assets/js_advanced_concepts.jpg";
import { FaArrowLeftLong } from "react-icons/fa6";

const sheet2 = () => {
  return (
    <div className="box2">
      <div className="box2-img">
        <img src={js_advanced_concepts} alt="js-advance-concept" />
      </div>
      <div className="box2-complete">
        <ul className="box2-complete-ul">
          <li>تکمیل شده</li>
        </ul>
      </div>
      <div className="box2-title">
        <p>آموزش Next.js - دوره جامع</p>
      </div>
      <div className="box2-rowtitle">
        <div className="box2-rowtitle-price">
          <mark>رایگان</mark>
        </div>
        <div className="box2-rowtitle-viewcourse">
          <p>
            مشاهده دوره <FaArrowLeftLong />
          </p>
        </div>
      </div>
    </div>
  );
};

export default sheet2;
