import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import "./ProductTypeFilter.css";

const FabricFilter = ({ activeFilter, toggleFilter, onFilterChange }) => (
  <div className="filter-item">
    <div className="filter-title" onClick={() => toggleFilter('fabric')}>
      FABRIC
      <span className="icon">{activeFilter === 'fabric' ? <FaChevronUp /> : <FaChevronDown />}</span>
    </div>
    {activeFilter === 'fabric' && (
      <div className="filter-submenu">
        <ul>
          {[
            "Pure Silk",
            "Georgette",
            "Net",
            "Chiffon",
            "Velvet",
            "Lawn Cotton",
            "Raw Silk",
            "Art Silk",
            "Organza",
            "Rayon",
            "Crepe",
            "Muslin",
            "Cotton",
            "Tissue Silk",
            "Brocade",
          ].map((fabric) => (
            <li key={fabric} className="filter-subtype">
              <input
                type="checkbox"
                onChange={() => onFilterChange(fabric)}
                className="filter-checkbox"
              />
              <span className="filter-subtype-text">{fabric}</span>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default FabricFilter;