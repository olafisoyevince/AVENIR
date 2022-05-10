import React from 'react';
import './style.css'
import Logo from '../../../assets/avenirLOGO.png'
import { Things } from '../../Data';
import AboutUs from '../AboutUs';
import ContactUs from '../ContactUs';
import { Brands } from '../../Data';


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
          Things.map( thing => {
            return (
              <div className='box' key={thing.id}>
                <img src={thing.image} alt="" />
              </div>  
            )
          })
        }
      </div>
      <AboutUs brands={Brands}/>
      <ContactUs />
    </>
  )
}

export default Home;
