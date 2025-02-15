import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="image-frame">
          <img
            className="image-frame-item"
            src="https://i.ytimg.com/vi/-lAvAD-rlZE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD-fhkweyLUM0eWXDVAMgsXnYpFog"
            alt="Eastern Bluebirds"
          />
          <img
            className="image-frame-item"
            src="https://sudathi.com/cdn/shop/files/1_2f03ee13-a933-4475-8076-95d5630db6e5.jpg?v=1737109441&width=2000"
            alt="Eastern Bluebirds"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
