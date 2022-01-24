import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HeaderBar from './Components/Layout/AppBar';

// pages
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import About from './pages/about/about';

function App() {
  return (
    <>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:name" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
