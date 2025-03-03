import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = () => {
  const [bannerImages, setBannerImages] = useState({
    image1: '',
    image2: '',
  });

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/ads_img/1'); // Fetching cat8 and cat9 from id 1

        if (!response.ok) {
          throw new Error('Failed to fetch banner images');
        }

        const data = await response.json();

        setBannerImages({
          image1: data.cat8,
          image2: data.cat9,
        });
        
      } catch (error) {
        console.error('Error fetching banner images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="image-frame">
          <img
            className="image-frame-item"
            src={bannerImages.image1}
            alt="Banner Image 1"
          />
          <img
            className="image-frame-item"
            src={bannerImages.image2}
            alt="Banner Image 2"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;