import React from "react";
import "./Create.css";

const Create = () => {
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
        <div >
        <img className="f-icon" src="https://i.postimg.cc/d3Z4dKfh/flower-5-svgrepo-com.png"></img>
           </div>
    <div className="l-container">
      <div className="l-card">
        <div className="l-icon">
        <div >
        <img className="u-icon" src="https://i.postimg.cc/wj8bX7gg/user-plus-svgrepo-com.png"></img>
           </div>
        </div>
        <form>
        <div className="formaling" >
          <div className="formrow">
          <input
            type="text"
            className="i-field"
            placeholder="First name"
            name="firstname"
          />
          <input
            type="text"
            className="i-field"
            placeholder="Last name"
            name="lastname"
          />
          </div>
          <div  className="formrow">
          <input
            type="phone"
            className="i-field"
            placeholder="Phone Number"
            name="phone"
          />
           <input
            type="email"
            className="i-field"
            placeholder="Email"
            name="email"
          />
          </div>
          <div  className="formrow">
            
          <input
            type="password"
            className="i-field"
            placeholder="Password"
            name="password"
          />
           

          <input
            type="text"
            className="i-field"
            placeholder="Address"
            name="address"
          />
          </div>
          </div>

         

          
          <button type="submit" className="l-button">
            Create
          </button>
          <button type="button" className="c-account-button">
            Login
          </button>
          
        </form>
      </div>
    </div>
    <div >
        <img className="f-icon-2" src="https://i.postimg.cc/0N9W4Fz4/flower-bouquet-svgrepo-com.png"></img>
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