import React, { useState } from 'react';
import axios from 'axios';
import './Forget.css';

const Forget = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [step, setStep] = useState(1); // Track the current step (1: Enter Email, 2: Enter OTP, 3: Change Password)

  // Handle sending OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/user/send-otp', { email });
      setMessage(response.data.message);
      setError('');
      setStep(2); // Move to the OTP verification step
    } catch (err) {
      console.error('Error sending OTP:', err);
      setError('Unable to send OTP. Please try again.');
      setMessage('');
    }
  };

  // Handle verifying OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/user/verify-otp', { email, otp });
      setMessage(response.data.message);
      setError('');
      setStep(3); // Move to the password reset step
    } catch (err) {
      console.error('Error verifying OTP:', err);
      setError('Invalid or expired OTP. Please try again.');
      setMessage('');
    }
  };

  // Handle changing the password
  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      setMessage('');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/user/change-password', {
        email,
        otp,
        newPassword,
      });
      setMessage(response.data.message);
      setError('');
      setStep(1); // Reset the flow after successful password change
      setEmail('');
      setOtp('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      console.error('Error changing password:', err);
      setError(err.response?.data?.message || 'Failed to change password. Please try again.');
      setMessage('');
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
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Forget;