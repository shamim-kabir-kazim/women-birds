import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CartMenu.css';

const CartMenu = ({ isOpen, closeCart }) => {
  const cartRef = useRef(null);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('/api/view-cart', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
          }
        });
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    if (isOpen) {
      fetchCartItems();
    }
  }, [isOpen]);

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

  const handleDelete = async (product_id, color, size) => {
    try {
      await axios.delete('/api/delete-cart-item', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
        },
        data: { product_id, color, size }
      });
      setCartItems(cartItems.filter(item => !(item.product_id === product_id && item.color === color && item.size === size)));
    } catch (error) {
      console.error('Error deleting cart item:', error);
    }
  };

  const handleImageClick = (product_id) => {
    navigate(`/Details?id=${product_id}`);
    closeCart();
  };

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
          <p className="empty-cart-text">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.cartid}>
              <img src={item.primary_img_url} alt={item.product_name} onClick={() => handleImageClick(item.product_id)} />
              <div className="cart-item-details">
                <p>{item.product_name}</p>
                <p>Size: {item.size}</p>
                <p>Color: {item.color}</p>
                <p>Quantity: {item.quantity}</p>
                <p className="prc">{item.price} TK</p>
                <button className="delete-button" onClick={() => handleDelete(item.product_id, item.color, item.size)}>Delete</button>
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
