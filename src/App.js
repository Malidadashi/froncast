import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Simple_Dev from './Components/Simple-Dev/Simple_Dev'
import Course from './Components/Course/Course'
import Comments from './Components/Comments/Comments'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
<Navbar/>
<Simple_Dev/>
<Course/>
<Comments/>


<Footer/>
    </div>
  )
}

export default App