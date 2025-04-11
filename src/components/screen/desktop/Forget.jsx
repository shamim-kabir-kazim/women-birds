import React, { useState } from 'react';
import axios from 'axios';
import Otp from './Otp'; // Import the Otp component
import './Forget.css';

const Forget = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [otpSent, setOtpSent] = useState(false); // Track if OTP is sent

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/user/send-otp', { email });
      setMessage(response.data.message);
      setError('');
      setOtpSent(true); // Set OTP sent to true to display the OTP input box
    } catch (err) {
      console.error('Error sending OTP:', err);
      setError('Unable to send OTP. Please try again.');
      setMessage('');
    }
  };

  const handleOtpVerified = () => {
    // Callback for OTP verification success
    setMessage('OTP verified successfully!');
    setError('');
    onClose(); // Close the popup after successful OTP verification
  };

  return (
    <div className="forget-overlay">
      <div className="forget-popup">
        <button className="close-button" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="popup-title">Reset Your Password</h2>
        <p className="popup-subtitle">
          {otpSent ? 'Enter the OTP sent to your email' : 'Enter your email to receive an OTP'}
        </p>
        {!otpSent ? (
          // Show email input to send OTP
          <form onSubmit={handleSendOtp} className="forget-form">
            <div className="input-group">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="modern-input"
              />
            </div>
            <button type="submit" className="modern-button">
              Send OTP
            </button>
          </form>
        ) : (
          // Show OTP input box after OTP is sent
          <Otp email={email} onOtpVerified={handleOtpVerified} />
        )}
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Forget;