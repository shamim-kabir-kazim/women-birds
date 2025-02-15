import React, { useState } from "react";
import "./AAdditem.css";

const AAdditem = () => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    image: null,
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product added:", product);
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <h2>Add New Product</h2>
      <div className="product-id-name">
      <div className="product-name">
      <div className="form-group"> 
        <label>Product ID</label>
        <input type="text" name="id" value={product.id} onChange={handleChange} placeholder="Enter product ID" />
      </div>
      </div>
      <div className="product-name">
      <div className="form-group">
        <label>Product Name</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Enter product name" />
      </div>
      </div>
      </div>
      <div className="product-id-name">
      <div className="product-name">
      <div className="form-group">
        <label>Product Image</label>
        <input type="file" name="image" onChange={handleImageChange} />
      </div>
      </div>
      <div className="product-name">
      <div className="form-group">
        <label>Product Price</label>
        <input type="text" name="price" value={product.price} onChange={handleChange} placeholder="Enter product price" />
      </div>
      </div>
      </div>
      
      <div className="product-id-name">
      <div className="product-name">
      <div className="form-group">
        <label>Sizes</label>
        <input type="text" name="price" value={product.price} onChange={handleChange} placeholder="Enter product Sizes Available"  />
      </div>
      </div>
      <div className="product-name">
      <div className="form-group">
        <label>Colors</label>
        <input type="text" name="price" value={product.price} onChange={handleChange} placeholder="Enter product Colors Available" />
      </div>
      </div>
      </div>
     
      <button type="submit" className="submit-button">Add Product</button>
    </form>
  );
};

export default AAdditem;