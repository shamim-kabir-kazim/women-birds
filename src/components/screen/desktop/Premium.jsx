import React, { useState, useEffect } from 'react';
import './Premium.css';
import TextHed from './TextHed';

const Premium = () => {
  const [premiumItems, setPremiumItems] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/ads_img/1'); // Fetching cat4, cat5, cat6, cat7 from id 1

        if (!response.ok) {
          throw new Error('Failed to fetch premium images');
        }

        const data = await response.json();
        console.log('Fetched premium images:', data); // Add console log to debug

        setPremiumItems([
          { id: 4, image: data.cat4, label: 'Fishtail lehenga' },
          { id: 5, image: data.cat5, label: 'Alzohib Three Piece Collection' },
          { id: 6, image: data.cat6, label: 'Wedding Saree' },
          { id: 7, image: data.cat7, label: 'Fishtail lehenga' },
        ]);        
      } catch (error) {
        console.error('Error fetching premium images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="premium-container">
      <div className="premium-content">
        <TextHed text={"Premium Collection"} />
        <div className="gallery">
          {premiumItems.map((item) => (
            <div key={item.id} className="card">
              <div className="card-image-container">
                <img src={item.image} alt={item.label} className="card-image" />
                <div className="card-label">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Premium;