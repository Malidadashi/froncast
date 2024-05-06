import React from "react";
// import CourseItem from "./CourseItem";
import "./CourseContainer.css";
import nextjs from "../../assets/nextjs.jpg";
import js_advanced_concepts from "../../assets/js_advanced_concepts.jpg";
import typescript from '../../assets/typescript.jpg'
import CourseItem from "./CourseItem";

const CoureseContainer = () => {
  const courseItem = [
    {
      courseTitle: "آموزش nextjs",
      price: "850 هزار تومان",
      image: nextjs,
    },

    {
      courseTitle: "آموزش React",
      price: "500 هزار تومان",
      image: js_advanced_concepts,
    },
    {
      courseTitle: "آموزش Css",
      price: "رایگان",
      image:typescript
    },
  ];
  return (
    <section className="course-container">
      {courseItem.map((course) => {
        return (
          <CourseItem
            courseTitle={course.courseTitle}
            price={course.price}
            imagesrc={course.image}
          />
        );
      })}
    </section>
  );
};

export default CoureseContainer;
