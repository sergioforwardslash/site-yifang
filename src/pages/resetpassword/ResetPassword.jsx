import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(null);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      // Send request to server for password reset with token and new password
      const response = await fetch("http://localhost:3001/user/resetpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          newPassword,
        }),
      });

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
    } catch (error) {
      // Handle any other errors that may occur during the password reset process
      console.error("Failed to reset password", error);
    }
  };

  return (
    <div>
      <h1>Reset Password Page</h1>
      {/* Render reset password form */}
      {/* Include token in form submission */}
      <form onSubmit={handleResetPassword}>
        {/* Render password reset form fields */}
        {/* Include token as a hidden input */}
        <input type="hidden" name="token" value={token} />
        {/* Render submit button */}
      </form>
    </div>
  );
};

export default ResetPassword;
