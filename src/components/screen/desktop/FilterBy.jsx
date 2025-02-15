import React, { useState } from 'react';
import PriceRange from './PriceRange';
import './FilterBy.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import icons
import ItemList from './ItemList';

const FilterBy = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [texts, setTexts] = useState(['Initial text 1', 'Initial text 2']);

  const toggleFilter = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  return (
    <div className="filterby-pro-midll">
      <div className="filterby-product-list-container">
        {/* Filter Section */}
        <div className="filterby-filter-section">
          {/* Price Type Filter */}
          <div className="filterby-filter-item">
            <div
              className="filterby-filter-title"
              onClick={() => toggleFilter('productPrice')}
            >
              PRICE
              <span className="filterby-icon">
                {activeFilter === 'productPrice' ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            {activeFilter === 'productPrice' && (
              <div className="filterby-filter-submenu">
                <ul>
                  <li>High to Low</li>
                  <li>Low to High</li>
                  <li>Combine</li>
                </ul>
              </div>
            )}
          </div>
          {/* Price Range */}
          <div className="filterby-filter-item-range">
            <PriceRange />
          </div>

          {/* Product Type Filter */}
          <div className="filterby-filter-item">
            <div
              className="filterby-filter-title"
              onClick={() => toggleFilter('productType')}
            >
              PRODUCT TYPE
              <span className="filterby-icon">
                {activeFilter === 'productType' ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            {activeFilter === 'productType' && (
              <div className="filterby-filter-submenu">
                <ul>
                  <li>Shirts</li>
                  <li>Pants</li>
                  <li>Dresses</li>
                </ul>
              </div>
            )}
          </div>

          {/* Fabric Filter */}
          <div className="filterby-filter-item">
            <div className="filterby-filter-title" onClick={() => toggleFilter('fabric')}>
              FABRIC
              <span className="filterby-icon">
                {activeFilter === 'fabric' ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            {activeFilter === 'fabric' && (
              <div className="filterby-filter-submenu">
                <ul>
                  <li>Cotton</li>
                  <li>Polyester</li>
                  <li>Silk</li>
                </ul>
              </div>
            )}
          </div>

          {/* Color Filter */}
          <div className="filterby-filter-item">
            <div className="filterby-filter-title" onClick={() => toggleFilter('color')}>
              COLOR
              <span className="filterby-icon">
                {activeFilter === 'color' ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            {activeFilter === 'color' && (
              <div className="filterby-filter-submenu">
                <ul>
                  <li>Red</li>
                  <li>Blue</li>
                  <li>Green</li>
                </ul>
              </div>
            )}
          </div>

          {/* Size Filter */}
          <div className="filterby-filter-item">
            <div className="filterby-filter-title" onClick={() => toggleFilter('size')}>
              SIZE
              <span className="filterby-icon">
                {activeFilter === 'size' ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            {activeFilter === 'size' && (
              <div className="filterby-filter-submenu">
                <ul>
                  <li>Small</li>
                  <li>Medium</li>
                  <li>Large</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Content List Section */}
      </div>
    </div>
  );
};

export default FilterBy;