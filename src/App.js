import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

// import Course from './Components/Course/Course'
// import Comments from './Components/Comments/Comments'
import Footer from './Components/Footer/Footer'
import CoureseContainer from './Components/Course/CoureseContainer'
import CmContainer from './Components/Comments/CmContainer'
import PostContainer from './Components/Posts/PostContainer'
const App = () => {
  return (
    <div>
      <Navbar />

      {/* <Course/> */}
      <CoureseContainer />
      <CmContainer />
      {/* <Comments/> */}

<PostContainer/>
      <Footer/>
    </div>
  )
}

export default App