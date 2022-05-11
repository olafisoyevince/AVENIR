import React from 'react';
import './home.css'
import Logo from '../../../assets/avenirLOGO.png'
import { Things } from '../../Data';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
  return (
    <>
      <div className='header-wrapper'>
        <div className='header'>
          <img src={Logo} alt="" />
          <h1 className='the-place'>showing the hidden beauty of life through pictures...</h1>
        </div>
      </div>
      <div className='photo-grid'>
        {
          Things.map( (thing) => (
              <div className='box' key={thing.id}>
                <img src={thing.image} alt="" />
              </div>  
            )
          )
        }
      </div>
      <AboutUs />
      <ContactUs />
    </>
  )
}

export default Home;
