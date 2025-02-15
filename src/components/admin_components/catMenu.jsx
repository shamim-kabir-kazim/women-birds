import React, { useState } from "react";
import "./catMenu.css";
import { FaHome, FaAd, FaStar, FaTags, FaTshirt, FaPercent, FaGem } from "react-icons/fa";
import ViewInventory from "./ViewInventory";
import DynamicTable from "./DynamicTable";

const CatMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState("All Products");

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case "All Products":
        return (
          <div className="hlo-content">
            <ViewInventory />
          </div>
        );
      case "Dresses":
        return (
          <div className="hlo-content">
            <DynamicTable category="Dresses" />
          </div>
        );
      case "Lehenga":
        return (
          <div className="hlo-content">
            <DynamicTable category="Lehenga" />
          </div>
        );
      case "Sale":
        return (
          <div className="hlo-content">
            <DynamicTable category="Sale" />
          </div>
        );
      case "Jewellery":
        return (
          <div className="hlo-content">
            <DynamicTable category="Jewellery" />
          </div>
        );
      case "New This Week":
        return (
          <div className="hlo-content">
            <DynamicTable category="New This Week" />
          </div>
        );
      case "New Collection":
        return (
          <div className="hlo-content">
            <DynamicTable category="New Collection" />
          </div>
        );
      case "Best Deals":
        return (
          <div className="hlo-content">
            <DynamicTable category="Best Deals" />
          </div>
        );
      case "Ads":
        return <div className="hlo-content" style={{ backgroundColor: "lavender" }}>Ads Content</div>;
      case "Featured":
        return <div className="hlo-content" style={{ backgroundColor: "lightgray" }}>Featured Content</div>;
      case "Offer":
        return <div className="hlo-content" style={{ backgroundColor: "lightyellow" }}>Offer Content</div>;
      default:
        return (
          <div className="hlo-content" style={{ backgroundColor: "lightblue" }}>
            <ViewInventory />
          </div>
        );
    }
  };

  return (
    <div className="hlo-main">
      <div className="hlo-header">
        <div className={`hlo-menu-item ${selectedMenu === "All Products" ? "hlo-selected" : ""}`} onClick={() => handleMenuClick("All Products")}><FaHome /> All Products</div>
        <div className={`hlo-menu-item ${selectedMenu === "Dresses" ? "hlo-selected" : ""}`} onClick={() => handleMenuClick("Dresses")}><FaTshirt /> Dresses</div>
        <div className={`hlo-menu-item ${selectedMenu === "Lehenga" ? "hlo-selected" : ""}`} onClick={() => handleMenuClick("Lehenga")}><FaTshirt /> Lehenga</div>
        <div className={`hlo-menu-item ${selectedMenu === "Sale" ? "hlo-selected" : ""}`} onClick={() => handleMenuClick("Sale")}><FaPercent /> Sale</div>
        <div className={`hlo-menu-item ${selectedMenu === "Jewellery" ? "hlo-selected" : ""}`} onClick={() => handleMenuClick("Jewellery")}><FaGem /> Jewellery</div>
        <div className={`hlo-menu-item ${selectedMenu === "New This Week" ? "hlo-selected" : ""}`} onClick={() => handleMenuClick("New This Week")}><FaStar /> New This Week</div>
        <div className={`hlo-menu-item ${selectedMenu === "New Collection" ? "hlo-selected" : ""}`} onClick={() => handleMenuClick("New Collection")}><FaStar /> New Collection</div>
        <div className={`hlo-menu-item ${selectedMenu === "Best Deals" ? "hlo-selected" : ""}`} onClick={() => handleMenuClick("Best Deals")}><FaTags /> Best Deals</div>
        <div className={`hlo-menu-item ${selectedMenu === "Ads" ? "hlo-selected" : ""}`} onClick={() => handleMenuClick("Ads")}><FaAd /> Ads</div>
        <div className={`hlo-menu-item ${selectedMenu === "Featured" ? "hlo-selected" : ""}`} onClick={() => handleMenuClick("Featured")}><FaStar /> Featured</div>
        <div className={`hlo-menu-item ${selectedMenu === "Offer" ? "hlo-selected" : ""}`} onClick={() => handleMenuClick("Offer")}><FaTags /> Offer</div>
      </div>
      {renderContent()}
    </div>
  );
};

export default CatMenu;