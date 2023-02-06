import React from 'react'
import './contactus.css'

import images from '../../assets/images'

const ContactUs = () => {
  return (
    <div className='contactus section-padding' style={{ backgroundImage: `url(${images.background})`, backgroundSize: '100%' }}>
      <div className='wrapper'>
        <div className='contactus-info'>
          <h1>Contact Us</h1>
          <p className='p__opensans'>Something we should know?</p>
          <a href='/'><button>Contact</button></a>
        </div>
      </div>
    </div>
  )
}

export default ContactUs