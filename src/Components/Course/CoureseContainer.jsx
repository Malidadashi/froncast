import React from "react";
// import CourseItem from "./CourseItem";
import "./CourseContainer.css";
import nextjs from "../../assets/nextjs.jpg";
import js_advanced_concepts from "../../assets/js_advanced_concepts.jpg";
import typescript from "../../assets/typescript.jpg";
import react from "../../assets/react.jpg";
import data_structures_and_algorithms from "../../assets/data_structures_and_algorithms.jpg";
import javascript_advanced from "../../assets/javascript_advanced.jpg";
import CourseItem from "./CourseItem";

const CoureseContainer = ({show: boolean}) => {
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
      image: typescript,
    },
    {
      courseTitle: " آموزش react",
      price: "1540 هزار تومان",
      image: react,
    },
    {
      courseTitle: "آموزش ساختمان داده و الگوریتم ها در جاوااسکریپت",
      price: "500 هزار تومان",
      image: data_structures_and_algorithms,
    },
    {
      courseTitle: "آموزش javascript",
      price: "رایگان",
      image: javascript_advanced,
    },
  ];

  return (
    <section className="course-container">
      <h1 className="course-container-h1">دوره های آموزشی</h1>
      <section className="course-items">
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
    </section>
  );
};

export default CoureseContainer;
