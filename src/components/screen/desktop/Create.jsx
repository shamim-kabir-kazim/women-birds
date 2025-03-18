import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Create.css";

const Create = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 4000); // 4 seconds

      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/user/register', {
        username: email,
        email,
        phone: `+880${phone}`,
        firstname,
        lastname,
        password,
        address
      });
      const { token } = response.data;

      // Store the token in local storage
      localStorage.setItem('jwtToken', token);
      console.log('Stored JWT:', token);

      // Show success message and redirect after a short delay
      setMessage('Account created successfully! Redirecting to dashboard...');
      setMessageType('success');
      setTimeout(() => {
        window.location.href = '/user/dashboard';
      }, 2000);
    } catch (err) {
      console.error('Registration Error:', err.response ? err.response.data.message : err.message);
      setMessage(err.response ? err.response.data.message : 'Registration failed. Please try again.');
      setMessageType('error');
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
          Create New Account
        </div>
        <div>
          <div>
            <img className="vccx-f-icon" src="https://i.postimg.cc/d3Z4dKfh/flower-5-svgrepo-com.png" alt="flower-icon"></img>
          </div>
          <div className="vccx-l-container">
            <div className="vccx-l-card">
              <div className="vccx-l-icon">
                <div>
                  <img className="vccx-u-icon" src="https://i.postimg.cc/wj8bX7gg/user-plus-svgrepo-com.png" alt="user-icon"></img>
                </div>
              </div>
              <form onSubmit={handleCreateAccount}>
                <div className="vccx-formaling">
                  <div className="vccx-formrow">
                    <input
                      type="text"
                      className="vccx-i-field"
                      placeholder="First name"
                      name="firstname"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                    <input
                      type="text"
                      className="vccx-i-field"
                      placeholder="Last name"
                      name="lastname"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                  <div className="vccx-formrow">
                    <input
                      type="tel"
                      className="vccx-i-field"
                      placeholder="Phone Number"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <input
                      type="email"
                      className="vccx-i-field"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="vccx-formrow">
                    <input
                      type="password"
                      className="vccx-i-field"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                      type="text"
                      className="vccx-i-field"
                      placeholder="Address"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <button type="submit" className="vccx-l-button">
                  Create
                </button>
                <button type="button" className="vccx-c-account-button">
                  Login
                </button>
              </form>
              {message && (
                <div
                  className={`vccx-notification ${messageType}`}
                  style={{
                    color: messageType === 'success' ? 'green' : 'red',
                    border: `1px solid ${messageType === 'success' ? 'green' : 'red'}`,
                    padding: '10px',
                    marginTop: '10px',
                    borderRadius: '5px',
                    textAlign: 'center',
                  }}
                >
                  {message}
                </div>
              )}
            </div>
          </div>
          <div>
            <img className="vccx-f-icon-2" src="https://i.postimg.cc/0N9W4Fz4/flower-bouquet-svgrepo-com.png" alt="flower-icon-2"></img>
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

export default Create;
