import React from "react";
import "./simple-dev.css";
import uwu from "../../assets/uwu.png";
import { MdOutlineEditNote } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { BsChatQuote } from "react-icons/bs";
const Simple_Dev = () => {
  return (
    <div className="simple-dev">
      <div className="simple-dev-rightside">
        <div className="simple-dev-upperside">
          <h1 className="simple-dev-upperside-h1">
            .برنامه نویسی به زبان ساده
          </h1>
          <p className="simple-dev-upperside-p">
            در فرانت کست می توانید مهارت های برنامه نویسی خود را تقویت کنید{" "}
            <br />
            .و به یک توسعه دهنده حرفه ای تبدیل شوید
          </p>
        </div>

        <div className="simple-dev-learn">
          <button className="simple-dev-learn-btn">شروع یادگیری</button>
        </div>

        <div className="simple-dev-learn-icons">
          <div className="simple-dev-icons">
            <div className="simple-dev-icons-1throw">
              <ul className="">
                <li>
                  یادگیری با انجام تمرین <MdOutlineEditNote />
                </li>
                <li>
                  ویدیوهای کوتاه و با کیفیت
                  <IoMdTime />
                </li>
                <li>
                  ضمانت بازگشت وجه
                  <IoWalletOutline />
                </li>
              </ul>
            </div>
            <div className="simple-dev-icons-2throw">
              <span>
                <ul>
                  <li>
                    به روز رسانی رایگان
                    <CiVideoOn />
                  </li>
                  <li>
                    سرفصل‌های جامع و دقیق
                    <RiMenu3Line />
                  </li>
                  <li>
                    پشتیبانی دوره‌ها
                    <BsChatQuote />{" "}
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="simple-dev-leftside">
        <div className="simple-dev-reactimg">
          <img src={uwu} alt="uwu" />
        </div>
      </div>
    </div>
  );
};

export default Simple_Dev;
