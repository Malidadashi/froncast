import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

// import Course from './Components/Course/Course'
// import Comments from './Components/Comments/Comments'
import Footer from './Components/Footer/Footer'
import CoureseContainer from './Components/Course/CoureseContainer'
import CmContainer from './Components/Comments/CmContainer'
import PostContainer from './Components/Posts/PostContainer'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home.jsx'
const App = () => {
   <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<h2>TEST</h2>} path='/test'/>
      {/* <Route element={<PostsPage />>} path='/posts' />
      <Route element={<PostsPage />>} path='/posts' />
      <Route element={<PostsPage />>} path='/posts' /> */}

    </Routes>

  return (
    <div className='main-content'>
      <Navbar />
      {/* <Course/> */}
      <CoureseContainer />
      <CmContainer />
      {/* <Comments/> */}

      <PostContainer />
      <Footer />
    </div>
  )
}

export default App