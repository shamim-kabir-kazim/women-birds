import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ColorFilter = ({ activeFilter, toggleFilter }) => (
  <div className="filter-item">
    <div className="filter-title" onClick={() => toggleFilter('color')}>
      COLOR
      <span className="icon">{activeFilter === 'color' ? <FaChevronUp /> : <FaChevronDown />}</span>
    </div>
    {activeFilter === 'color' && (
      <div className="filter-submenu">
        <ul>
          <li>Red</li>
          <li>Blue</li>
          <li>Green</li>
        </ul>
      </div>
    )}
  </div>
);

export default ColorFilter;