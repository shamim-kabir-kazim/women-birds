import React, { useState } from 'react';
import axios from 'axios';
import './Forget.css';

const Forget = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [step, setStep] = useState(1); // Track the current step (1: Enter Email, 2: Enter OTP, 3: Change Password)

  // Handle sending OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/user/send-otp', { email });
      setStep(2); // Move to the OTP verification step regardless of success or failure
    } catch (err) {
      setStep(2); // Ensure the OTP input box is shown even if sending fails
    }
  };

  // Handle verifying OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/user/verify-otp', { email, otp });
      setStep(3); // Move to the password reset step
    } catch (err) {
      setMessage('Invalid or expired OTP.');
    }
  };

  // Handle changing the password
  const handleChangePassword = async (e) => {
    e.preventDefault();

    // Check if passwords match on the frontend
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      await axios.post('http://localhost:3000/api/user/change-password', {
        email,
        otp,
        newPassword,
      });
      onClose(); // Close the popup after a successful password change
    } catch (err) {
      setMessage('Failed to change password.');
    }
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
        {step === 1 && (
          <form onSubmit={handleSendOtp} className="forget-form">
            <p className="popup-subtitle">Enter your email to receive an OTP</p>
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
        )}
        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="forget-form">
            <p className="popup-subtitle">Enter the OTP sent to your email</p>
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="modern-input"
              />
            </div>
            <button type="submit" className="modern-button">
              Verify OTP
            </button>
          </form>
        )}
        {step === 3 && (
          <form onSubmit={handleChangePassword} className="forget-form">
            <p className="popup-subtitle">Enter your new password</p>
            <div className="input-group">
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="modern-input"
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="modern-input"
              />
            </div>
            <button type="submit" className="modern-button">
              Change Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Forget;