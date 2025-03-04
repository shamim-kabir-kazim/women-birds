import React, { useState, useEffect } from 'react';
import './Product.css';

const Product = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [selectedSize, setSelectedSize] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sideImages, setSideImages] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/view-product/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
        setMainImage(data.primary_img_url);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchSideImages = async () => {
      try {
        const response = await fetch(`/api/view-extra-images/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch extra images');
        }
        const data = await response.json();
        setSideImages(data.map(img => img.image_url));
      } catch (error) {
        setError(error.message);
      }
    };

    if (productId) {
      fetchProduct();
      fetchSideImages();
    }
  }, [productId]);

  const handleSizeChange = (size) => {
    setSelectedSize((prevSize) => (prevSize === size ? null : size));
  };

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      setQuantity(quantity + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <p>No product found</p>;
  }

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
          <h2>{product.product_name}</h2>
          <p className="price">${product.price}</p>

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
            <div className="color-box" style={{ backgroundColor: '#ff9999' }}></div>
            <div className="color-box" style={{ backgroundColor: '#ffcc99' }}></div>
            <div className="color-box" style={{ backgroundColor: '#ccff99' }}></div>
            <div className="color-box" style={{ backgroundColor: '#99ccff' }}></div>
          </div>

          <div className="quantity-section">
            <h3 className="product-heads">Quantity:</h3>
            <button onClick={() => handleQuantityChange('decrement')}>-</button>
            <input type="text" value={quantity} readOnly />
            <button onClick={() => handleQuantityChange('increment')}>+</button>
          </div>

          <div className="action-buttons">
            <button className="buy-now">BUY NOW</button>
            <button className="add-to-cart">ADD TO CART</button>
          </div>
          <div className="product-details">
            <p><strong>Product Details</strong></p>
            <ul>
              <li>{product.description}</li>
            </ul>

            <p><strong>Fabric:</strong> {product.fabric}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;