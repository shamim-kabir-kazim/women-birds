import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FabricFilter = ({ activeFilter, toggleFilter }) => (
  <div className="filter-item">
    <div className="filter-title" onClick={() => toggleFilter('fabric')}>
      FABRIC
      <span className="icon">{activeFilter === 'fabric' ? <FaChevronUp /> : <FaChevronDown />}</span>
    </div>
    {activeFilter === 'fabric' && (
      <div className="filter-submenu">
        <ul>
          <li>Cotton</li>
          <li>Polyester</li>
          <li>Silk</li>
        </ul>
      </div>
    )}
  </div>
);

export default FabricFilter;