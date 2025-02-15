import React, { useState, useEffect } from 'react';
import './CarouselMobile.css';
import TextHed from './TextHed';

const Images = [
  'https://i.postimg.cc/7Z2Kvkpc/f31c69fa52c67fef74e0646531818323.jpg',
  'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
  'https://indiaspopup.com/cdn/shop/products/Deep-Red-Bridal-Lehenga-Choli-Set-1_grande.jpg?v=1665673526',
  'https://media.samyakk.com/pub/media/catalog/product/p/i/pink-stone-embroidered-exclusive-bridal-net-lehenga-with-leaf-neck-gc4746-b.jpg',
  'https://i.postimg.cc/SRYMXy7b/6226738299368750209-zoom.jpg',
];

const CarouselMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="imgscroll-midll">
      
          <TextHed text={"New Collection"} />
    <div className="imgscroll-carousel-container">
      <div className="back-img-div">
      

      <div className="back-img-div1">

        <img
          className="img1"
          src={Images[currentIndex % Images.length]}
          alt="Slide 1"
        />
        </div>
        <div className="back-img-div2">
        <img
          className="img2"
          src={Images[(currentIndex + 1) % Images.length]}
          alt="Slide 2"
        />
      
      </div>


      </div>
      <div className="top-img-div">
      <img
        className="img3"
        src={Images[(currentIndex + 2) % Images.length]}
        alt="Slide 3"
      />
      </div>
    </div>
    </div>
  );
};

export default CarouselMobile;
