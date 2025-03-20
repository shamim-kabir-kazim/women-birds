import React from 'react';
import ItemLD from './ItemLD';
import './ItemList.css';

const ItemList = ({ items = [], onItemClick }) => {
  if (!items || items.length === 0) {
    return <div>No items to display</div>;
  }

  return (
    <div className="ItemList">
      {items.map((item) => (
        <div key={item.product_id} className="GridItem" onClick={() => onItemClick(item.product_id)}>
          <ItemLD id={item.product_id} name={item.product_name} price={item.price} image={item.image} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;