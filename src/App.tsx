import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderBar from './Components/Layout/AppBar';
// pages
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import About from './pages/about/about';

function App() {
  return (
    <>
      <Router>
        <HeaderBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path=":name" element={<Profile />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
