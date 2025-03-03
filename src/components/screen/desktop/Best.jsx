import React, { useState, useEffect } from 'react';
import TextHed from './TextHed';
import ItemLD from './ItemLD';
import './Best.css';

const Best = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/bestview'); // Fetching best deals items

        if (!response.ok) {
          throw new Error('Failed to fetch best deals items');
        }

        const data = await response.json();
        console.log('Fetched best deals items:', data); // Add logging to check data
        setItems(data.map(item => ({
          id: item.product_id,
          name: item.product_name,
          price: item.price,
          image: encodeURI(item.primary_img_url),
        })));
      } catch (error) {
        console.error('Error fetching best deals items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="fvrt-container">
      <TextHed text={"Best Deals"} />
      <div className="ItemList">
        {items.map((item) => (
          <div key={`${item.id}-${item.name}`} className="GridItem">
            <ItemLD name={item.name} price={item.price} image={item.image} />
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};

export default Best;