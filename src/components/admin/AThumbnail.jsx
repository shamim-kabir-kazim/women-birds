import React, { useState } from 'react';
import './AThumbnail.css';

import ATNew from './ATNew';
import ATCategory from './ATCategory';
import ATNeww from './ATNeww';
import ATPremium from './ATPremium';
import {
  FaInfoCircle,
  FaEnvelope,

} from 'react-icons/fa';





const AThumbnail = () => {
  const [selectedId, setSelectedId] = useState(1); // Default selected menu item

  const menuItems = [
    { id: 1, icon: <FaInfoCircle />, label: 'New collection' }, // Info icon for About Us
    { id: 2, icon: <FaEnvelope />, label: 'Category' }, 
    { id: 3, icon: <FaEnvelope />, label: 'New This Week' }, 
    { id: 4, icon: <FaEnvelope />, label: 'Premium Collection' }, 
   
 
  ];

  const renderContent = () => {
    switch (selectedId) {
      /*about ussssssssssssssssssssssssssssssssss */
      case 1:
        return (
          <div className="AT-content">
            <ATNew/>
          </div>
        );
        case 2:
            return (
              <div className="AT-content">
                <ATCategory/>
              </div>
            );
            case 3:
            return (
              <div className="AT-content">
                <ATNeww/>
              </div>
            );
            case 4:
                return (
                  <div className="AT-content">
                    <ATPremium/>
                  </div>
                );
     
    }
  };

  return (
    
    <div className="AT-main-container">
      
      <div className="AT-menu">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`AT-menu-item ${item.id === selectedId ? 'selected' : ''}`}
            onClick={() => setSelectedId(item.id)}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      {renderContent()}
      </div>
    

  );
};

export default AThumbnail;
