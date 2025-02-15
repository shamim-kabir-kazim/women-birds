import React, { useState } from "react";
import { FiGrid, FiPlusSquare, FiLayers, FiUsers } from "react-icons/fi";
import "./Adminpage.css"; // Import external CSS file
import TestServerConnection from "../../TestServerConnection ";
import CatMenu from "../admin_components/catMenu";
import AddMenu from "../admin_components/addMenu";

const Adminpage = () => {
  const [selectedSection, setSelectedSection] = useState("Dashboard");
  const [selectedItem, setSelectedItem] = useState("regular");

  const renderContent = () => {
    switch (selectedSection) {
      case "Dashboard":
        return (
          <div className="to-content-box">
            <h1>Dashboard</h1>
            <p>This is the Dashboard section.</p>
          </div>
        );
      case "Add Item":
        return (
          <div className="to-content-box">
           <AddMenu />
          </div>
               );
      case "Category":
        return (
          <div className="to-content-box">
            <CatMenu />
          </div>
        );
      case "Customers":
        return (
          <div className="to-content-box">
            <h1>Customers</h1>
            <p>This is the Customers section.</p>
          </div>
        );
      default:
        return <div className="to-content-box">Invalid Section</div>;
    }
  };

  return (
    <div className="midll-admin-page">
    <div className="to-dashboard-container">
      {/* Sidebar */}
      <div className="to-sidebar">
        <h2 className="to-sidebar-title">Admin Panel</h2>
        <ul className="to-sidebar-menu">
          <li
            className={`to-sidebar-item ${
              selectedSection === "Dashboard" ? "to-active" : ""
            }`}
            onClick={() => setSelectedSection("Dashboard")}
          >
            <FiGrid className="to-icon" /> Dashboard
          </li>
          <li
            className={`to-sidebar-item ${
              selectedSection === "Add Item" ? "to-active" : ""
            }`}
            onClick={() => setSelectedSection("Add Item")}
          >
            <FiPlusSquare className="to-icon" /> Add Item
          </li>
          <li
            className={`to-sidebar-item ${
              selectedSection === "Category" ? "to-active" : ""
            }`}
            onClick={() => setSelectedSection("Category")}
          >
            <FiLayers className="to-icon" /> Category
          </li>
          <li
            className={`to-sidebar-item ${
              selectedSection === "Customers" ? "to-active" : ""
            }`}
            onClick={() => setSelectedSection("Customers")}
          >
            <FiUsers className="to-icon" /> Customers
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="to-content">{renderContent()}</div>
    </div>
    </div>
  );
};

export default Adminpage;
