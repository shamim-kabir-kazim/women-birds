import React, { useState } from 'react';
import axios from 'axios';
import './AdminLoginPage.css';

function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/admin/login', { username, password });
      const { token } = response.data;
      
      // Store the token in local storage
      localStorage.setItem('jwtToken', token);
      console.log('Stored JWT:', token);

      // Check if token is the same after storage
      const storedToken = localStorage.getItem('jwtToken');
      console.log('Retrieved JWT:', storedToken);

      // Redirect to admin page or perform other actions
      window.location.href = '/admin/dashboard';
    } catch (err) {
      console.error('Login Error:', err);
      setError('Invalid username or password');
    }
  };

  return (
    <div className="xo-admin-login">
      <h2 className="xo-title">Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div className="xo-form-group">
          <label className="xo-label">Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            className="xo-input"
          />
        </div>
        <div className="xo-form-group">
          <label className="xo-label">Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="xo-input"
          />
        </div>
        <button type="submit" className="xo-button">Login</button>
        {error && <p className="xo-message">{error}</p>}
      </form>
    </div>
  );
}

export default AdminLoginPage;
