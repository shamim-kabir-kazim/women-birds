import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/user/login', { username, password });
      const { token } = response.data;
      
      // Store the token in local storage
      localStorage.setItem('jwtToken', token);
      console.log('Stored JWT:', token);

      // Check if token is the same after storage
      const storedToken = localStorage.getItem('jwtToken');
      console.log('Retrieved JWT:', storedToken);

      // Redirect to user dashboard or perform other actions
      window.location.href = '/user/dashboard';
    } catch (err) {
      console.error('Login Error:', err);
      setError('Invalid username or password');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div
          style={{
            alignSelf: 'stretch',
            textAlign: 'center',
            paddingBottom:'20px',
            color: '#431934',
            fontSize: '4vw', // Adjust font size based on viewport width
            fontFamily: 'Marcellus SC',
            fontWeight: '400',
            wordWrap: 'break-word',
          }}
        >
          User Login
        </div>
        <div>
          <div>
            <img className="flower-icon" src="https://i.postimg.cc/d3Z4dKfh/flower-5-svgrepo-com.png" alt="flower-icon"></img>
          </div>
          <div className="login-container">
            <div className="login-card">
              <div className="login-icon">
                <div>
                  <img className="user-icon" src="https://i.postimg.cc/52BKnb2v/user-heart-alt-1-svgrepo-com.png" alt="user-icon"></img>
                </div>
              </div>
              <form onSubmit={handleLogin}>
                <input
                  type="text"
                  className="input-field"
                  placeholder="User name"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="password"
                  className="input-field"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <a href="#" className="forgot-password">
                  Forget password
                </a>
                <button type="submit" className="login-button">
                  Login
                </button>
                <button type="button" className="create-account-button">
                  Create New Account
                </button>
                <div className="or-divider">or</div>
                <button type="button" className="google-login-button">
                  <img
                    src="https://img.icons8.com/color/16/000000/google-logo.png"
                    alt="Google Icon"
                  />
                  Continue with Google
                </button>
                {error && <p className="error-message">{error}</p>}
              </form>
            </div>
          </div>
          <div>
            <img className="flower-icon-2" src="https://i.postimg.cc/0N9W4Fz4/flower-bouquet-svgrepo-com.png" alt="flower-icon-2"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    margin: 0,
    padding: 0,
  },
  content: {
    textAlign: 'center',
    maxWidth: '100%',
    padding: '20px',
    border: '1px ',
    borderRadius: '8px',
  },
};

export default Login;