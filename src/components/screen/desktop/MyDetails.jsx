import React from 'react';
import './MyDetails.css';

const MyDetails = () => {
  return (
    <div className="DD-form-container">
        
      
      <form className="DD-details-form">
      <h1 className="DD-form-title">My Details</h1>
      <h2 className="DD-form-subtitle">Personal Information</h2>
        <div className="DD-form-row">
        
          <input type="text" placeholder="First name" className="DD-form-input" />
          <input type="text" placeholder="Last name" className="DD-form-input" />
        </div>
        <input type="email" placeholder="E-mail" className="DD-form-input" />
        <input type="tel" placeholder="Phone" className="DD-form-input" />
        <input type="text" placeholder="Address" className="DD-form-input" />
        <button type="submit" className="DD-form-button">save</button>
      </form>
    </div>
   
  );
};

export default MyDetails;