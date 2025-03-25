import React from 'react';
import './OrderPopup.css';

const OrderPopup = ({ product, mainImage, selectedSize, selectedColor, quantity, userAddress, userPhoneNumber, onConfirm, onClose }) => {
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
          <button className="confirm-order" onClick={onConfirm}>Confirm Order</button>
          <button className="close-modal" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default OrderPopup;
