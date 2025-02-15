import React, { useState } from 'react';
import './Hed.css'; // Make sure this file exists and is properly configured
import CartMenu from './CartMenu';
import MobileSideMenu from './MobileSideMenu';
import { Link } from 'react-router-dom';

const Hed = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const cartItems = [
    {
      id: 1,
      name: 'This is a demo Product',
      price: 100,
      size: 'M',
      quantity: 2,
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    },
    {
      id: 2,
      name: 'This is a demo Product',
      price: 200,
      size: 'L',
      quantity: 1,
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    },
  ];

  return (
    <div className="container">
      {/* First Div with three nested Divs */}
      <div className="three-divs">
        <div className="hed-div1" onClick={openMenu}>
          <img
            src="https://i.postimg.cc/L6YTf3rr/burger-simple-svgrepo-com.png"
            alt="Close Icon 1"
            className="small-image"
          />
        </div>
        <div className="inner-div div2">
          <img
            src="https://i.postimg.cc/mDm969qN/image-2.png"
            alt="Placeholder 2"
            className="image"
          />
        </div>
        <div className="hed-div3" onClick={openCart}>
          <img
            src="https://i.postimg.cc/R0qSF54C/cart-large-minimalistic-svgrepo-com-1.png"
            alt="Close Icon 2"
            className="small-image"
          />
          <CartMenu
            isOpen={isCartOpen}
            closeCart={closeCart}
            cartItems={cartItems}
          />
        </div>
      </div>

      {/* Second Div with a Search Bar */}
      <div className="search-container">
        <div className="search-bar">
          <img
            src="https://i.postimg.cc/m2GV8qcP/search-svgrepo-com-5.png"
            alt="Search Icon"
            className="search-icon"
          />
          <input
            type="text"
            placeholder="Search Lehenga, Dresses & Jewellery"
            className="search-input"
          />
        </div>
      </div>
      <MobileSideMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </div>
  );
};

export default Hed;
