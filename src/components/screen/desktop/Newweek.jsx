import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import './Newweek.css'; // Import the CSS file
import TextHed from './TextHed';

const Newweek = () => {
  const [newWeekItems, setNewWeekItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/newview'); // Fetching new week items

        if (!response.ok) {
          throw new Error('Failed to fetch new week items');
        }

        const data = await response.json();
        setNewWeekItems(data.map(item => ({
          name: item.product_name,
          price: item.price,
          image: `http://localhost:3000${item.primary_img_url}`,
        })));
      } catch (error) {
        console.error('Error fetching new week items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="newweek-container">
      <div className="newweek-content">
        <TextHed text={"New This Week"} />
        <div className="newweek-list">
          <Carousel items={newWeekItems} />
        </div>
      </div>
    </div>
  );
};

export default Newweek;