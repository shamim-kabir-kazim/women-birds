import React from 'react';
import { NavLink, useLocation, Routes, Route } from 'react-router-dom';
import './information.css';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';
import ReturnsRefundPolicy from './ReturnsRefundPolicy';
import PaymentOption from './PaymentOption';
import DeliveryOption from './DeliveryOption';
import Comments from './Comments';
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
import { TfiComments } from "react-icons/tfi";

const menuItems = [
  { id: 1, path: '/information/about', icon: <FaInfoCircle />, label: 'About Us' },
  { id: 2, path: '/information/contact', icon: <FaEnvelope />, label: 'Contact Us' },
  { id: 3, path: '/information/terms', icon: <FaFileContract />, label: 'Terms & Conditions' },
  { id: 4, path: '/information/privacy', icon: <FaShieldAlt />, label: 'Privacy Policy' },
  { id: 5, path: '/information/returns', icon: <FaUndoAlt />, label: 'Return & Refund Policy' },
  { id: 6, path: '/information/payment', icon: <FaCreditCard />, label: 'Payment Option' },
  { id: 7, path: '/information/delivery', icon: <FaTruck />, label: 'Delivery Option' },
  { id: 8, path: '/information/comments', icon: <TfiComments /> , label: 'Survey & Feedback' },
  { id: 9, path: '/information/faq', icon: <FaQuestionCircle />, label: 'FAQ' },
];

const Information = () => {
  const location = useLocation();
  return (
    <div className="cu-midll">
      <div className="cu-main-container">
        {/* Sidebar Menu */}
        <div className="cu-menu">
          {menuItems.map((item) => (
            <NavLink 
              key={item.id}
              to={item.path}
              className={({ isActive }) => `cu-menu-item ${isActive ? 'cu-selected' : ''}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>

        {/* Main Content */}
        <div className="cu-content">
          <Routes>
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="terms" element={<TermsAndConditions />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="returns" element={<ReturnsRefundPolicy />} />
            <Route path="payment" element={<PaymentOption />} />
            <Route path="delivery" element={<DeliveryOption />} />
            <Route path="comments" element={<Comments />} />
            <Route path="faq" element={<FAQ />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Information;
