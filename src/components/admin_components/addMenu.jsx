import React, { useState } from "react";
import "./addMenu.css";
import { FaAd } from "react-icons/fa";
import AddItemComp from "./AddItemComp";
import UpdateImages from "./UpdateImages";

const addMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState("All Products");

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case "Add Product":
        return (
          <div className="hlo-content">
            {/* Content for Add Product */}
            <AddItemComp />
          </div>
        );
      case "Add Poster":
        return (
          <div className="hlo-content" style={{ backgroundColor: "lightblue" }}>
            {/* Default content */}
            <UpdateImages />
          </div>
        );
      default:
        return (
          <div className="hlo-content" style={{ backgroundColor: "lightblue" }}>
            {/* Default content */}
            <AddItemComp />
          </div>
        );
    }
  };

  return (
    <div className="hlo-main">
      <div className="hlo-header">
        <div
          className={`hlo-menu-item ${selectedMenu === "Add Product" ? "hlo-selected" : ""}`}
          onClick={() => handleMenuClick("Add Product")}
        >
          <FaAd /> Add Product
        </div>
        <div
          className={`hlo-menu-item ${selectedMenu === "Add Poster" ? "hlo-selected" : ""}`}
          onClick={() => handleMenuClick("Add Poster")}
        >
          <FaAd /> Add Poster
        </div>


      </div>
      {renderContent()}
    </div>
  );
};

export default addMenu;
