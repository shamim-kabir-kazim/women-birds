import React, { useState } from 'react';
import { FaFilter,FaSlidersH } from 'react-icons/fa'; // Import Filter Icon
import './FilterBar.css';
import FilterBy from './FilterBy';

const FilterBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="b-filter-bar">
      {/* Menu Button */}
      <div className="b-filter-menu-button" onClick={() => setIsOpen(true)}>
        <FaSlidersH className="b-filter-icon" />
        Filters
      </div>

      {/* Full-Screen Expandable Filter Menu */}
      {isOpen && (
        <div className="b-filter-menu">
          {/* Header Section */}
          <div className="b-menu-head-div">
            <div className="b-div1"></div> {/* Empty Div */}
            <div className="b-div2">
              <img src="https://i.postimg.cc/mDm969qN/image-2.png" alt="Logo" className="b-menu-logo" />
            </div>
            <div className="b-div3" onClick={() => setIsOpen(false)}>
              <img src="https://i.postimg.cc/fLMzSg8B/close-circle-svgrepo-com-1.png" alt="Close" className="b-close-icon" />
            </div>
          </div>

          {/* Content Section */}
          <div className="b-menu-content-div"></div>
          <FilterBy />
          <div className="b-empty"></div>
          <div className="b-filter-apply-button"> Apply</div>
        </div>
        
      )}
    </div>
  );
};

export default FilterBar;
