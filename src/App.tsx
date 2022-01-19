import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import HeaderBar from './Components/Layout/AppBar';


// pages
import Home from './pages/home'
import Profile from './pages/profile'
import About from './pages/about'


function App() {
  return (
    <>
      <HeaderBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="user/:name" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </>
  )
}

export default App

