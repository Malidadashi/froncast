import React from "react";
// import CourseItem from "./CourseItem";
import './CourseContainer.css'
import nextjs from "../../assets/nextjs.jpg";
import courseItems from "./CourseItem";

const CoureseContainer = () => {
  const CourseItem = [
    {
      courseTitle: "آموزش nextjs",
      price: 870,
      imagesrc:{nextjs}
      
    },
   
    {
      courseTitle: "آموزش React",
      price: 500,
     
    },
    {
      courseTitle: "آموزش Css",
      price: "رایگان",
    },
  ];
  return (
    <section className="course-container">
      {courseItems.map((course) => (
        <CourseItem courseTitle={course.courseTitle} price={course.price} />
      ))}
    </section>
  );
};

export default CoureseContainer;
