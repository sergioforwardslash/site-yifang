import React from 'react'
import './footer.css'

import { FaInstagram, FaFacebook, FaPhoneAlt } from 'react-icons/fa';
import images from '../../assets/images'

const Footer = () => {
  return (
    <div className="footer section-padding" id="login">

    <div className="footer-links">
      <div className="footer-links_contact">
        <h1 className="footer-headtext">Contact Us</h1>
        <p className="p__opensans">251 N Brand Blvd, Glendale, CA 91203, USA</p>
        <p className="p__opensans">+1 747-215-6272</p>
      </div>

      <div className="footer-links_logo">
        <img src={images.yifangWhite} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <div className="footer-links_icons">
          <FaFacebook />
          <FaPhoneAlt />
          <FaInstagram />
        </div>
      </div>

      <div className="footer-links_work">
        <h1 className="footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">12:00 pm - 10:00 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">12:00 pm - 11:00 pm</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p className="p__opensans">2023 Yi Fang. All Rights reserved.</p>
    </div>

  </div>
  )
}

export default Footer