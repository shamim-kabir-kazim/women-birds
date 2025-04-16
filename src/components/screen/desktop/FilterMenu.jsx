import React, { useState } from 'react';
import PriceFilter from './PriceFilter';
import ProductTypeFilter from './ProductTypeFilter';
import FabricFilter from './FabricFilter';
import ColorFilter from './ColorFilter';
import SizeFilter from './SizeFilter';

const FilterMenu = ({ category, productTypeMapping, onFilterByPrice, resetTrigger }) => {
  const [activeFilter, setActiveFilter] = useState(null);

  const toggleFilter = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  return (
    <div className="filter-section">
      <h2>FILTER BY</h2>
      <PriceFilter
        activeFilter={activeFilter}
        toggleFilter={toggleFilter}
        onFilterByPrice={onFilterByPrice}
        resetTrigger={resetTrigger}
      />
      <ProductTypeFilter
        activeFilter={activeFilter}
        toggleFilter={toggleFilter}
        category={category}
      />
      <FabricFilter activeFilter={activeFilter} toggleFilter={toggleFilter} />
      <ColorFilter activeFilter={activeFilter} toggleFilter={toggleFilter} />
      <SizeFilter activeFilter={activeFilter} toggleFilter={toggleFilter} />
    </div>
  );
};

export default FilterMenu;