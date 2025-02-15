import React, { useState } from 'react';
import './MyAccount.css';

const MyAccount = () => {
  const [formData, setFormData] = useState({
    firstName: 'akkas',
    lastName: 'mia',
    email: 'akkasmia@gmail.com',
    phone: '0123456789',
    address: 'hajaribag',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="xvr-form-container">
      <h1 className="xvr-form-title">My Details</h1>
      <h2 className="xvr-form-subtitle">Personal Information</h2>
      <form className="xvr-details-form" onSubmit={handleSubmit}>
        <div className="xvr-form-row">
          <div className="xvr-first">
            <label>First Name</label><br />
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="xvr-form-input"
              disabled
            />
          </div>
          <div className="xvr-last">
            <label>Last Name</label><br />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="xvr-form-input"
              disabled
            />
          </div>
        </div>

        <div>
          <label>E-mail</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="xvr-form-input"
            disabled
          />
        </div>

        <div>
          <label>Phone</label><br />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="xvr-form-input"
            disabled
          />
        </div>

        <div>
          <label>Address</label><br />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="xvr-form-input"
            disabled
          />
        </div>

        <button type="submit" className="xvr-form-button">
          Update
        </button>
      </form>
    </div>
  );
};

export default MyAccount;
