import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

// import Course from './Components/Course/Course'
// import Comments from './Components/Comments/Comments'
// import Footer from './Components/Footer/Footer'
import CoureseContainer from './Components/Course/CoureseContainer'
import CmContainer from './Components/Comments/CmContainer'
const App = () => {
  return (
    <div>
      <Navbar />

      {/* <Course/> */}
      <CoureseContainer />
      <CmContainer />
      {/* <Comments/> */}


      {/* <Footer/> */}
    </div>
  )
}

export default App