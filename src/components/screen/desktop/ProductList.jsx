import React, { useState, useEffect } from 'react';
import './ProductList.css';
import ItemList from './ItemList';
import FilterMenu from './FilterMenu'; // Import the FilterMenu component

const ProductList = ({ items, category }) => {
  const [filteredItems, setFilteredItems] = useState(items); // Store filtered items
  const [resetTrigger, setResetTrigger] = useState(false); // State to reset filters
  const [sortOption, setSortOption] = useState('relevance'); // State for Sort By menu

  useEffect(() => {
    // Reset the filters and items when the category changes
    setFilteredItems(items);
    setResetTrigger((prev) => !prev); // Toggle the trigger to reset filters
    setSortOption('relevance'); // Reset sort option
  }, [category, items]);

  const handleFilterByPrice = (minPrice, maxPrice) => {
    const filtered = items.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
    setFilteredItems(filtered);
  };

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);
    let sortedItems = [...filteredItems];
    if (selectedOption === 'priceHighToLow') {
      sortedItems.sort((a, b) => b.price - a.price);
    } else if (selectedOption === 'priceLowToHigh') {
      sortedItems.sort((a, b) => a.price - b.price);
    }
    setFilteredItems(sortedItems);
  };

  return (
    <div className="pro-midll">
      <div className="product-list-container">
        {/* Use FilterMenu component */}
        <FilterMenu
          category={category}
          onFilterByPrice={handleFilterByPrice}
          resetTrigger={resetTrigger}
        />
        <div className="content-list">
          <div className="content-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <div className="result">{filteredItems.length} results</div>
              <div className="relevance">
                <label>Sorted By:</label>
                <select value={sortOption} onChange={handleSortChange}>
                  <option value="relevance">Relevance</option>
                  <option value="priceHighToLow">Price: High To Low</option>
                  <option value="priceLowToHigh">Price: Low To High</option>
                </select>
              </div>
            </div>
          </div>
          <ItemList items={filteredItems} />
        </div>
      </div>
    </div>
  );
};

export default ProductList;