import React, { useState } from 'react';
import axios from 'axios';
import './Otp.css';

const Otp = ({ email, onOtpVerified }) => {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/user/verify-otp', { email, otp });
      setMessage(response.data.message);
      setError("");
      onOtpVerified(); // Call the parent callback on successful OTP verification
    } catch (err) {
      console.error('Error verifying OTP:', err);
      setError('Invalid or expired OTP');
      setMessage("");
    }
  };

  return (
    <div className="otp-container">
      <h2>Enter OTP</h2>
      <p>An OTP has been sent to your email: {email}</p>
      <form onSubmit={handleVerifyOtp}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button type="submit">Verify OTP</button>
      </form>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Otp;