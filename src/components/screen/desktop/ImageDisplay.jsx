import React, { useState, useEffect } from 'react';
import ImageScroller from './ImageScroller';
import CarouselMobile from './CarouselMobile';

const ImageDisplay = ({ images }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 650);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 650);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <CarouselMobile images={images} />
      ) : (
        <ImageScroller images={images} />
      )}
    </div>
  );
};

export default ImageDisplay;
