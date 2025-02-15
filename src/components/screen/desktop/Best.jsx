import React from 'react';
import ItemList from './ItemList';
import TextHed from './TextHed';
import './Best.css';


const Best = ({ children }) => {
  return (
    <div className="fvrt-container">
      {/* Add your content inside this div */}
      <TextHed text={"Best Deals"} />
      <ItemList />
      {children}
    </div>
  );
};

export default Best;
