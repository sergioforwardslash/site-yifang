import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login section-padding">
      <div className="center">
        <h1>Login</h1>
        <form method="post">
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
          <div className="pass">Forgot Password?</div>
          <input type="submit" value="Login" />
          <div className="signup">
            Not a member? <a href="/register">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
