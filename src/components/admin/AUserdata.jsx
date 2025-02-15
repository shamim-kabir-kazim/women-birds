import React, { useState } from 'react';
import './AUserdata.css';

import AUserDetails from './AUserDetails';
import AUserLogin from './AUserLogin';

import {
  FaInfoCircle,
  FaEnvelope,

} from 'react-icons/fa';






const AUserdata= () => {
  const [selectedId, setSelectedId] = useState(1); // Default selected menu item

  const menuItems = [
    { id: 1, icon: <FaInfoCircle />, label: 'User Details' }, // Info icon for About Us
    { id: 2, icon: <FaEnvelope />, label: 'User Login Details' }, 

   
 
  ];

  const renderContent = () => {
    switch (selectedId) {
      /*about ussssssssssssssssssssssssssssssssss */
      case 1:
        return (
          <div className="AU-content">
            <AUserDetails/>
          </div>
        );
        case 2:
            return (
              <div className="AU-content">
                <AUserLogin/>
              </div>
            );
            
     
    }
  };

  return (
    
    <div className="AU-main-container">
      
      <div className="AU-menu">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`AU-menu-item ${item.id === selectedId ? 'selected' : ''}`}
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

export default AUserdata;