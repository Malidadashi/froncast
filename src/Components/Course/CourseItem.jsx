import React from "react";
// import nextjs from "../../assets/nextjs.jpg";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./CourseItem.css";
const CourseItem = ({ courseTitle, price, imagesrc }) => {
  return (
    <div className="course-item">
        <img
          src={imagesrc}
          alt="imagecourse"
          // width="100%"
          // height="100%"
          className="course-img"
        />
      <div className="course-complete">
        <ul className="course-complete-ul">
          <li>تکمیل شده</li>
        </ul>
      </div>
      <div className="course-title">
        <h3>{courseTitle}</h3>
      </div>
      <div className="course-rowtitle">
        <div className="course-rowtitle-price">
          <mark>{price}</mark>
        </div>
        <div className="course-rowtitle-viewcourse">
          <p>
            مشاهده دوره <FaArrowLeftLong />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
