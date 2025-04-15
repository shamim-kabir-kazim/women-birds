import React, { useState, useEffect } from 'react';
import PriceRange from './PriceRange';
import './ProductList.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import icons
import ItemList from './ItemList';

// Mapping of categories to their respective product types
const productTypeMapping = {
  sale: [
    "Discounted Items",
    "Clearance Sale",
    "Special Offers",
  ],
  dress: [
    "Salwar Kameez",
    "Anarkali",
    "Gowns",
    "Saree",
    "Kurtis",
    "Western Dresses",
    "Party Wear",
    "Casual Wear",
  ],
  jewellery: [
    "Necklaces",
    "Earrings",
    "Bangles",
    "Rings",
    "Sets (e.g., full bridal set)",
    "Artificial Jewelry",
    "Gold-Plated / Kundan / Polki",
  ],
};

const ProductList = ({ items, category }) => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [filteredItems, setFilteredItems] = useState(items); // Store filtered items
  const [resetTrigger, setResetTrigger] = useState(false); // State to reset PriceRange

  useEffect(() => {
    // Reset the price range and filtered items when the category changes
    setFilteredItems(items);
    setResetTrigger((prev) => !prev); // Toggle the trigger to reset the range
  }, [category, items]);

  const toggleFilter = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  const handleFilterByPrice = (minPrice, maxPrice) => {
    const filtered = items.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
    setFilteredItems(filtered);
  };

  // Get the product types for the current category
  const productTypes = productTypeMapping[category] || [];

  return (
    <div className="pro-midll">
      <div className="product-list-container">
        {/* Filter Section */}
        <div className="filter-section">
          <h2>FILTER BY</h2>
          {/* Price Filter */}
          <div className="filter-item">
            <div className="filter-title" onClick={() => toggleFilter('productPrice')}>
              PRICE
              <span className="icon">
                {activeFilter === 'productPrice' ? <FaChevronUp /> : <FaChevronDown />}
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
            <PriceRange
              onFilterByPrice={handleFilterByPrice}
              resetTrigger={resetTrigger} // Pass reset trigger to PriceRange
            />
          </div>

          {/* Product Type Filter */}
          <div className="filter-item">
            <div className="filter-title" onClick={() => toggleFilter('productType')}>
              PRODUCT TYPE
              <span className="icon">
                {activeFilter === 'productType' ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            {activeFilter === 'productType' && (
              <div className="filter-submenu">
                <ul>
                  {productTypes.map((type) => (
                    <li key={type}>{type}</li>
                  ))}
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

          {/* Additional Filters (e.g., Fabric, Color, Size) */}
          {/* ... */}
        </div>

        {/* Content List Section */}
        <div className="content-list">
          <div className="content-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px', width: '100%' }}>
              <div className="result">{filteredItems.length} results</div>
              <div className="relevance">
                <label className="relelabel">Sorted By :</label>
                <select className="releSelect">
                  <option value="relevance">Relevance</option>
                  <option value="priceHighToLow">Price: High To Low</option>
                  <option value="priceLowToHigh">Price: Low To High</option>
                  <option value="discountHighToLow">Discount: High To Low</option>
                  <option value="discountLowToHigh">Discount: Low To High</option>
                </select>
              </div>
            </div>
          </div>

          {/* Product Show */}
          <div style={{ padding: '0px', overflow: 'hidden' }}>
            <div className="content-item">
              <ItemList items={filteredItems} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;