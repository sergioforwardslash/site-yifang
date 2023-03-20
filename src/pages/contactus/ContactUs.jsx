import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import env from 'react-dotenv'

import './contactus.css'

import { images } from '../../constants'

const ContactUs = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm(env.REACT_APP_serviceID, env.REACT_APP_templateID, form.current, env.REACT_APP_publicKey)
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
  };

  return (
    <div className='contactus section-padding' style={{ backgroundImage: `url(${images.background})`, backgroundSize: '100%' }}>
      <div className='contactus-container'>
      <div className="center">
        <h1>Send Us A Message!</h1>
        <form method="post" ref={form} onSubmit={handleSubmit}>
          <div className="input">
          <input
              type="text"
              name='name'
              required
              value={formData.name}
              onChange={handleChange}
            />
            <span></span>
            <label>Name</label>
          </div>
          <div className="input">
          <input
              type="email"
              name='email'
              required
              value={formData.email}
              onChange={handleChange}
            />
            <span></span>
            <label>Email</label>
          </div>
          <div className="input">
          <input
              type="text"
              name='message'
              required
              value={formData.message}
              onChange={handleChange}
            />
            <span></span>
            <label>Message</label>
          </div>
          <input type="submit" value="Submit" />
          <div className="loginpg">
          </div>
        </form>
      </div>
      
      </div>
    </div>
  )
}

export default ContactUs