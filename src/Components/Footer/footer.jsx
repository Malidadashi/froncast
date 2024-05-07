import React from "react";
import "./footer.css";
import zarinpal from "../../assets/zarinpal.svg";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <ul>
          <li>درباره ما</li>
          <li>تماس با ما</li>
          <li>شرایط استفاده</li>
          <li>وبلاگ</li>
          <li>سبد خرید</li>
          <li>کانال تلگرام</li>
        </ul>
      </div>
      <div>
        
      </div>
      <div className="footer-s">
      <div className="footer-social">
        <p>شبکه های اجتماعی:</p>
        <a href="#">
          {" "}
          <FaTwitter />
        </a>
        <a href="#">
          <FaInstagramSquare />
        </a>
        <a href="#">
          {" "}
          <FaTelegram />
        </a>
        <a href="#">
          <FaYoutube />
        </a>
        <a href="#">
          {" "}
          <FaLinkedin />
        </a>
      </div>


      </div>
      <div>
        <p></p>
      </div>
      <div className="footer-pal">
        <p>تمامی حقوق برای فرانت کست محفوظ است</p>
        <img src={zarinpal} alt="zaripalwebsite" />
      </div>
    </div>
  );
};

export default Footer;
