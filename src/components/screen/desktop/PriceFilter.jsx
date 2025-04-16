import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import PriceRange from './PriceRange';

const PriceFilter = ({ activeFilter, toggleFilter, onFilterByPrice, resetTrigger }) => (
  <div className="filter-item">
    <div className="filter-title" onClick={() => toggleFilter('price')}>
      PRICE
      <span className="icon">{activeFilter === 'price' ? <FaChevronUp /> : <FaChevronDown />}</span>
    </div>
    {activeFilter === 'price' && (
      <div className="filter-submenu">
        <PriceRange onFilterByPrice={onFilterByPrice} resetTrigger={resetTrigger} />
      </div>
    )}
  </div>
);

export default PriceFilter;