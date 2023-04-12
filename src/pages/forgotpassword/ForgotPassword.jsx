import React, { useState } from "react";
import "./forgotpassword.css";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3001/user/forgot-password", {
        email,
      });
      alert("Password reset request sent successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to request password reset.");
    }
  };

  return (
    <div className="forgotpassword section-padding">
      <div className="forgotpassword-center">
        <h1>Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="forgotpassword-input">
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span></span>
            <label>Email</label>
          </div>
          {/* <div className="input">
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span></span>
            <label>New Password</label>
          </div> */}
          <input type="submit" value="Reset Password" />
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
