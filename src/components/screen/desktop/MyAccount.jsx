import React, { useState, useEffect } from 'react';
import MyDetails from './MyDetails'; // Import the MyDetails component
import './MyAccount.css';

const MyAccount = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const fetchAccountDetails = async () => {
      const token = localStorage.getItem('jwtToken');
      if (!token) {
        console.log('No token found');
        return;
      }

      console.log('Token found:', token);

      try {
        const response = await fetch('http://localhost:3000/api/account-details', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        const data = await response.json();
        console.log('Response from server:', data);

        if (data.valid && data.user) {
          console.log('User data received:', data.user);
          setFormData({
            firstName: data.user.first_name,
            lastName: data.user.last_name,
            email: data.user.email,
            phone: data.user.phone_number,
            address: data.user.address,
          });
        } else {
          console.log('Failed to fetch user details');
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchAccountDetails();
  }, []);

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
    setIsUpdated(true); // Show MyDetails after updating
  };

  if (isUpdated) {
    return <MyDetails formData={formData} />; // Replace form with MyDetails
  }

  return (
    <div className="xvr-form-container">
      <div className="xvr-maccount-user-details">
        <div className="xvr-maccount-profile-picture">
          <img src="https://i.postimg.cc/NMgmfhgS/user-circle-svgrepo-com.png" alt="Profile" />
        </div>
        <div className="xvr-maccount-user-info">
          <h2>{formData.firstName} {formData.lastName}</h2>
          <p>{formData.email}</p>
        </div>
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
                disabled={!isEditing}
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
                disabled={!isEditing}
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
              disabled={!isEditing}
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
              disabled={!isEditing}
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
              disabled={!isEditing}
            />
          </div>

          {!isEditing ? (
            <button
              type="button"
              className="xvr-form-button"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          ) : (
            <button type="submit" className="xvr-form-button">
              Update
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default MyAccount;