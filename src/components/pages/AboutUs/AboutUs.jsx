import React from 'react'
import './aboutus.css'
import { Brands } from '../../Data';
import { Contact } from '../../Data';


const AboutUs = () => {
  
  return (
    <>
      <div className='about'>
        <div className='about-header'>
          <h1>ABOUT US</h1>
          <div className='hr-line'></div>
        </div>

        <div className="about-body">
          {
            Contact.map((conta) => (
              <p>{conta.body}</p>
            ))
          }

          <button className='read-more'>READ MORE</button>
        </div>

        <div className='features'>
          
          {
            Brands.map((brand) => (
                <div className='feat' key={brand.id}>
                  <img src={brand.image} alt="" />
                </div>
              )
            )
          }
          
        </div>

      </div>
    </>
  )
}

export default AboutUs;