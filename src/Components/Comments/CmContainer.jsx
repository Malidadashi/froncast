import React from "react";
import jalali from "../../assets/jalali.jpg";
import './CmItems'
const CmContainer = () => {
  const cmItems = [
    {
      user: "علی جلالی",
      profilepicture:  jalali,
      userscomment:
        "من در چند دوره‌ی ویدیویی و حضوری آموزش برنامه نویسی شرکت کرده بودم، ولی با حضور در دوره‌های ری‌اکت و نود جی‌اس استاد صدری به عمیق‌ترین مفاهیم برنامه نویسی جاوااسکریپت پی بردم. روش تدریس ایشون رو تا به حال در هیچ کدوم از دوره‌های مشابه ندیده بودم. از مفاهیم بسیار ساده شروع شده و پله پله بدون اینکه کسی لحظه‌ای از کلاس عقب بمونه تمام حاضرین رو تا رسیدن به پیشرفته‌ترین مراحل با خودشون همراه می‌کردن. من به شخصه کل پیشرفت‌هایی که در زمینه برنامه نویسی داشتم رو مدیون ایشون هستم. بعد از اتمام دوره‌ها توسط ایشون به یک شرکت دانش بنیان معرفی شدم و هم اکنون با این شرکت در حال همکاری هستم. ",
    },
    // {},
    // {},
    // {},
    // {},
    // {},
  ];
  return (
    <section>
      {cmItems.map((Comment) => {
        return (
          <cmItems
            name={Comment.name}
            picture={Comment.picture}
            Comment={Comment.Comment}
          />
        );
      })}
    </section>
  );
};

export default CmContainer;
