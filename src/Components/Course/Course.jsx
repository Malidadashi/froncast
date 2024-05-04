import React from 'react'
import Sheets from './Sheets'
import './course.css'
import Sheet2 from './Sheet2'
import Sheet3 from './Sheet3' 


const Course = () => {
  return (
    <div className='course'>
        <div className='course-h1'>
            <h1>دوره های آموزشی</h1>
        </div>

        <div className='course-box1'>
            {/* 6تا باکس میاد
            که هر کدوم یک کامپوننت
            توی 6تا دیو*/}
            <Sheets/>
        </div>

        <div className='course-box2'>
        <Sheet2/>
        </div>

        <div className='course-box3'>
<Sheet3/>
        </div>
       

        <div className='course-btn'>
            <button className='course-btn-button'>مشاهده دوره های آموزشی</button>
        </div>
    </div>
  )
}

export default Course