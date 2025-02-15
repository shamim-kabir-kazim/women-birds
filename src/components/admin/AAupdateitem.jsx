import React, { useState } from "react";
import "./AAupdateitem.css";

const AAuupdateitem = () => {
  const [product, setProduct] = useState({
    id: "123456",
    name: "lehenga",
    image: "https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg",
    price: "3000 TK",
    size: "s,m,l,xl",
    color:"red , green , blue",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Convert to a preview URL
      setProduct((prev) => ({ ...prev, image: imageUrl }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product added:", product);
  };

  return (
    <form className="up-add-product-form" onSubmit={handleSubmit}>
      <h2>Update Product</h2>

      <div className="up-product-main">

     <div className="up-product-image">
        <div className="up-product-name">
      <div className="up-form-group">
        <label>Product Image</label>
        {product.image && <img src={product.image} alt="Preview" width="300" />}
        <input type="file" name="image"  onChange={handleImageChange} />
        </div>
        </div>
        
      </div>



      <div className="up-product-price-name">
      <div className="up-product-name">
      <div className="up-form-group"> 
        <label>Product ID</label>
        <input type="text" name="id" value={product.id} onChange={handleChange} placeholder="Enter product ID" disabled />
      </div>
      </div>
      <div className="up-product-name">
      <div className="up-form-group">
        <label>Product Name</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Enter product name" />
      </div>
      </div>

      <div className="up-product-name">
      <div className="up-form-group">
        <label>Product Price</label>
        <input type="text" name="price" value={product.price} onChange={handleChange} placeholder="Enter product price" />
      </div>
      </div>
      <div className="up-product-name">
      <div className="up-form-group">
        <label>Sizes</label>
        <input type="text" name="price" value={product.size} onChange={handleChange} placeholder="Enter product Sizes Available"  />
      </div>
      </div>
      <div className="up-product-name">
      <div className="up-form-group">
        <label>Colors</label>
        <input type="text" name="price" value={product.color} onChange={handleChange} placeholder="Enter product Colors Available" />
      </div>
      </div>
      </div>
      </div>

      <button type="submit" className="up-submit-button">Update</button>
    </form>
  );
};

export default AAuupdateitem;