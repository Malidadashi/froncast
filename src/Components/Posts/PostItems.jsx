import React from "react";
import "./postsitems.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiX } from "react-icons/fi";

const PostItems = ({ picture, title }) => {
  return (
    <div className="postitems">
      <div>
        <img src={picture} alt="coursename" width="100%" height="65%" />
        <p>{title}</p>
        <p className="postitems-p">
          ادامه پست
          <FaArrowLeftLong />
        </p>
      </div>
    </div>
  );
};

export default PostItems;
