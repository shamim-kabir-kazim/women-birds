import React from 'react';
import ItemLD from './ItemLD';
import './ItemList.css';

const ItemList = ({ items = [] }) => {
  if (!items || items.length === 0) {
    return <div>No items to display</div>;
  }

  return (
    <div className="ItemList">
      {items.map((item) => (
        <div key={item.id} className="GridItem">
          <ItemLD id={item.id} name={item.name} price={item.price} image={item.image} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;