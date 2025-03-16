import React, { useState } from "react";
import axios from "axios";
import "./Create.css";

const Create = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/user/register', {
        username: email,
        email,
        phone,
        firstname,
        lastname,
        password,
        address
      });
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
      console.error('Registration Error:', err.response ? err.response.data : err.message);
      setError('Registration failed. Please try again.');
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
            <img className="f-icon" src="https://i.postimg.cc/d3Z4dKfh/flower-5-svgrepo-com.png" alt="flower-icon"></img>
          </div>
          <div className="l-container">
            <div className="l-card">
              <div className="l-icon">
                <div>
                  <img className="u-icon" src="https://i.postimg.cc/wj8bX7gg/user-plus-svgrepo-com.png" alt="user-icon"></img>
                </div>
              </div>
              <form onSubmit={handleCreateAccount}>
                <div className="formaling">
                  <div className="formrow">
                    <input
                      type="text"
                      className="i-field"
                      placeholder="First name"
                      name="firstname"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                    <input
                      type="text"
                      className="i-field"
                      placeholder="Last name"
                      name="lastname"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                  <div className="formrow">
                    <input
                      type="phone"
                      className="i-field"
                      placeholder="Phone Number"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <input
                      type="email"
                      className="i-field"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="formrow">
                    <input
                      type="password"
                      className="i-field"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                      type="text"
                      className="i-field"
                      placeholder="Address"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <button type="submit" className="l-button">
                  Create
                </button>
                <button type="button" className="c-account-button">
                  Login
                </button>
                {error && <p className="error-message">{error}</p>}
              </form>
            </div>
          </div>
          <div>
            <img className="f-icon-2" src="https://i.postimg.cc/0N9W4Fz4/flower-bouquet-svgrepo-com.png" alt="flower-icon-2"></img>
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