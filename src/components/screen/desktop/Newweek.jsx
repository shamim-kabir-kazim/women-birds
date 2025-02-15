import React from 'react';
import Carousel from './Carousel';
import './Newweek.css'; // Import the CSS file
import TextHed from './TextHed';


const Newweek = () => {
  const items = [
    {
      name: 'Item 1',
      price: '$10',
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    },
    {
      name: 'Item 2',
      price: '$20',
      image:
        'https://fps.cdnpk.net/images/ai/image-generator/gallery/magnific-cat.webp',
    },
    {
      name: 'Item 3',
      price: '$30',
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    },
    {
      name: 'Item 3',
      price: '$30',
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    },
    {
      name: 'Item 3',
      price: '$30',
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    },
  
  ];

  return (
    <div className="newweek-container">
      <div className="newweek-content">
        <TextHed text={"New This Week"} />
        <div className="newweek-list">
          <Carousel items={items} />
        </div>
      </div>
    </div>
  );
};

export default Newweek;
