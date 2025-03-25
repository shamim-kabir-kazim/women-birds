import React, { useState, useEffect } from 'react';
import './Product.css';
import axios from 'axios';
import { validateUser } from '../../../utils/uservalidation'; // Update with the correct relative path
import OrderPopup from './OrderPopup'; // Import the OrderPopup component

const Product = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedColorCode, setSelectedColorCode] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sideImages, setSideImages] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [availableSizes, setAvailableSizes] = useState([]);
  const [availableColors, setAvailableColors] = useState([]);
  const [isStyleTipsOpen, setIsStyleTipsOpen] = useState(false);
  const [isShippingReturnsOpen, setIsShippingReturnsOpen] = useState(false);
  const [isFaqsOpen, setIsFaqsOpen] = useState(false);
  const [notification, setNotification] = useState({ visible: false, message: '' });
  const [isSizeValid, setIsSizeValid] = useState(true);
  const [isColorValid, setIsColorValid] = useState(true);
  const [isOrderPopupOpen, setIsOrderPopupOpen] = useState(false);

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

    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`/api/view-details/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        console.log('Product Details:', data); // Log the entire response
        setProductDetails(data);
        setAvailableSizes([...new Set(data.map(detail => detail.size))]);
        setAvailableColors([...new Set(data.map(detail => detail.color))]);
        
        // Log all color hex codes to the console
        const colorCodes = [...new Set(data.map(detail => detail.color_hex))];
        console.log('Color Hex Codes:', colorCodes);
      } catch (error) {
        setError(error.message);
      }
    };

    if (productId) {
      fetchProduct();
      fetchSideImages();
      fetchProductDetails();
    }
  }, [productId]);

  const handleSizeChange = async (size) => {
    if (selectedSize === size) {
      setSelectedSize(null);
      setAvailableColors([...new Set(productDetails.map(detail => detail.color))]);
    } else {
      setSelectedSize(size);
      setIsSizeValid(true);
      try {
        const response = await fetch(`/api/available-colors/${productId}/${size}`);
        if (!response.ok) {
          throw new Error('Failed to fetch available colors');
        }
        const data = await response.json();
        setAvailableColors(data);
        if (selectedColor && !data.includes(selectedColor)) {
          setSelectedColor(null);
        }
      } catch (error) {
        setError(error.message);
      }
    }
  };

  const handleColorChange = async (color, colorCode) => {
    if (selectedColor === color) {
      setSelectedColor(null);
      setSelectedColorCode(null);
      setAvailableSizes([...new Set(productDetails.map(detail => detail.size))]);
    } else {
      setSelectedColor(color);
      setSelectedColorCode(colorCode);
      setIsColorValid(true);
      try {
        const response = await fetch(`/api/available-sizes/${productId}/${color}`);
        if (!response.ok) {
          throw new Error('Failed to fetch available sizes');
        }
        const data = await response.json();
        setAvailableSizes(data);
        if (selectedSize && !data.includes(selectedSize)) {
          setSelectedSize(null);
        }
      } catch (error) {
        setError(error.message);
      }
    }
  };

  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      setQuantity(quantity + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const showNotification = (message) => {
    setNotification({ visible: true, message });
    setTimeout(() => {
      setNotification({ visible: false, message: '' });
    }, 2000);
  };

  const handleAddToCart = async () => {
    if (!selectedSize) {
      setIsSizeValid(false);
      showNotification('Please select a size');
      return;
    }

    if (!selectedColor) {
      setIsColorValid(false);
      showNotification('Please select a color');
      return;
    }

    if (quantity <= 0) {
      showNotification('Quantity must be greater than zero');
      return;
    }

    const isValidUser = await validateUser();
    if (!isValidUser) {
      window.location.href = '/user'; // Redirect to login page
      return;
    }

    try {
      const response = await axios.post('/api/add-to-cart', {
        product_id: productId,
        color: selectedColor,
        color_code: selectedColorCode, // Use selectedColorCode for the hex value
        size: selectedSize,
        quantity: quantity
      });

      if (response.status === 200) {
        alert('Item added to cart successfully');
      }
    } catch (error) {
      alert('Failed to add item to cart');
    }
  };

  const handleBuyNow = async () => {
    if (!selectedSize) {
      setIsSizeValid(false);
      showNotification('Please select a size');
      return;
    }

    if (!selectedColor) {
      setIsColorValid(false);
      showNotification('Please select a color');
      return;
    }

    if (quantity <= 0) {
      showNotification('Quantity must be greater than zero');
      return;
    }

    const isValidUser = await validateUser();
    if (!isValidUser) {
      window.location.href = '/user'; // Redirect to login page
      return;
    }

    setIsOrderPopupOpen(true);
  };

  const handleConfirmOrder = async (userAddress, userPhoneNumber) => {
    try {
      const response = await axios.post('/xuorder', {
        product_id: productId,
        color: selectedColor,
        size: selectedSize,
        quantity: quantity,
        address: userAddress,
        phone_number: userPhoneNumber
      });

      if (response.status === 200) {
        alert('Order placed successfully');
      } else {
        throw new Error('Failed to place order');
      }
    } catch (error) {
      alert('Failed to place order');
    } finally {
      setIsOrderPopupOpen(false);
    }
  };

  const toggleStyleTips = () => {
    setIsStyleTipsOpen(!isStyleTipsOpen);
  };

  const toggleShippingReturns = () => {
    setIsShippingReturnsOpen(!isShippingReturnsOpen);
  };

  const toggleFaqs = () => {
    setIsFaqsOpen(!isFaqsOpen);
  };

  if (loading || !product) {
    return <div style={{ backgroundColor: 'white', width: '100%', height: '100%' }}></div>;
  }

  const descriptionSentences = product.description.split('.').filter(sentence => sentence.trim().length > 0);

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

          <div className="pro-name">
            <div className="product-heads">{product.product_name}</div>
          </div>

          <div className="pro-price">
            <p className="price">${product.price}</p>
          </div>

          <div className={`pro-size ${!isSizeValid ? 'highlight' : ''}`}>
            <div className="size-section">
              <div className="product-heads">Size:</div>
              {availableSizes.map((size) => (
                <div
                  key={size}
                  className={`size-box ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => handleSizeChange(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          <div className={`pro-color ${!isColorValid ? 'highlight' : ''}`}>
            <div className="color-section">
              <div className="product-heads">Color:</div>
              {availableColors.map((color) => (
                <div
                  key={color}
                  className={`color-box ${selectedColor === color ? 'selected' : ''}`}
                  style={{ 
                    backgroundColor: color, 
                    border: selectedColor === color ? '1px solid #000' : '1px solid #ccc', 
                    borderRadius: '100px',
                    width: '25px',
                    height: '25px' 
                  }}
                  title={color}
                  onClick={() => handleColorChange(color, productDetails.find(detail => detail.color === color).color_hex)} // Use the correct hex code
                ></div>
              ))}
            </div>
          </div>

          <div className="pro-quantity">
            <div className="quantity-section">
              <div className="product-heads">Quantity:</div>
              <button onClick={() => handleQuantityChange('decrement')}>-</button>
              <input type="text" value={quantity} readOnly />
              <button onClick={() => handleQuantityChange('increment')}>+</button>
            </div>
          </div>

          <div className="action-buttons">
            <button className="buy-now" onClick={handleBuyNow}>BUY NOW</button>
            <button className="add-to-cart" onClick={handleAddToCart}>ADD TO CART</button>
          </div>
          
          <div className="product-details">
            <p><strong>Product Details</strong></p>
            <ul>
              {descriptionSentences.map((sentence, index) => (
                <li key={index}>{sentence.trim()}.</li>
              ))}
            </ul>
          </div>

          <div className={`style-tips ${isStyleTipsOpen ? 'open' : ''}`}>
            <p className="section-header" onClick={toggleStyleTips}>
              <strong>Style & Tips</strong> <img className="dropdown-icon" src={isStyleTipsOpen ? "https://i.postimg.cc/PrjnF92m/dropdown-arrow-svgrepo-com-1.png" : "https://i.postimg.cc/0201gnBh/dropdown-arrow-svgrepo-com.png"} alt="Dropdown" />
            </p>
            {isStyleTipsOpen && (
              <ul>
                <li>Wear it with confidence and pair it with matching accessories for a complete look. Follow the latest trends and mix and match for a unique style statement. Choose the right size and color to complement your body shape and skin tone.</li>
              </ul>
            )}
          </div>

          <div className={`shipping-returns ${isShippingReturnsOpen ? 'open' : ''}`}>
            <p className="section-header" onClick={toggleShippingReturns}>
              <strong>Shipping & Returns</strong> <img className="dropdown-icon" src={isShippingReturnsOpen ? "https://i.postimg.cc/PrjnF92m/dropdown-arrow-svgrepo-com-1.png" : "https://i.postimg.cc/0201gnBh/dropdown-arrow-svgrepo-com.png"} alt="Dropdown" />
            </p>
            {isShippingReturnsOpen && (
              <ul>
                <li>Enjoy fast shipping and hassle-free returns. Kindly be advised that due to the nature of this product, we regret to inform you that it is non-returnable.</li>
                <li><a href="https://women-bird.com/shipping-returns">Read More about Returns</a></li>
              </ul>
            )}
          </div>

          <div className={`faqs ${isFaqsOpen ? 'open' : ''}`}>
            <p className="section-header" onClick={toggleFaqs}>
              <strong>FAQs</strong> <img className="dropdown-icon" src={isFaqsOpen ? "https://i.postimg.cc/PrjnF92m/dropdown-arrow-svgrepo-com-1.png" : "https://i.postimg.cc/0201gnBh/dropdown-arrow-svgrepo-com.png"} alt="Dropdown" />
            </p>
            {isFaqsOpen && (
              <ul>
                <li><strong>What if I want to exchange or return my order?</strong></li>
                <li>Kindly be advised that due to the nature of this product, we regret to inform you that it is non-returnable.</li>
                <li><strong>Will I Receive a Quality Product by Women Bird?</strong></li>
                <li>As an international brand, we adhere to strict quality and design benchmarks. Every Women Birds product goes through a 5 step Quality Control process to ensure that you receive the highest quality product.</li>
                <li><a href="https://women-bird.com/faqs">Read More FAQ's</a></li>
              </ul>
            )}
          </div>
        </div>
      </div>
      {notification.visible && (
        <div className="notification">
          <p>{notification.message}</p>
        </div>
      )}
      {isOrderPopupOpen && (
        <OrderPopup
          product={product}
          mainImage={mainImage}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
          quantity={quantity}
          onConfirm={handleConfirmOrder}
          onClose={() => setIsOrderPopupOpen(false)}
        />
      )}
    </div>
  );
};

export default Product;