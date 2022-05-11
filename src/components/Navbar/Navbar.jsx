import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './navbar.css'
import Logo from '../../assets/avenirLOGO.png'

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <div className='navbar-wrapper'>
        <nav className='navbar'>
          <Link to='/AVENIR' className='navbar-logo'>
            <img src={Logo} alt="" />
          </Link>
          
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}  />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link to='/AVENIR' className='navlinks' onClick={closeMobileMenu}>home</Link>
            </li>
            
            <li className='nav-item'>
              <Link to='/about-us' className='navlinks' onClick={closeMobileMenu}>about us</Link>
            </li>

            <li className='nav-item'>
              <Link to='/contact-us' className='navlinks' onClick={closeMobileMenu}>contact us</Link>
            </li>

          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  )
};

export default Navbar;