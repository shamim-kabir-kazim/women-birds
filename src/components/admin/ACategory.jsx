import React, { useState } from 'react';
import './ACategory.css';
import ACJewellery from './ACJwellery';
import ACDresses from './ACDresses';
import ACLehenga from './ACLehenga';
import ACSale from './ACSale';
import {
  FaInfoCircle,
  FaEnvelope,

} from 'react-icons/fa';




const ACategory = () => {
  const [selectedId, setSelectedId] = useState(1); // Default selected menu item

  const menuItems = [
    { id: 1, icon: <FaInfoCircle />, label: 'Jwellery' }, // Info icon for About Us
    { id: 2, icon: <FaEnvelope />, label: 'Dresses' }, 
    { id: 3, icon: <FaEnvelope />, label: 'Lehenga' }, 
    { id: 4, icon: <FaEnvelope />, label: 'Sale' }, 
   
 
  ];

  const renderContent = () => {
    switch (selectedId) {
      /*about ussssssssssssssssssssssssssssssssss */
      case 1:
        return (
          <div className="AC-content">
            <ACJewellery/>
          </div>
        );
      /*Contact ussssssssssssssssssssssss */
      case 2:
        return (
          <div className="AC-content">
            <ACDresses />

          </div>
        );
      /*Termssssssssssssssssssssssssss */
      case 3:
        return (
          <div className="AC-content">
            <ACLehenga />

          </div>
        );
        case 4:
          return (
            <div className="AC-content">
              <ACSale />

            </div>
          );
     
    }
  };

  return (
    
    <div className="AC-main-container">
      
      <div className="AC-menu">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`AC-menu-item ${item.id === selectedId ? 'selected' : ''}`}
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

export default ACategory;
