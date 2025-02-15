import React, { useState } from 'react';
import axios from 'axios';

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

      // Redirect to admin page or perform other actions
      window.location.href = '/admin/dashboard';
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default AdminLoginPage;