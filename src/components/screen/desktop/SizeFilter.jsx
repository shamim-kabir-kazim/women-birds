import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./SizeFilter.css";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const SizeFilter = ({ activeFilter, toggleFilter, onFilterChange }) => {
  return (
    <div className="filter-item">
      <div className="filter-title" onClick={() => toggleFilter("size")}>
        <span className="filter-title-text">SIZE</span>
        <span className="icon">
          {activeFilter === "size" ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      {activeFilter === "size" && (
        <div className="filter-submenu">
          <ul>
            {sizes.map((size) => (
              <li key={size} className="filter-subtype">
                <input
                  type="checkbox"
                  onChange={() => onFilterChange(size)}
                  className="filter-checkbox"
                />
                <span className="filter-subtype-text">{size}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SizeFilter;