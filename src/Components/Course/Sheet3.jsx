import React from 'react'
import typescript from '../../assets/typescript.jpg'
import { FaArrowLeftLong } from "react-icons/fa6";

const Sheet3 = () => {
  return (
    <div className='box3'>
      <div className="box3-img">
<img src={typescript} alt='typescript'/>
</div>
      <div className="box3-complete">
        <ul className="box3-complete-ul">
          <li>تکمیل شده</li>
        </ul>
      </div>
      <div className="box3-title">
        <p>آموزش Next.js - دوره جامع</p>
      </div>
      <div className="box3-rowtitle">
        <div className="box3-rowtitle-price">
          <mark>
          &#1782;&#1785;&#1776;&#1776;&#1776;&#1776;
            تومان</mark>
        </div>
        <div className="box3-rowtitle-viewcourse">
          <p>
            مشاهده دوره <FaArrowLeftLong />
          </p>
        </div>
      </div>

    </div>
  )
}

export default Sheet3


