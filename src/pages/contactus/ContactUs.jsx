import React, { useState, useRef } from "react";
import axios from "axios";
import "./contactus.css";

import { useSelector } from "react-redux";
import { useEffect } from "react";

const ContactUs = () => {
  const background = useSelector((state) => state.background);
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/contactus", formData);
      console.log(response.data.message);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  useEffect(() => {
    if (background) {
      document.body.style.backgroundImage = `url(http://localhost:8000/${background})`;
      document.body.style.backgroundSize = "100%";
    }
  }, [background]);

  return (
    <div className="contactus section-padding">
      <div className="contactus-container">
        <div className="contactus-center">
          <h1>Send Us A Message!</h1>
          <form method="post" ref={form} onSubmit={handleSubmit}>
            <div className="contactus-input">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <span></span>
              <label>Name</label>
            </div>
            <div className="contactus-input">
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <span></span>
              <label>Email</label>
            </div>
            <div className="contactus-input">
              <input
                type="text"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
              />
              <span></span>
              <label>Message</label>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
