import React, { useState } from "react";
import "./login.css";
import axios from "axios";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/user/login", userInfo)
      .then((response) => {
        console.log("Loggedin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="login section-padding">
      <div className="login-center">
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
          <div className="login-input">
            <input
              type="text"
              name="username"
              value={userInfo.username}
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
              value={userInfo.password}
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
