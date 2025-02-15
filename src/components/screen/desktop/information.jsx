import React, { useState } from 'react';
import './information.css';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';
import ReturnsRefundPolicy from './ReturnsRefundPolicy';
import PaymentOption from './PaymentOption';
import DeliveryOption from './DeliveryOption';
import FAQ from './FAQ';
import {
  FaInfoCircle,
  FaEnvelope,
  FaFileContract,
  FaShieldAlt,
  FaUndoAlt,
  FaCreditCard,
  FaTruck,
  FaQuestionCircle,
} from 'react-icons/fa';


const Information = () => {
  const [selectedId, setSelectedId] = useState(1); // Default selected menu item

  const menuItems = [
    { id: 1, icon: <FaInfoCircle />, label: 'About Us' }, // Info icon for About Us
    { id: 2, icon: <FaEnvelope />, label: 'Contact Us' }, // Envelope icon for Contact Us
    { id: 3, icon: <FaFileContract />, label: 'Terms & Conditions' }, // Contract icon for Terms & Conditions
    { id: 4, icon: <FaShieldAlt />, label: 'Privacy Policy' }, // Shield icon for Privacy Policy
    { id: 5, icon: <FaUndoAlt />, label: 'Return & Refund Policy' }, // Undo icon for Return & Refund Policy
    { id: 6, icon: <FaCreditCard />, label: 'Payment Option' }, // Credit card icon for Payment Option
    { id: 7, icon: <FaTruck />, label: 'Delivery Option' }, // Truck icon for Delivery Option
    { id: 8, icon: <FaQuestionCircle />, label: 'FAQ' }, // Question mark icon for FAQ
  ];

  const renderContent = () => {
    switch (selectedId) {
      /*about ussssssssssssssssssssssssssssssssss */
      case 1:
        return (
          <div className="content">
            <AboutUs />
          </div>
        );
      /*Contact ussssssssssssssssssssssss */
      case 2:
        return (
          <div className="content">
            <ContactUs />
          </div>
        );
      /*Termssssssssssssssssssssssssss */
      case 3:
        return (
          <div className="content">
            <TermsAndConditions />
          </div>
        );
      /*Privacy */
      case 4:
        return (
          <div className="content">
            <PrivacyPolicy />
          </div>
        );
      /*Returnnnnnnnnnnnnnnnnnnnnnnnnnnnn */
      case 5:
        return (
          <div className="content">
            <ReturnsRefundPolicy />
          </div>
        );
      /*payemntttttttttttttttttttttttttttttttttttttt */
      case 6:
        return (
          <div className="content">
            <PaymentOption />
          </div>
        );
      /*deliverrryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy */
      case 7:
        return (
          <div className="content">
            <DeliveryOption />
          </div>
        );
      /*faqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq */
      case 8:
        return (
          <div className="content">
            <FAQ />
          </div>
        );
    }
  };

  return (
    <div className="midll">
    <div className="main-container">
      
      <div className="menu">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`menu-item ${item.id === selectedId ? 'selected' : ''}`}
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

export default Information;
