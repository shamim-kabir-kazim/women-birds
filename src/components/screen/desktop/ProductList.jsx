import React, { useState, useEffect } from 'react';
import './ProductList.css';
import ItemList from './ItemList';
import FilterMenu from './FilterMenu';

const ProductList = ({ items, category }) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [resetTrigger, setResetTrigger] = useState(false);
  const [sortOption, setSortOption] = useState('relevance');

  useEffect(() => {
    setFilteredItems(items);
    setResetTrigger((prev) => !prev);
    setSortOption('relevance');
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