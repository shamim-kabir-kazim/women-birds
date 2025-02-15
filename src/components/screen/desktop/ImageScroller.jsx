import React, { useState } from 'react';
import './ImageScroller.css';
import TextHed from './TextHed';

const ImageScroller = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImageIndex = (currentIndex - 1 + images.length) % images.length;
  const nextImageIndex = (currentIndex + 1) % images.length;

  return (
    <div className="unique-midll">
      <div className="unique-imagesc">
        
        <TextHed text={"New Collection"} />

        <div className="unique-scroller-container">
          <div>
            <button className="unique-scroll-button left" onClick={handlePrev}>
              &#8249;
            </button>
          </div>
          <div className="unique-images-wrapper">
            <div className="unique-small-image1">
              <img src={images[prevImageIndex]} alt="Small Left" />
            </div>
            <div className="unique-large-image">
              <img src={images[currentIndex]} alt="Large Center" />
            </div>
            <div className="unique-small-image2">
              <img src={images[nextImageIndex]} alt="Small Right" />
            </div>
          </div>
          <div>
            <button className="unique-scroll-button right" onClick={handleNext}>
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageScroller;
