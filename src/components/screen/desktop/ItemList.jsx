import React from 'react';
import ItemLD from './ItemLD'; // Updated import for the renamed component
import './ItemList.css'; // This stays the same unless you renamed it

const ItemList = ({ items }) => {
  return (
    <div className="ItemList">
      {items.map((item) => (
        <div key={`${item.id}-${item.name}`} className="GridItem">
          <ItemLD name={item.name} price={item.price} image={item.image} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
