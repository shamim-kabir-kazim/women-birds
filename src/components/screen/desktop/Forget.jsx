import React, { useState } from 'react';
import axios from 'axios';
import './Forget.css';

const Forget = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/user/send-otp', { email });
      setMessage(response.data.message);
      setError("");
    } catch (err) {
      console.error('Error sending OTP:', err);
      setError('Unable to send OTP. Please try again.');
      setMessage("");
    }
  };

  return (
    <div className="forget-overlay">
      <div className="forget-popup">
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        <h2>Forget Password</h2>
        <form onSubmit={handleSendOtp}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send OTP</button>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Forget;