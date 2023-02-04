import React, { useState } from 'react'
import YiFangLogo from '../../assets/yifanglogo-white.webp'
import { FaBars, FaTimes, FaInstagram, FaFacebook, FaPhoneAlt } from 'react-icons/fa'
import './navbar.css'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={YiFangLogo} alt='YiFangLogo' />
      </div>

      <ul className='navbar-links'>
        <li><a href='/'>Home</a></li>
        <li><a href='/menu'>Menu</a></li>
        <li><a href='/catering'>Catering</a></li>
        <li><a href='/jobs'>Jobs</a></li>
        <li><a href='/contactus'>Contact Us</a></li>
      </ul>

      <div className='navbar-menu'>
        <FaBars color='#fff' fontSize={27} onClick={() => setNav(true)} />
        {nav && (
          <div className='navbar-menu-overlay flex-center'>
            <FaTimes fontSize={27} className='overlay-close' onClick={() => setNav(false)} />
            <ul className='navbar-menu-links'>
              <li><a href='/' onClick={() => setNav(false)}>Home</a></li>
              <li><a href='/menu' onClick={() => setNav(false)}>Menu</a></li>
              <li><a href='/catering' onClick={() => setNav(false)}>Catering</a></li>
              <li><a href='/jobs' onClick={() => setNav(false)}>Jobs</a></li>
              <li><a href='/contactus' onClick={() => setNav(false)}>Contact Us</a></li>
            </ul>
          </div>
        )}
      </div>

      <div className='sidebar'>
        <ul>
          <li>
            <a href='https://www.instagram.com/yifang.cal/'>
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li>
            <a href='https://www.facebook.com/yifangUSA'>
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li>
            <a href='/contactus'>
              Contact Us <FaPhoneAlt size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar