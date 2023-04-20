import React, { useState } from "react";
import "./login.css";
import axios from "axios";

const Login = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [FormData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    axios
      .post("http://192.155.82.210/user/login", FormData)
      .then((response) => {
        setSuccess(true)
        setError(null)
        console.log("Loggedin");
      })
      .catch((error) => {
        setSuccess(false)
        setError(true)
        console.log(error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="login section-padding">
      <div className="login-center">
        <h1>Login</h1>
        {submitting && <p>Submitting...</p>}
        {success && <p id="successMessage">Login successful!</p>}
        {error && <p id="errorMessage">Incorrect username or password.</p>}
        <form onSubmit={onSubmit}>
          <div className="login-input">
            <input
              type="text"
              name="username"
              value={FormData.username}
              onChange={handleChange}
              required
            />
            <span></span>
            <label>Username</label>
          </div>
          <div className="login-input">
            <input
              type="password"
              name="password"
              value={FormData.password}
              onChange={handleChange}
              required
            />
            <span></span>
            <label>Password</label>
          </div>
          <div className="login-pass">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <input type="submit" value="Login" />
          <div className="login-signup">
            Not a member? <a href="/register">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
