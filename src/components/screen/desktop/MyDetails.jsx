import React from 'react';
import './MyDetails.css';

const MyDetails = () => {
  return (
    <div className="form-container">
        
      <h1 className="form-title">My Details</h1>
      <h2 className="form-subtitle">Personal Information</h2>
      <form className="details-form">
        <div className="form-row">
          <input type="text" placeholder="First name" className="form-input" />
          <input type="text" placeholder="Last name" className="form-input" />
        </div>
        <input type="email" placeholder="E-mail" className="form-input" />
        <input type="tel" placeholder="Phone" className="form-input" />
        <input type="text" placeholder="Address" className="form-input" />
        <button type="submit" className="form-button">save</button>
      </form>
    </div>
   
  );
};

export default MyDetails;