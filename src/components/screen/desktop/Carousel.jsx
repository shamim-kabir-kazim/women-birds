import React, { useRef } from 'react';
import { FaShoppingCart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Carousel.css';  // Create a CSS file for styling

const Carousel = () => {
  const items = [
    { id: 1, imgSrc: 'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg', name: 'Item 1', price: '$10' },
    { id: 2, imgSrc: 'https://i.postimg.cc/7Z2Kvkpc/f31c69fa52c67fef74e0646531818323.jpg', name: 'Item 2', price: '$20' },
    { id: 3, imgSrc: 'https://i.postimg.cc/fLLXN7VL/SBE-005.jpg', name: 'Item 3', price: '$30' },
    { id: 4, imgSrc: 'https://i.postimg.cc/KzHTvKT5/fg-Og-Bejtgp4-MOpc-Slgvf-QMf7-Gr-CQJz-G0-C0ouseos.jpg', name: 'Item 4', price: '$40' },
    { id: 5, imgSrc: 'https://i.postimg.cc/SRYMXy7b/6226738299368750209-zoom.jpg', name: 'Item 5', price: '$50' },
    { id: 6, imgSrc: 'https://i.postimg.cc/3rkSjmtY/7-zoom.jpg', name: 'Item 6', price: '$60' }
  ];
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
            <img src={item.imgSrc} alt={item.name} />
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
