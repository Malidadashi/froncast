import React from "react";
import PostItems from "./PostItems";
import "./postcontainer.css";
// import What_is_Dead_Zone_in_JavaScript from "../../assets/What_is_Dead_Zone_in_JavaScript.jpg";
import React_State_vs_Refs from "../../assets/React_State_vs_Refs.png";
import any_type_in_typescript from "../../assets/any_type_in_typescript.png";
import deadzone from "../../assets/deadzone.jpg";
const PostContainer = () => {
  const post = [
    { img: React_State_vs_Refs, titlename: "مقایسه state  و Ref در react" },
    {
      img: deadzone,
      titlename: "مفهوم deadzone در javascript چیست؟",
    },
    {
      img: any_type_in_typescript,
      titlename: "بررسی تایپ any در typescript",
    },
  ];
  return (
    <section className="postcontainer">
      <section className="postcontainer-s2">
        <h1>پست های فرانت کست</h1>
        <p>
          برای مشاهده پست های بیشتر به
          <a href="https://frontcast.ir/blog" className="">
            وبلاگ مراجعه کنید
          </a>
        </p>
      </section>
      <section className="postcontainer-items">
        {post.map((items) => {
          return <PostItems picture={items.img} title={items.titlename} />;
        })}
      </section>
    </section>
  );
};

export default PostContainer;
