import React, { useState, useEffect } from 'react';
import './OrderPopup.css';
import axios from 'axios';

const OrderPopup = ({ product, mainImage, selectedSize, selectedColor, quantity, onConfirm, onClose }) => {
  const [userAddress, setUserAddress] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem('jwtToken');
      if (!token) {
        console.log('No token found');
        return;
      }

      console.log('Token found:', token);

      try {
        const response = await fetch('/api/account-details', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch user details: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Response from server:', data);

        if (data.valid && data.user) {
          console.log('User data received:', data.user);
          setUserAddress(data.user.address);
          setUserPhoneNumber(data.user.phone_number);
        } else {
          console.log('Failed to fetch user details');
        }
      } catch (error) {
        console.error('Error fetching user details:', error.message);
        setError(error.message);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Confirm Order</h2>
        <div className="modal-header">
          <img src={mainImage} alt="Product" className="modal-image" />
          <div className="product-info">
            <p><strong>Product Name:</strong> {product.product_name}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Size:</strong> {selectedSize}</p>
            <p><strong>Color:</strong> {selectedColor}</p>
            <p><strong>Quantity:</strong> {quantity}</p>
          </div>
        </div>
        <div className="modal-user-info">
          <p><strong>Address:</strong> {userAddress}</p>
          <p><strong>Phone Number:</strong> {userPhoneNumber}</p>
        </div>
        <div className="modal-actions">
          <button className="confirm-order" onClick={() => onConfirm(userAddress, userPhoneNumber)}>Confirm Order</button>
          <button className="close-modal" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default OrderPopup;