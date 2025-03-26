import React, { useState, useEffect } from 'react';
import './MyDetails.css';
import axios from 'axios';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCreditCard, FaSave } from 'react-icons/fa';

const MyDetails = ({ formData: initialFormData }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    shippingAddress: '',
    billingAddress: '',
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (initialFormData) {
      setFormData(initialFormData); // Use data passed from MyAccount
    } else {
      const fetchUserDetails = async () => {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
          console.log('No token found');
          return;
        }

        try {
          const response = await fetch('http://localhost:3000/api/account-details', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error(`Failed to fetch user details: ${response.statusText}`);
          }

          const data = await response.json();
          if (data.valid && data.user) {
            setFormData({
              firstName: data.user.first_name || '',
              lastName: data.user.last_name || '',
              email: data.user.email || '',
              phone: data.user.phone_number || '',
              shippingAddress: data.user.shipping_address || data.user.address || '',
              billingAddress: data.user.billing_address || '',
            });
          }
        } catch (error) {
          console.error('Error fetching user details:', error.message);
          setError(error.message);
        }
      };

      fetchUserDetails();
    }
  }, [initialFormData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      setError('Please log in to save details');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:3000/api/update-details',
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone_number: formData.phone,
          shipping_address: formData.shippingAddress,
          billing_address: formData.billingAddress,
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        alert('Details saved successfully');
      } else {
        throw new Error('Failed to save details');
      }
    } catch (error) {
      setError(error.message || 'Failed to save details');
    }
  };

  return (
    <div className="dd-account-container">
      <div className="dd-left-side">
        <form onSubmit={handleSubmit}>
        <div className="dd-form-rowo">
          <div className="dd-form-column">
            <h3 className="dd-section-title">
              <span className="dd-icon-text">
                <FaUser /> Personal Information
              </span>
            </h3>
            {error && <p className="dd-error">{error}</p>}
            <div className="dd-form-row">
              <div className="dd-first">
                <label className="dd-label-row">
                  <span className="dd-icon-text">First Name</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="dd-form-text"
                />
              </div>
              <div className="dd-last">
                <label className="dd-label-row">
                  <span className="dd-icon-text">Last Name</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="dd-form-text"
                />
              </div>
            </div>
            <div className="dd-form-row">
              <div className="dd-full-width">
                <label className="dd-label-row">
                  <span className="dd-icon-text">E-mail</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="dd-form-text"
                />
              </div>
              <div className="dd-full-width">
                <label className="dd-label-row">
                  <span className="dd-icon-text">Phone</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="dd-form-text"
                />
              </div>
            </div>
          </div>
          <div className="dd-form-column">
            <div className="dd-form-colo">
              <h3 className="dd-section-title">
                <span className="dd-icon-text">
                  <FaMapMarkerAlt /> Shipping Address
                </span>
              </h3>
              <div className="dd-form-row">
                <div className="dd-full-width">
                  <label className="dd-label-row">
                    <span className="dd-icon-text">Address</span>
                  </label>
                  <input
                    type="text"
                    name="shippingAddress"
                    value={formData.shippingAddress}
                    onChange={handleChange}
                    className="dd-form-text"
                  />
                </div>
              </div>
            </div>
            <div className="dd-form-colo">
              <h3 className="dd-section-title">
                <span className="dd-icon-text">
                  <FaCreditCard /> Billing Address
                </span>
              </h3>
              <div className="dd-form-row">
                <div className="dd-full-width">
                  <label className="dd-label-row">
                    <span className="dd-icon-text">Address</span>
                  </label>
                  <input
                    type="text"
                    name="billingAddress"
                    value={formData.billingAddress}
                    onChange={handleChange}
                    className="dd-form-text"
                  />
                </div>
              </div>
            </div>
            <div className="dd-button-container">
              <button type="submit" className="dd-cute-button save">
                <FaSave /> Save
              </button>
            </div>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyDetails;