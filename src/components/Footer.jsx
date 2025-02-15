import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the CSS file
import Sepa from './screen/desktop/Sepa';

const Footer = () => {
  return (
    <div className="midllFooter">
    <div className="footer-container">
      
      <div className="footer-logo">
        <div className="footer-logo-text"><Link to="/">Women Birds</Link></div>
        <div className="footer-subtext">Make yourself elegant</div>
      </div>
    
<div className="midcol">
      <div className="footer-column">
        <div className="footer-column-title">Categories</div>
        <div className="footer-column-item"><Link to="/products?category=sale">Sale</Link></div>
        <div className="footer-column-item"><Link to="/products?category=Dresses">Dresses</Link></div>
        <div className="footer-column-item"><Link to="/products?category=Jewellery">Jewellery</Link></div>
      </div>

      <div className="footer-column">
        <div className="footer-column-title">Shopping</div>
        <div className="footer-column-item"><Link to="/information/payment-option">Payment Option</Link></div>
        <div className="footer-column-item"><Link to="/information/delivery-option">Delivery Option</Link></div>
      </div>

      <div className="footer-column">
        <div className="footer-column-title">Customer care</div>
        <div className="footer-column-item"><Link to="/information/terms-and-conditions">Terms & Conditions</Link></div>
        <div className="footer-column-item"><Link to="/information/privacy-policy">Privacy Policy</Link></div>
        <div className="footer-column-item"><Link to="/information/returns-refund-policy">Return & Refund Policy</Link></div>
        <div className="footer-column-item">Survey & feedback</div>
      </div>

      <div className="footer-column">
        <div className="footer-column-title">Pages</div>
        <div className="footer-column-item"><Link to="/information/about">About Us</Link></div>
        <div className="footer-column-item"><Link to="/information/faq">FAQ</Link></div>
        <div className="footer-column-item"><Link to="/information/contact">Contact Us</Link></div>
      </div>
</div>

      <div className="footer-subscribe">
        <div className="footer-column-title">Subscribe Now</div>
        <div className="subscribe-button">
          <input
          className="inpu"
            type="email"
            placeholder="Your email"
          />
          <div className="submit-button">Submit</div>
        </div>
        <div className="social-media-icons">
          <div className="social-icon" >
          <img 
    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" 
    alt="Facebook" 
    style={{ width: '24px', height: '24px' }}
  />
          </div>
          <div className="social-icon" >
          <img 
    src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg" 
    alt="Messenger" 
    style={{ width: '24px', height: '24px' }}
  />
          </div>
          <div className="social-icon" >
          <img 
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
    alt="Whatsapp" 
    style={{ width: '24px', height: '24px' }}
  />
          </div>
          <div className="social-icon" >
          <img 
    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
    alt="Instagram" 
    style={{ width: '24px', height: '24px' }}
  />
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Footer;
