import React, { useState } from 'react';
import axios from 'axios';
import ChangePassword from './ChangePassword'; // Import the change password component
import './Otp.css';

const Otp = ({ email, onOtpVerified }) => {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [otpVerified, setOtpVerified] = useState(false); // Track OTP verification status

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/user/verify-otp', { email, otp });
      setMessage(response.data.message);
      setError('');
      setOtpVerified(true); // Mark OTP as verified
      onOtpVerified(); // Call the parent callback
    } catch (err) {
      console.error('Error verifying OTP:', err);
      setError('Invalid or expired OTP');
      setMessage('');
    }
  };

  return (
    <div className="otp-container">
      {!otpVerified ? (
        <>
          <h2 className="otp-title">Enter OTP</h2>
          <p className="otp-subtitle">
            An OTP has been sent to <strong>{email}</strong>
          </p>
          <form onSubmit={handleVerifyOtp} className="otp-form">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="otp-input"
              maxLength="6"
            />
            <button type="submit" className="otp-button">Verify OTP</button>
          </form>
          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
        </>
      ) : (
        <ChangePassword email={email} /> // Show the change password form
      )}
    </div>
  );
};

export default Otp;