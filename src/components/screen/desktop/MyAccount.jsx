import React, { useState, useEffect } from 'react';
import MyDetails from './MyDetails';
import './MyAccount.css';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCreditCard, FaEdit, FaSave } from 'react-icons/fa';

const MyAccount = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    shippingAddress: '',
    billingAddress: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const fetchAccountDetails = async () => {
      const token = localStorage.getItem('jwtToken');
      if (!token) return;

      try {
        const response = await fetch('http://localhost:3000/api/account-details', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (data.valid && data.user) {
          setFormData({
            firstName: data.user.first_name,
            lastName: data.user.last_name,
            email: data.user.email,
            phone: data.user.phone_number,
            shippingAddress: data.user.shipping_address || data.user.address,
            billingAddress: data.user.billing_address || '',
          });
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };
    fetchAccountDetails();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setIsUpdated(true);
    setIsEditing(false);
  };

  const handleBack = () => {
    setIsUpdated(false);
    setIsEditing(false);
  };

  if (isUpdated) return <MyDetails formData={formData} onBack={handleBack} />;

  return (
    <div className="xvr-account-container">
      <div className="xvr-left-side">
        <form onSubmit={handleSubmit}>
          <div className="xvr-form-column">
            <h3 className="xvr-section-title">
              <span className="xvr-icon-text">
                <FaUser /> Personal Information
              </span>
            </h3>
            <div className="xvr-form-row">
              <div className="xvr-first">
                <label className="xvr-label-row">
                  <span className="xvr-icon-text">
                    First Name
                  </span>
                </label>
                {isEditing ? (
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="xvr-form-text" />
                ) : (
                  <span className="xvr-form-text">{formData.firstName}</span>
                )}
              </div>
              <div className="xvr-last">
                <label className="xvr-label-row">
                  <span className="xvr-icon-text">
                    Last Name
                  </span>
                </label>
                {isEditing ? (
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="xvr-form-text" />
                ) : (
                  <span className="xvr-form-text">{formData.lastName}</span>
                )}
              </div>
            </div>
          
            <div className="xvr-form-row">
              <div className="xvr-full-width">
                <label className="xvr-label-row">
                  <span className="xvr-icon-text">
                    E-mail
                  </span>
                </label>
                {isEditing ? (
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="xvr-form-text" />
                ) : (
                  <span className="xvr-form-text">{formData.email}</span>
                )}
              </div>
              <div className="xvr-full-width">
                <label className="xvr-label-row">
                  <span className="xvr-icon-text">
                    Phone
                  </span>
                </label>
                {isEditing ? (
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="xvr-form-text" />
                ) : (
                  <span className="xvr-form-text">{formData.phone}</span>
                )}
              </div>
            </div>
          </div>
          <div className="xvr-form-column">
            <div className="xvr-form-colo">
              <h3 className="xvr-section-title">
                <span className="xvr-icon-text">
                  <FaMapMarkerAlt /> Shipping Address
                </span>
              </h3>
              <div className="xvr-form-row">
                <div className="xvr-full-width">
                  <label className="xvr-label-row">
                    <span className="xvr-icon-text">
                      Address
                    </span>
                  </label>
                  {isEditing ? (
                    <input type="text" name="shippingAddress" value={formData.shippingAddress} onChange={handleChange} className="xvr-form-text" />
                  ) : (
                    <span className="xvr-form-text">{formData.shippingAddress}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="xvr-form-colo">
              <h3 className="xvr-section-title">
                <span className="xvr-icon-text">
                  <FaCreditCard /> Billing Address
                </span>
              </h3>
              <div className="xvr-form-row">
                <div className="xvr-full-width">
                  <label className="xvr-label-row">
                    <span className="xvr-icon-text">
                      Address
                    </span>
                  </label>
                  {isEditing ? (
                    <input type="text" name="billingAddress" value={formData.billingAddress} onChange={handleChange} className="xvr-form-text" />
                  ) : (
                    <span className="xvr-form-text">{formData.billingAddress || 'Same as Shipping'}</span>
                  )}
                </div>
              </div>
            </div>
            
            <div className="xvr-button-container">
              {!isEditing ? (
                <button type="button" onClick={() => setIsEditing(true)} className="xvr-cute-button edit">
                  <FaEdit /> Edit
                </button>
              ) : (
                <button type="submit" className="xvr-cute-button save">
                  <FaSave /> Save
                </button>
              )}
            </div>

          </div>
        </form>
      </div>

      <div className="xvr-right-side">
        <div className="xvr-maccount-profile-picture">
          <img src="https://i.postimg.cc/NMgmfhgS/user-circle-svgrepo-com.png" alt="Profile" />
        </div>
        <div className="xvr-maccount-user-info">
          <h2>{formData.firstName} {formData.lastName}</h2>
          <p>
            <span className="xvr-icon-text">
              <FaEnvelope /> {formData.email}
            </span>
          </p>
          <p>
            <span className="xvr-icon-text">
              <FaPhone /> {formData.phone}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;