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
      <div className='wrapper'>
        <div className='contactus-info wrapper-info'>
          <h1>Contact Us</h1>
          <p className='p__opensans'>Send us a message. We'd love to hear from you!</p>
        </div>

        <div className='contactus-form'>
          <form ref={form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit" value='Send'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs