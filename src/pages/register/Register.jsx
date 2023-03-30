import React from "react";
import "./register.css";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault()
    setSubmitting(true);
    axios
      .post("http://localhost:3001/user/register", formData)
      .then((response) => {
        setSuccess(true);
        setError(null);
        
      })
      .catch((e) => {
        setSuccess(false);
        setError(e);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };
  return (
    <div className="register section-padding">
      <div className="center">
        <h1>Register</h1>
        {submitting && <p>Submitting...</p>}
        {success && <p id="successMessage">Registration successful!</p>}
        {error && <p id="errorMessage">Error: {error.message}</p>}
        <form action="/register" method="POST" onSubmit={(event) => onSubmit(event)}>
          <div className="input">
            <input
              type="email"
              name="email"
              required
              aria-label="Email address"
              aria-describedby="email-help-text"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              value={formData.email}
              onChange={handleChange}
            />
            <span></span>
            <label>Email</label>
          </div>
          <div className="input">
            <input type="text" name="username" required value={formData.username} onChange={handleChange} />
            <span></span>
            <label>Username</label>
          </div>
          <div className="input">
            <input type="password" name="password" required value={formData.password} onChange={handleChange} />
            <span></span>
            <label>Password</label>
          </div>
          <input type="submit" value="Register" />
          <div className="loginpg">
            Already a member? <a href="/login">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
