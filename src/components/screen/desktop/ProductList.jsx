import React, { useState } from 'react';
import PriceRange from './PriceRange';
import './ProductList.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import icons
import ItemList from './ItemList';

const ProductList = ({ items }) => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [texts, setTexts] = useState(['Initial text 1', 'Initial text 2']);

  const toggleFilter = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  return (
    <div className="pro-midll">
      <div className="product-list-container">
        {/* Filter Section */}
        <div className="filter-section">
          <h2>FILTER BY</h2>
          {/* Price Type Filter */}
          <div className="filter-item">
            <div
              className="filter-title"
              onClick={() => toggleFilter('productPrice')}
            >
              PRICE
              <span className="icon">
                {activeFilter === 'productPrice' ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </span>
            </div>
            {activeFilter === 'productPrice' && (
              <div className="filter-submenu">
                <ul>
                  <li>High to Low</li>
                  <li>Low to High</li>
                  <li>Combine</li>
                </ul>
              </div>
            )}
          </div>
          {/* Price Range */}
          <div className="filter-item-range">
            <PriceRange />
          </div>

          {/* Product Type Filter */}
          <div className="filter-item">
            <div
              className="filter-title"
              onClick={() => toggleFilter('productType')}
            >
              PRODUCT TYPE
              <span className="icon">
                {activeFilter === 'productType' ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </span>
            </div>
            {activeFilter === 'productType' && (
              <div className="filter-submenu">
                <ul>
                  <li>Shirts</li>
                  <li>Pants</li>
                  <li>Dresses</li>
                </ul>
              </div>
            )}
          </div>

          {/* Fabric Filter */}
          <div className="filter-item">
            <div className="filter-title" onClick={() => toggleFilter('fabric')}>
              FABRIC
              <span className="icon">
                {activeFilter === 'fabric' ? <FaChevronUp /> : <FaChevronDown />}
              </span>
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

          {/* Color Filter */}
          <div className="filter-item">
            <div className="filter-title" onClick={() => toggleFilter('color')}>
              COLOR
              <span className="icon">
                {activeFilter === 'color' ? <FaChevronUp /> : <FaChevronDown />}
              </span>
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

          {/* Size Filter */}
          <div className="filter-item">
            <div className="filter-title" onClick={() => toggleFilter('size')}>
              SIZE
              <span className="icon">
                {activeFilter === 'size' ? <FaChevronUp /> : <FaChevronDown />}
              </span>
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
        </div>

        {/* Content List Section */}
        <div className="content-list">
          {/* result */}
          <div className="content-item">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0px',
                width: '100%',
              }}
            >
              <div className="result">999 results</div>
              <div className="relevance">
                <label className="relelabel">Sorted By :</label>
                <select className="releSelect">
                  <option value="relevance">Relevance</option>
                  <option value="relevance">Price:Hight To Low</option>
                  <option value="relevance">Price:Low To High</option>
                  <option value="relevance">Discount:Hight To Low</option>
                  <option value="relevance">Discount:Low To High</option>
                  {/* Add more sorting options here if needed */}
                </select>
              </div>
            </div>
          </div>
          {/* proct show */}
          <div style={{ padding: '0px', overflow: 'hidden' }}>
            <div className="content-item">
              <ItemList items={items} />
            </div>
          </div>

          {/* text below the product */}
          <div className="content-item-txt">
            <div className="text-div">{texts[0]}</div>
          </div>
          <div className="content-item-txt">
            <div className="text-div">{texts[1]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
