import React from "react";
// import nextjs from "../../assets/nextjs.jpg";
import { FaArrowLeftLong } from "react-icons/fa6";
import './CourseItem.css'
const courseItems = ({courseTitle, price, imagesrc}) => {
  return (
    <div className="course-item">
      <div className="course-img">
        {/* <img src={imagesrc} alt="imagecourse" /> */}
        {imagesrc}
      </div>
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
          <mark>
            {price}
            تومان</mark>
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

export default courseItems;
