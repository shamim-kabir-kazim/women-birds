import React, { useEffect, useRef } from 'react';
import './CartMenu.css';

const CartMenu = ({ isOpen, closeCart, cartItems }) => {
  const cartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        closeCart();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        closeCart();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [closeCart]);

  const calculateSubtotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div
      className={`cart-menu ${isOpen ? 'open' : ''}`}
      ref={cartRef}
      aria-hidden={!isOpen}
    >
      <div className="cart-menu-hed">
        <div className="cart-menu-header">
          <div className="inside-head"></div>
          <div className="inside-head">
            <img
              className="logo-icon"
              src="https://i.postimg.cc/mDm969qN/image-2.png"
              alt="Women Birds Logo"
            />
          </div>
          <div className="inside-head">
            <img
              className="close-icon"
              src="https://i.postimg.cc/fLMzSg8B/close-circle-svgrepo-com-1.png"
              alt="Close Cart"
              onClick={(e) => {
                e.stopPropagation();
                closeCart();
              }}
            />
          </div>
        </div>
        <div className="cart-txt-c">
          <p className="cart-txt-txt">Cart</p>
        </div>
      </div>
      <div className="separator"></div>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <p>{item.name}</p>
                <p>Size: {item.size}</p>
                <p>Quantity: {item.quantity}</p>
                <p className="prc">{item.price} TK</p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="separator-bottom"></div>
      <div className="container-cart">
        <div className="box-cart-1">
          <div className="subtotal">SUBTOTAL:</div>
        </div>
        <div className="box-cart-2"></div>
        <div className="box-cart-3">
          <div>{calculateSubtotal()} TK</div>
        </div>
      </div>
      <div className="place-order" onClick={() => alert('Order placed!')}>
        PLACE ORDER
      </div>
    </div>
  );
};

export default CartMenu;
