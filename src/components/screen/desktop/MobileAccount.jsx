import React, { useState } from 'react';
import './MobileAccount.css';

const MobileAccount = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showOrders, setShowOrders] = useState(false);

  // Sample orders, including a demo item
  const orders = [
    { 
      id: 12345, 
      status: 'Delivered', 
      item: 'Sample T-Shirt', 
      price: '$25.99',
      image: 'https://i.postimg.cc/fLLXN7VL/SBE-005.jpg', // Example image URL
      description: 'A comfortable and stylish cotton T-shirt for everyday wear.'
    },
    { 
      id: 67890, 
      status: 'In Transit', 
      item: 'Laptop', 
      price: '$999.99',
      image: 'https://i.postimg.cc/fLLXN7VL/SBE-005.jpg', // Example image URL
      description: 'High-performance laptop with 16GB RAM and 512GB SSD.'
    },
    { 
      id: 54321, 
      status: 'Pending', 
      item: 'Headphones', 
      price: '$59.99',
      image: 'https://i.postimg.cc/fLLXN7VL/SBE-005.jpg', // Example image URL
      description: 'Noise-cancelling over-ear headphones with premium sound quality.'
    }
  ];

  return (
    <div className="xo-maccount-container">
      {/* User Details Section */}
      <div className="xo-maccount-user-details">
        <div className="xo-maccount-profile-picture">
          <img src="https://i.postimg.cc/HszyvSdL/account-svgrepo-com-4.png" alt="Profile" />
        </div>
        <div className="xo-maccount-user-info">
          <h2>Badhon Shikder</h2>
          <p>Badhonusha@gmail.com</p>
        </div>
        
      </div>

      {/* User Options */}
      <div className="xo-maccount-options">
        <div className="xo-options-list">
          {/* My Details Header */}
          <div 
            className="xo-details-header" 
            onClick={() => setShowDetails(!showDetails)}
          >
            <div className="xo-option-header">
              <i className="fas fa-user-circle"></i>
              <span>My Details</span>
              <i className={`fas fa-chevron-${showDetails ? 'up' : 'down'}`}></i>
            </div>
          </div>

          {/* Form Section */}
          {showDetails && (
            <div className="xo-details-form">
              <form>
                <div className="xo-form-row">
                  <div className="xo-input-group">
                    <label>First Name</label>
                    <input type="text" defaultValue="Badhon" />
                  </div>
                  <div className="xo-input-group">
                    <label>Last Name</label>
                    <input type="text" defaultValue="Shikder" />
                  </div>
                </div>
                
                <div className="xo-input-group">
                  <label>Phone Number</label>
                  <input type="tel" defaultValue="+1234567890" />
                </div>
                
                <div className="xo-input-group">
                  <label>Email Address</label>
                  <input type="email" defaultValue="Badhonusha@gmail.com" readOnly />
                </div>
                
                <div className="xo-input-group">
                  <label>Password</label>
                  <div className="xo-password-field">
                    <input type="password" defaultValue="********" />
                    <button type="button" className="xo-show-password">Show</button>
                  </div>
                </div>
                
                <div className="xo-input-group">
                  <label>Home Address</label>
                  <textarea rows="3" defaultValue="123 Street Name, City, Country" />
                </div>
                
                <div className="xo-form-buttons">
                  <button 
                    type="button" 
                    className="xo-cancel-button" 
                    onClick={() => setShowDetails(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="xo-save-button">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* My Orders Section */}
          <div className="xo-option-item" onClick={() => setShowOrders(!showOrders)}>
            <i className="fas fa-box"></i>
            <span>My Orders</span>
            <i className={`fas fa-chevron-${showOrders ? 'up' : 'right'}`}></i>
          </div>
        {/* Updated Orders Section */}
      {showOrders && (
        <div className="xo-orders-list">
          {orders.length > 0 ? (
            orders.map((order) => (
              <div key={order.id} className="xo-order-item">
                <div className="xo-order-header">
                  <img src={order.image} alt={order.item} className="xo-order-image" />
                  <div className="xo-order-name-div">
                  <h3 className="xo-order-title">{order.item}</h3>
                  <p className="xo-order-short">{order.description}</p>
                  </div>
                </div>
                
                <div className="xo-order-details-grid">
                  <div className="xo-order-detail">
                    <span className="xo-detail-label">Order No:</span>
                    <span className="xo-detail-value">#{order.id}</span>
                  </div>
                  <div className="xo-order-detail">
                    <span className="xo-detail-label">Date:</span>
                    <span className="xo-detail-value">{order.date}</span>
                  </div>
                  <div className="xo-order-detail">
                    <span className="xo-detail-label">Status:</span>
                    <span className={`xo-status-indicator ${order.status.toLowerCase().replace(' ', '-')}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="xo-order-detail">
                    <span className="xo-detail-label">Price:</span>
                    <span className="xo-detail-value">{order.price}</span>
                  </div>
                  <div className="xo-order-detail">
                    <span className="xo-detail-label">Quantity:</span>
                    <span className="xo-detail-value">{order.quantity}</span>
                  </div>
                </div>

                <div className="xo-order-actions">
                  <button className="xo-view-order-btn">View Order</button>
                  <button className="xo-cancel-order-btn">Cancel Order</button>
                </div>
              </div>
            ))
          ) : (
            <p>No orders available.</p>
          )}
        </div>
      )}

          {/* Logout Option */}
          <div className="xo-option-item">
            <i className="fas fa-sign-out-alt"></i>
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAccount;
