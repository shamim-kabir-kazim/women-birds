import React, { useState } from 'react';
import './Product.css';

const Product = () => {
  const [mainImage, setMainImage] = useState(
    'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg' // Default image URL
  );
  const [selectedSize, setSelectedSize] = useState(null); // To store the selected size
  const handleSizeChange = (size) => {
    // If the same size is clicked, unselect it; otherwise, select the new size
    setSelectedSize((prevSize) => (prevSize === size ? null : size));
  };

  const sideImages = [
    'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    'https://i.postimg.cc/hPK0DCBh/866a615c22103a862f201795fa9d3cc7.jpg',
    'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    'https://i.postimg.cc/hPK0DCBh/866a615c22103a862f201795fa9d3cc7.jpg',
  ];

  const [quantity, setQuantity] = useState(2);

  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      setQuantity(quantity + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="midll">
    <div className="image-gallery">
      <div className="side-images-container">
        {sideImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="side-image"
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
      <div className="main-image-container">
        <img src={mainImage} alt="Main" className="main-image" />
      </div>

      <div className="product-card">
      <h2>This is a demo product</h2>
        <p className="price">$ 999</p>


        <div className="size-section">
  <h3 className="product-heads">Size:</h3>
  {['S', 'M', 'L', 'XL'].map((size) => (
    <label key={size}>
      <input
        type="checkbox"
        name="size"
        value={size}
        checked={selectedSize === size}
        onChange={() => handleSizeChange(size)}
      />
      {size}
    </label>
  ))}
</div>

        <div className="color-section">
          <h3 className="product-heads">Color:</h3>
          <div
            className="color-box"
            style={{ backgroundColor: '#ff9999' }}
          ></div>
          <div
            className="color-box"
            style={{ backgroundColor: '#ffcc99' }}
          ></div>
          <div
            className="color-box"
            style={{ backgroundColor: '#ccff99' }}
          ></div>
          <div
            className="color-box"
            style={{ backgroundColor: '#99ccff' }}
          ></div>
        </div>

        <div className="quantity-section">
        <h3 className="product-heads">Quantity:</h3>
          <button onClick={() => handleQuantityChange('decrement')}>-</button>
          <input type="text" value={quantity} readOnly />
          <button onClick={() => handleQuantityChange('increment')}>+</button>
        </div>

        <p className="description"></p>

        <div className="action-buttons">
          <button className="buy-now">BUY NOW</button>
          <button className="add-to-cart">ADD TO CART</button>
        </div>
        <div class="product-details">
          <p>
            <strong>Product Details</strong>
          </p>
          <ul>
            <li>Elegant Demo Lehenga in Georgette fabric</li>
            <li>The Lehenga is adorned with intricate Zari embroidery</li>
            <li>Comes with an unstitched blouse and a soft net dupatta</li>
            <li>Ensures premium quality and craftsmanship</li>
          </ul>

          <p>
            <strong>Size & Fit</strong>
          </p>
          <ul>
            <li>Lehenga: 4.5 Mtrs</li>
            <li>Blouse: 0.80 Mtrs</li>
            <li>Dupatta: 2.5 Mtrs</li>
          </ul>

          <p>
            <strong>Material & Care</strong>
          </p>
          <ul>
            <li>Fabric: Georgette</li>
            <li>Care: Dry Clean Only</li>
          </ul>

          <p>
            <strong>Product Code:</strong> DLG0023456_RED
          </p>

          <p>
            <strong>Note:</strong> Product color may slightly vary due to
            photographic lighting sources or monitor settings.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Product;
