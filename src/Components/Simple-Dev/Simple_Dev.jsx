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
      <div>
        <h1></h1>
        <p>
          در فرانت کست می توانید مهارت های برنامه نویسی خود را تقویت کنید و به
          یک توسعه دهنده حرفه ای تبدیل شوید
          
          
        </p>
      </div>

      <div>
        <button>شروع یادگیری</button>
      </div>

      <div>
        <ul>
          <li>یادگیری با انجام تمرین <MdOutlineEditNote/></li>
          <li>ویدیوهای کوتاه و با کیفیت<IoMdTime/></li>
          <li>ضمانت بازگشت وجه<IoWalletOutline/></li>
          <li>به روز رسانی رایگان<CiVideoOn/></li>
          <li>سرفصل‌های جامع و دقیق<RiMenu3Line/></li>
          <li>پشتیبانی دوره‌ها<BsChatQuote/></li>
        </ul>
      </div>

      <div>
        <img src={uwu} alt="uwu" />
      </div>
    </div>
  );
};

export default Simple_Dev;
