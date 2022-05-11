import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import ContactUs from './components/pages/ContactUs/ContactUs';
import AboutUs from './components/pages/AboutUs/AboutUs';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/AVENIR' element={<Home />} />
        <Route path='about-us' element={<AboutUs />} />
        <Route path='contact-us' element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
