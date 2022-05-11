import React from 'react'
import './contactus.css'

const ContactUs = () => {
  return (
    <>
      <div className='contactus'>
        <div className='contact-wrapper'>
          <div className='contact'>
            <h1>CONTACT US</h1>
            <p>+234 12345678</p>
            <p>info@avenir.com</p>
            <p>190 Ottley Drive, Ikoyi</p>

            <div className='social'>
              <i className="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-pinterest-p"></i>
            </div>
          </div>

          <div className='contact-form'>
            <div>
              <input type="text"  placeholder='enter your name'/>
            </div>

            <div>
              <input type="text"  placeholder='enter a valid email address'/>
            </div>
            
            <div>
              <textarea name="" id=""  placeholder='enter your message'></textarea>
            </div>

            <button>SUBMIT</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs;