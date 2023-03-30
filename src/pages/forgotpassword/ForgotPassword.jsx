import React, { useState } from "react";
import "./forgotpassword.css";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3001/user/forgot-password", {
        email,
        password,
      });
      alert("Password reset successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to reset password");
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <div className="input">
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
        <div className="input">
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span></span>
          <label>Password</label>
        </div>
        <input type="submit" value="Reset Password" />
      </form>
    </div>
  );
};

export default ForgotPassword;
