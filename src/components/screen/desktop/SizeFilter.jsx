import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const SizeFilter = ({ activeFilter, toggleFilter }) => (
  <div className="filter-item">
    <div className="filter-title" onClick={() => toggleFilter('size')}>
      SIZE
      <span className="icon">{activeFilter === 'size' ? <FaChevronUp /> : <FaChevronDown />}</span>
    </div>
    {activeFilter === 'size' && (
      <div className="filter-submenu">
        <ul>
          <li>Small</li>
          <li>Medium</li>
          <li>Large</li>
        </ul>
      </div>
    )}
  </div>
);

export default SizeFilter;