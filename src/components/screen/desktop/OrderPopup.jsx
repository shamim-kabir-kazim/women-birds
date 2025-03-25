import React, { useState, useEffect } from 'react';
import './OrderPopup.css';
import axios from 'axios';
import { FaTimes } from 'react-icons/fa';

const OrderPopup = ({ product, mainImage, selectedSize, selectedColor, quantity, onConfirm, onClose }) => {
  const [userAddress, setUserAddress] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [error, setError] = useState(null);

  // Use actual current date
  const currentDate = new Date();
  const deliveryDate = new Date(currentDate);
  deliveryDate.setDate(currentDate.getDate() + 3);
  
  const formattedOrderDate = `${currentDate.getDate().toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getFullYear()}`;
  const formattedDeliveryDate = `${deliveryDate.getDate().toString().padStart(2, '0')}/${(deliveryDate.getMonth() + 1).toString().padStart(2, '0')}/${deliveryDate.getFullYear()}`;

  const deliveryCost = 70;
  const subtotal = (product.price * quantity).toFixed(2);
  const totalPrice = (parseFloat(subtotal) + deliveryCost).toFixed(2);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem('jwtToken');
      if (!token) {
        console.log('No token found');
        return;
      }

      try {
        const response = await fetch('/api/account-details', {
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
          setUserAddress(data.user.address);
          setUserPhoneNumber(data.user.phone_number);
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
        <FaTimes className="close-icon" onClick={onClose} />
        <h2>Confirm Your Order</h2>
        <div className="header-section">
          <div className="company-info">
            <h3>Women Birds</h3>
            <p>19 Dhanmondi, Dhaka, Bangladesh</p>
            <p>Contact: +880 1533082789</p>
          </div>
          <div className="order-info">
            <p><strong>Order Date:</strong> {formattedOrderDate}</p>
            <p><strong>Est. Delivery:</strong> {formattedDeliveryDate}</p>
          </div>
        </div>

        <div className="product-section">
          <img src={mainImage} alt="Product" className="modal-image" />
          <div className="product-details">
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Size</th>
                  <th>Color</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{product.product_name}</td>
                  <td>{selectedSize}</td>
                  <td>{selectedColor}</td>
                  <td>{quantity}</td>
                  <td>${product.price}</td>
                  <td>${subtotal}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="customer-section">
          <h4>Shipping Details</h4>
          <p><strong>Address:</strong> {userAddress || 'Not provided'}</p>
          <p><strong>Phone:</strong> {userPhoneNumber || 'Not provided'}</p>
        </div>

        <div className="total-section">
          <p><strong>Subtotal:</strong> ${subtotal}</p>
          <p><strong>Delivery Cost:</strong> 70tk</p>
          <p><em>Payment: Cash on Delivery (COD)</em></p>
          <hr />
          <p><strong>Total:</strong> ${totalPrice}</p>
        </div>

        <div className="modal-actions">
          <button className="confirm-order" onClick={() => onConfirm(userAddress, userPhoneNumber)}>
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPopup;