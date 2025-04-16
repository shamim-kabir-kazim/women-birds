import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './FilterStyles.css';

const colors = [
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Black', hex: '#000000' },
  { name: 'Gray', hex: '#808080' },
  { name: 'Silver', hex: '#C0C0C0' },
  { name: 'Red', hex: '#FF0000' },
  { name: 'Maroon', hex: '#800000' },
  { name: 'Burgundy', hex: '#800020' },
  { name: 'Crimson', hex: '#DC143C' },
  { name: 'Rose', hex: '#FF007F' },
  { name: 'Pink', hex: '#FFC0CB' },
  { name: 'Hot Pink', hex: '#FF69B4' },
  { name: 'Fuchsia', hex: '#FF00FF' },
  { name: 'Blush', hex: '#DE5D83' },
  { name: 'Orange', hex: '#FFA500' },
  { name: 'Coral', hex: '#FF7F50' },
  { name: 'Peach', hex: '#FFDAB9' },
  { name: 'Yellow', hex: '#FFFF00' },
  { name: 'Gold', hex: '#FFD700' },
  { name: 'Mustard', hex: '#FFDB58' },
  { name: 'Green', hex: '#008000' },
  { name: 'Olive', hex: '#808000' },
  { name: 'Mint', hex: '#98FF98' },
  { name: 'Emerald', hex: '#50C878' },
  { name: 'Teal', hex: '#008080' },
  { name: 'Blue', hex: '#0000FF' },
  { name: 'Navy', hex: '#000080' },
  { name: 'Sky Blue', hex: '#87CEEB' },
  { name: 'Royal Blue', hex: '#4169E1' },
  { name: 'Cobalt Blue', hex: '#0047AB' },
  { name: 'Purple', hex: '#800080' },
  { name: 'Lavender', hex: '#E6E6FA' },
  { name: 'Violet', hex: '#EE82EE' },
  { name: 'Plum', hex: '#DDA0DD' },
  { name: 'Brown', hex: '#A52A2A' },
  { name: 'Tan', hex: '#D2B48C' },
  { name: 'Beige', hex: '#F5F5DC' },
];

const ColorFilter = ({ activeFilter, toggleFilter, onFilterChange }) => {
  return (
    <div className="filter-item">
      <div className="filter-title" onClick={() => toggleFilter('color')}>
        <span className="filter-title-text">COLOR</span>
        <span className="icon">
          {activeFilter === 'color' ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      {activeFilter === 'color' && (
        <div className="filter-submenu">
          <ul>
            {colors.map((color) => (
              <li key={color.name} className="filter-subtype">
                <input
                  type="checkbox"
                  onChange={() => onFilterChange(color.name)}
                  className="filter-checkbox"
                />
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: color.hex,
                    marginRight: '10px',
                    border: '1px solid #ccc',
                  }}
                ></div>
                <span className="filter-subtype-text">{color.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ColorFilter;