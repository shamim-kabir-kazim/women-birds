import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminRegPage.css';

const AdminRegPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admin/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const data = await response.json();
        setMessage('Admin registered successfully!');
        localStorage.setItem('jwtToken', data.token);
        navigate('/admin/dashboard');
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.error}`); // Updated to match the error structure from the backend
      }
    } catch (error) {
      setMessage('Error: Unable to register admin');
    }
  };

  return (
    <div className="bho-admin-register">
      <h2>Admin Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="bho-form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="bho-form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="bho-submit-btn">Register</button>
      </form>
      {message && <p className="bho-message">{message}</p>}
    </div>
  );
};

export default AdminRegPage;