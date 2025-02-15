import React from 'react';
import ItemList from './ItemList';
import './Favrt.css';


const Fvrt = ({ children }) => {
  return (
    <div className="fvrt-container">
      {/* Add your content inside this div */}
      <ItemList />
      {children}
    </div>
  );
};

export default Fvrt;
