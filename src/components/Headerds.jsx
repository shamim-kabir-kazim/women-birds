import React, { useState, useEffect } from 'react';
import './Header.css';
import CartMenu from './screen/desktop/CartMenu';
import { Link } from 'react-router-dom';
import Hed from './screen/desktop/Hed'; // Import the mobile header component

const Headerds = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

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
    <>
      {isMobile ? (
        <Hed /> // Render the mobile header component
      ) : (
        <div className="midllHeader">
          <header className="header">
            <div className="header__logo">
              <img src="https://i.postimg.cc/4ySzB7hg/image-2.png" alt="Logo" />
            </div>
            <div className="header__middle"></div>
            <div className="header__right">
              <div className="hedmenu">
                {!isSearchExpanded && (
                  <div className="header__menu">
                    <Link to="/">Home</Link>
                    <Link to="/products?category=sale">Sale</Link>
                    <Link to="/products?category=dress">Dress</Link>
                    <Link to="/products?category=jewellery">Jewellery</Link>
                    <Link to="/information/about">About Us</Link>
                  </div>
                )}
              </div>
              <div
                className={`search ${isSearchExpanded ? 'expanded' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsSearchExpanded(true);
                }}
              >
                {isSearchExpanded && (
                  <input
                    type="text"
                    placeholder="Search Lehenga, Dresses & Jewellery..."
                  />
                )}
                <img
                  className="prb"
                  src="https://i.postimg.cc/Dy0Ngs4S/search-svgrepo-com-4.png"
                  alt="Search Icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsSearchExpanded(true);
                  }}
                />
                {isSearchExpanded && (
                  <img
                    className="clos"
                    src="https://i.postimg.cc/m2GV8qcP/search-svgrepo-com-5.png"
                    alt="Close Icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsSearchExpanded(false);
                    }}
                  />
                )}
              </div>
              <div className="otherico">
              <Link to="/favorite">
                <div className="divicos">
                  <img
                    className="icos"
                    src="https://i.postimg.cc/tRPnwm0P/favorite-svgrepo-com-2.png"
                    alt="Icon 1"
                  />
                </div>
                </Link>
                <div>
                  <div className="divicos" onClick={openCart}>
                    <img
                      className="icos"
                      src="https://i.postimg.cc/448N5C25/cart-svgrepo-com.png"
                      alt="Cart Icon"
                    />
                  </div>
                  <CartMenu
                    isOpen={isCartOpen}
                    closeCart={closeCart}
                    cartItems={cartItems}
                  />
                </div>
                <Link to="/account">
                <div className="divicos">
                  <img
                    className="icos"
                    src="https://i.postimg.cc/L5VPyx7P/user-svgrepo-com-1.png"
                    alt="Icon 3"
                  />
                </div>
                </Link>
              </div>
            </div>
          </header>
        </div>
      )}
    </>
  );
};

export default Headerds;
