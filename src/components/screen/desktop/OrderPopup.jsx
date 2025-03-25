import React from 'react';
import './OrderPopup.css';

const OrderPopup = ({ product, mainImage, selectedSize, selectedColor, quantity, userAddress, onConfirm, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Confirm Order</h2>
        <img src={mainImage} alt="Product" className="modal-image" />
        <p><strong>Product Name:</strong> {product.product_name}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Size:</strong> {selectedSize}</p>
        <p><strong>Color:</strong> {selectedColor}</p>
        <p><strong>Quantity:</strong> {quantity}</p>
        <p><strong>Address:</strong> {userAddress}</p>
        <button className="confirm-order" onClick={onConfirm}>Confirm Order</button>
        <button className="close-modal" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default OrderPopup;