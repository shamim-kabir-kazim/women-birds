import React, { useState } from 'react';
import axios from 'axios';
import './Otp.css';

const Otp = ({ email }) => {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [otpVerified, setOtpVerified] = useState(false); // Track OTP verification status
  const [newPassword, setNewPassword] = useState(''); // For new password input
  const [confirmPassword, setConfirmPassword] = useState(''); // For confirm password input

  // Handle OTP verification
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/user/verify-otp', { email, otp });
      setMessage(response.data.message);
      setError('');
      setOtpVerified(true); // Mark OTP as verified
    } catch (err) {
      console.error('Error verifying OTP:', err);
      setError('Invalid or expired OTP');
      setMessage('');
    }
  };

  // Handle password change
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
    } catch (err) {
      console.error('Error changing password:', err);
      setError(err.response?.data?.message || 'Failed to change password. Please try again.');
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
        <>
          <h2 className="change-password-title">Change Password</h2>
          <form onSubmit={handleChangePassword} className="change-password-form">
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="password-input"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="password-input"
            />
            <button type="submit" className="password-button">Update Password</button>
          </form>
          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
        </>
      )}
    </div>
  );
};

export default Otp;