import React from 'react';
import './Premium.css';
import TextHed from './TextHed';


const Premium = () => {
  const items = [
    {
      id: 1,
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
      label: 'Fishtail lehenga',
    },
    {
      id: 2,
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
      label: 'Alzohib Three Piece Collection',
    },
    {
      id: 3,
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
      label: 'Wedding Saree',
    },
    {
      id: 4,
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
      label: 'Fishtail lehenga',
    },
  ];

  return (
    <div className="premium-container">
      <div className="premium-content">
      
        <TextHed text={"Premium Collection"} />
        <div className="gallery">
          {items.map((item) => (
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
