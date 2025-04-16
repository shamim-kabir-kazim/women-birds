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
  ThreePiece: [
    "Embroidered Three-Piece",
    "Cotton Three-Piece",
    "Silk Three-Piece",
    "Lawn Three-Piece",
    "Chikan / Hand Work",
    "Partywear Three-Piece",
    "Long Kameez Three-Piece",
    "Anarkali Three-Piece",
    "Palazzo Set",
    "Pant Style Three-Piece",
    "Kurti with Dupatta Set",
  ],
  Occasionals: [
    "Gown / Maxi Dress",
    "Designer Salwar Kameez",
    "Embroidered Kurtis",
    "Stylish Three-Piece",
    "Party Saree",
    "Modern Lehenga",
    "Sharara / Gharara",
    "Kaftan Dress",
    "Tunic & Palazzo Sets",
    "Ready-to-Wear Suits",
  ],

  Accessories: [
    "Bridal Dupatta",
    "Potli Bag / Clutch",
    "Bindis",
    "Hair Accessories",
    "Footwear / Sandals",
    "Hijab / Scarves (if modest fashion included)",
    "Bridal Gloves",
    "Bridal Hair Extensions",
    "Safety Pins & Saree Pins",
    "Scent / Attar (optional but traditional)",
  ],
  MehendiWear: [
    "Floral Printed Lehenga",
    "Light Embroidered Saree",
    "Simple Gharara / Sharara",
    "Bright-Colored Three-Piece",
    "Kurti with Skirt",
    "Kaftan",
    "Mehendi-Themed Gown",
    "Yellow-Green Sets",
    "Floral Jewelry Sets",
    "Minimal Dupatta Looks",
  ],
  HaldiWear: [
    "Yellow Cotton Saree",
    "Light Lehenga in Yellow",
    "Simple Gharara",
    "Kurti & Dupatta Set",
    "Floral Crown / Accessories",
    "Yellow Three-Piece",
    "Gown with Haldi Theme",
    "Haldi Jewelry Set (floral or artificial)",
  ],
  CoupleSet: [
    "Matching Saree & Panjabi Set",
    "Bride & Groom Coordinated Lehenga–Sherwani",
    "Color-Matched Couple Wear",
    "Couple T-Shirt (for casual pre-events)",
    "Engagement Set",
    "Reception Matching Look",
  ],
  Jewellery: [
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
  let filtersToShow;

  if (category === "sale") {
    filtersToShow = productTypeMapping;
  } else if (category === "dress") {
    // Include all dress-related main types
    filtersToShow = {
      Sarees: productTypeMapping.Sarees,
      Lehengas: productTypeMapping.Lehengas,
    };
  } else if (category === "jewellery") {
    // Include only the Jewellery main type
    filtersToShow = {
      Jewellery: productTypeMapping.Jewellery,
    };
  } else {
    filtersToShow = { [category]: productTypeMapping[category] };
  }

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