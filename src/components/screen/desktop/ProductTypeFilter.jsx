import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./ProductTypeFilter.css";

const productTypeMapping = {
  Sarees: [
    "Banarasi Saree",
    "Katan Saree",
    "Jamdani Saree",
    "Silk Saree",
    "Muslin Saree",
    "Georgette Saree",
    "Tissue Saree",
    "Half Silk Saree",
    "Embroidered Saree",
    "Designer Saree",
    "Bridal Saree",
    "Handloom Saree",
    "Partywear Saree",
  ],
  Lehengas: [
    "Bridal Lehenga",
    "A-Line Lehenga",
    "Circular / Flared Lehenga",
    "Fishtail / Mermaid Lehenga",
    "Panelled Lehenga",
    "Sharara Cut Lehenga",
    "Velvet Lehenga",
    "Net / Chiffon Lehenga",
    "Embroidered Lehenga",
    "Semi-Stitched Lehenga",
    "Lehenga with Dupatta",
    "Simple/Light Lehenga (for guests)",
  ],
  Jewelry: [
    "Bridal Jewelry Set",
    "Gold-Plated Jewelry",
    "Kundan Jewelry",
    "Pearl Jewelry",
    "Necklace Sets",
    "Maang Tikka / Matha Patti",
    "Nose Ring (Nath)",
    "Bangles / Kadas",
    "Earrings (Jhumka, Stud, Chandbali)",
    "Anklets (Payel)",
    "Rings",
    "Bridal Chura",
    "Waist Belt (Kamarbandh)",
  ],
  jewellery: [
    "Bridal Jewelry Set",
    "Gold-Plated Jewelry",
    "Kundan Jewelry",
    "Pearl Jewelry",
    "Necklace Sets",
    "Maang Tikka / Matha Patti",
    "Nose Ring (Nath)",
    "Bangles / Kadas",
    "Earrings (Jhumka, Stud, Chandbali)",
    "Anklets (Payel)",
    "Rings",
    "Bridal Chura",
    "Waist Belt (Kamarbandh)",
  ],
};

const ProductTypeFilter = ({ activeFilter, toggleFilter, onFilterChange, category }) => {
  // Determine which filters to show based on the category
  const filtersToShow =
    category === "sale" ? productTypeMapping : { [category]: productTypeMapping[category] };

  return (
    <div className="filter-item">
      <div className="filter-title" onClick={() => toggleFilter("productType")}>
        <span className="filter-title-text">PRODUCT TYPE</span>
        <span className="icon">
          {activeFilter === "productType" ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      {activeFilter === "productType" && (
        <div className="filter-submenu">
          {Object.entries(filtersToShow).map(([mainType, subTypes]) => (
            <div key={mainType} className="filter-category">
              <div className="filter-main-type">
                <input
                  type="checkbox"
                  onChange={() => onFilterChange(mainType)}
                  className="filter-checkbox"
                />
                <span className="filter-main-type-text">{mainType}</span>
              </div>
              <ul>
                {(subTypes || []).map((subType) => (
                  <li key={subType} className="filter-subtype">
                    <input
                      type="checkbox"
                      onChange={() => onFilterChange(subType)}
                      className="filter-checkbox"
                    />
                    <span className="filter-subtype-text">{subType}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductTypeFilter;