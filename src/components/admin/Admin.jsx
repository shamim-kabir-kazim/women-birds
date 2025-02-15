import React, { useState } from 'react';
import './Admin.css';
import ADashboard from './ADashboard';
import ACategory from './Acategory';
import AThumbnail from './AThumbnail';
import AOrders from './AOrders';
import AUserdata from './AUserdata';
import {
  FaInfoCircle,
  FaEnvelope,

} from 'react-icons/fa';





const Admin = () => {
  const [selectedId, setSelectedId] = useState(1); // Default selected menu item

  const menuItems = [
    { id: 1, icon: <FaInfoCircle />, label: 'Dashboard' }, // Info icon for About Us
    { id: 2, icon: <FaEnvelope />, label: 'Category' }, 
    { id: 3, icon: <FaEnvelope />, label: 'Thumbnail' }, 
    { id: 4, icon: <FaEnvelope />, label: 'Orders' }, 
    { id: 5, icon: <FaEnvelope />, label: 'User data' },
 
  ];

  const renderContent = () => {
    switch (selectedId) {
      /*about ussssssssssssssssssssssssssssssssss */
      case 1:
        return (
          <div className="A-content">
            <ADashboard/>
          </div>
        );
      /*Contact ussssssssssssssssssssssss */
      case 2:
        return (
          <div className="A-content">
            <ACategory />
          </div>
        );
      /*Termssssssssssssssssssssssssss */
      case 3:
        return (
          <div className="A-content">
            <AThumbnail />
          </div>
        );
        case 4:
        return (
          <div className="A-content">
            <AOrders />
          </div>
        );
        case 5:
        return (
          <div className="A-content">
            <AUserdata />
          </div>
        );
     
    }
  };

  return (
    <div className="midll">
    <div className="A-main-container">
      
      <div className="A-menu">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`A-menu-item ${item.id === selectedId ? 'selected' : ''}`}
            onClick={() => setSelectedId(item.id)}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      {renderContent()}
      </div>
    </div>

  );
};

export default Admin;
