import React, { useRef } from 'react';
import { FaShoppingCart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Carousel.css';  // Create a CSS file for styling

const Carousel = ({ items }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -200,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 200,
      behavior: 'smooth'
    });
  };

  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    sliderRef.current.touchStartX = touchStartX;
  };

  const handleTouchMove = (e) => {
    const touchEndX = e.touches[0].clientX;
    const touchStartX = sliderRef.current.touchStartX;
    const distance = touchEndX - touchStartX;
    if (Math.abs(distance) > 50) {
      sliderRef.current.scrollBy({
        left: distance > 0 ? -200 : 200,
        behavior: 'smooth'
      });
      sliderRef.current.touchStartX = touchEndX;
    }
  };

  return (
    <div className="carousel">
      <button className="left-arrow" onClick={scrollLeft}><FaChevronLeft /></button>
      <div
        className="slider-container"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {items.map((item) => (
          <div className="slider-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <div className="item-name">{item.name}</div>
              <div className="item-price">{item.price}</div>
            </div>
            <div className="item-info">
              <button className="add-to-cart">
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="right-arrow" onClick={scrollRight}><FaChevronRight /></button>
    </div>
  );
};

export default Carousel;