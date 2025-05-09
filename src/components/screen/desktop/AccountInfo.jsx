import React, { useState } from 'react';
import './AccountInfo.css';
import MyAccount from './MyAccount';
import MyOrders from './MyOrders';
import MyDetails from './MyDetails';

import { FaUser } from 'react-icons/fa';
import { FaListCheck } from 'react-icons/fa6';
import { RiLogoutBoxLine } from "react-icons/ri";

const AccountInfo = () => {
  const [selectedId, setSelectedId] = useState(1); // Default selected menu item

  const menuItems = [
    { id: 1, icon: <FaUser/>, label: 'My Account' },
    { id: 2, icon: <FaListCheck />, label: 'My Orders' },
    { id: 3, icon: <RiLogoutBoxLine />, label: 'Log out' },
  ];

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('jwtToken');
      if (!token) {
        console.log('No token found');
        return;
      }

      const response = await fetch('http://localhost:3000/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        console.log('Logged out successfully');
        localStorage.removeItem('jwtToken');
        // Redirect to login page or home page
        window.location.href = '/user';
      } else {
        console.log('Failed to log out');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const renderContent = () => {
    switch (selectedId) {
      case 1:
        return (
          <div className="cvb-content">
            <MyAccount/>
          </div>
        );
      case 2:
        return (
          <div className="cvb-content">
           <MyOrders/>
          </div>
        );
      case 3:
        handleLogout();
        return (
          <div className="cvb-content">
           
          </div>
        );
    }
  };

  return (
    <div className="cvb-midll">
      <div className="cvb-main-container">
        <div className="cvb-menu">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`cvb-menu-item ${item.id === selectedId ? 'selected' : ''}`}
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

export default AccountInfo;