import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="register section-padding">
      <div className="center">
        <h1>Register</h1>
        <form method="post">
          <div className="input">
            <input type="email" required />
            <span></span>
            <label>Email</label>
          </div>
          <div className="input">
            <input type="text" required />
            <span></span>
            <label>Username</label>
          </div>
          <div className="input">
            <input type="password" required />
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
