import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./resetpassword.css";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [error, setError] = useState(null);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      // Send request to server for password reset with token and new password
      if (password === confirmPassword) {
        const response = await fetch(
          `https://yifangglendale.com/api/user/resetpassword/${token}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              password,
            }),
          }
        );

        if (response.ok) {
          // Password reset successful, handle success scenario
          // For example, show a success message and redirect to login page
          console.log("Password reset successful");
        } else {
          // Password reset failed, handle error scenario
          // For example, display error message to user
          const data = await response.json();
          setError(data.error);
        }
      } else {
        setPasswordsMatch(false);
        console.log("Passwords do not match.");
      }
    } catch (error) {
      // Handle any other errors that may occur during the password reset process
      console.error("Failed to reset password", error);
    }
  };

  return (
    <div className="resetpass section-padding">
      <div className="resetpass-center">
        <h1>Reset Password Page</h1>
        <form onSubmit={handleResetPassword}>
          <div className="resetpass-input">
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <label>Password</label>
          </div>

          <div className="resetpass-input">
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            <label>Confirm Password</label>
          </div>
          {/* Render password reset form fields */}
          {/* Include token as a hidden input */}
          <input type="hidden" name="token" value={token} />
          {/* Render submit button */}
          <input type="submit" value="Reset Password" />
        </form>
      </div>

      {/* Render reset password form */}
      {/* Include token in form submission */}
    </div>
  );
};

export default ResetPassword;
