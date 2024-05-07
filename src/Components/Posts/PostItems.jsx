import React from "react";
import "./postsitems.css";
import { FaArrowLeftLong } from "react-icons/fa6";

const PostItems = ({ picture, title }) => {
  return (
    <div>
      <div>
        <p>
          برای مشاهده پست های بیشتر به
          <a href="https://frontcast.ir/blog">مراجعه کنید</a>
        </p>
      </div>
      <div>
        <img src={picture} alt="coursename" />
        <p>{title}</p>
        ادامه پست
        <FaArrowLeftLong />
      </div>

      <div></div>
    </div>
  );
};

export default PostItems;
