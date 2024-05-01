import React from 'react'
import './footer.css'
import zarinpal from '../../assets/zarinpal.svg'
const footer = () => {
  return (
    <div>
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
  <p></p>
  {/* 5تا آیکون */}
</div>

<div>
  <p></p>
</div>


<div>
  <img src={zarinpal} alt='zaripalwebsite'/>
</div>

    </div>
  )
}

export default footer