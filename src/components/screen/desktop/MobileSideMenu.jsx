import React, { useEffect, useRef } from 'react';
import './MobileSideMenu.css'; // Make sure to import the CSS

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTag, faShoppingBag, faGem, faUser, faHeart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const MobileSideMenu = ({ isOpen, onClose }) => {
  const menuRef = useRef(null);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose(); // Close the menu if clicked outside
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const menuItems = [
    { name: 'Home', icon: faHome, path: '/' },
    { name: 'Sale', icon: faTag, path: '/products?category=sale' },
    { name: 'Lehenga', icon: faShoppingBag, path: '/products?category=Lehenga' },
    { name: 'Dresses', icon: faShoppingBag, path: '/products?category=Dresses' },
    { name: 'Jewellery', icon: faGem, path: '/products?category=Jewellery' },
    { name: 'Favorite', icon: faHeart, path: '/favorite' },
    { name: 'Account', icon: faUser, path: '/account' },
    { name: 'Logout / Sign In', icon: faSignOutAlt, path: '/user' },
  ];

  return (
    <div className={`c-mobile-menu ${isOpen ? 'c-open' : ''}`} ref={menuRef}>
      <div className="c-div1">
        <div className="c-div11"></div>
        <div className="c-div12">
          <img src="https://i.postimg.cc/mDm969qN/image-2.png" alt="Logo" className="c-logo" />
        </div>
        <div className="c-div13">
          <div className="c-close-icon" onClick={onClose}>
            <img src="https://i.postimg.cc/fLMzSg8B/close-circle-svgrepo-com-1.png" alt="icon" className="c-icon" />
          </div>
        </div>
      </div>

      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className="c-menu-item" onClick={onClose}>
              <FontAwesomeIcon icon={item.icon} className="c-menu-icon" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileSideMenu;
