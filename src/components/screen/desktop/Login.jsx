import React from "react";
import "./Login.css";

const Login = () => {
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
        <div >
        <img className="flower-icon" src="https://i.postimg.cc/d3Z4dKfh/flower-5-svgrepo-com.png"></img>
           </div>
    <div className="login-container">
      <div className="login-card">
        <div className="login-icon">
        <div >
        <img className="user-icon" src="https://i.postimg.cc/52BKnb2v/user-heart-alt-1-svgrepo-com.png"></img>
           </div>
        </div>
        <form>
          <input
            type="text"
            className="input-field"
            placeholder="User name"
            name="username"
          />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            name="password"
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
        </form>
      </div>
    </div>
    <div >
        <img className="flower-icon-2" src="https://i.postimg.cc/0N9W4Fz4/flower-bouquet-svgrepo-com.png"></img>
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