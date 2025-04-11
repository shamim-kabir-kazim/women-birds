import React, { useState } from 'react';
import axios from 'axios';
import './Otp.css';

const Otp = ({ email, onOtpVerified }) => {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/user/verify-otp', { email, otp });
      setMessage(response.data.message);
      setError('');
      onOtpVerified(); // Call the parent callback on successful OTP verification
    } catch (err) {
      console.error('Error verifying OTP:', err);
      setError('Invalid or expired OTP');
      setMessage('');
    }
  };

  return (
    <div className="otp-container">
      <h2 className="otp-title">Enter OTP</h2>
      <p className="otp-subtitle">
        An OTP has been sent to <strong>{email}</strong>
      </p>
      <form onSubmit={handleVerifyOtp} className="otp-form">
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className="modern-input"
            maxLength="6" // Assuming a 6-digit OTP
            aria-label="OTP input"
          />
        </div>
        <button type="submit" className="modern-button">
          Verify OTP
        </button>
      </form>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Otp;