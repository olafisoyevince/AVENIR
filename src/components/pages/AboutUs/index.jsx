import React from 'react'
import './style.css'

const AboutUs = ({brands}) => {
  return (
    <>
      <div className='about'>
        <div className='about-header'>
          <h1>ABOUT US</h1>
          <div className='hr-line'></div>
        </div>

        <div className="about-body">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem excepturi aliquam quos sit est! 
            Autem tenetur magnam placeat atque fugit tempora praesentium provident! Dicta eveniet perspiciatis, 
            error vel laborum, voluptatem nam, ipsum voluptates perferendis esse ea maiores natus quam sequi
             veritatis dolorem. </p>

          <button className='read-more'>READ MORE</button>
        </div>

        <div className='features'>
          
          {
            brands.map(brand => {
              return(
                <div className='feat' key={brand.id}>
                  <img src={brand.image} alt="" />
                </div>
              )
            })
          }
          
        </div>

      </div>
    </>
  )
}

export default AboutUs