import React, { useState, useEffect } from 'react';
import './PopUpdate.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProductDetailsComp from './ProductDetailsComp';
import AddingToTable from './AddingToTable';

const PopUpdate = ({ productId, onClose, onUpdate }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [formData, setFormData] = useState({
    sku: '',
    product_name: '',
    description: '',
    price: '',
    sale_percentage: '',
    sold_out: 'No',
    brand: '',
    slug: '',
    primary_img_url: '',
  });
  const [productDetails, setProductDetails] = useState([]);
  const [extraImages, setExtraImages] = useState([]);
  const [newImageFile, setNewImageFile] = useState(null);
  const [newImagePreview, setNewImagePreview] = useState(null);
  const [extraImagePreviews, setExtraImagePreviews] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const token = localStorage.getItem('jwtToken');
      try {
        const response = await fetch(`/api/view-product/${productId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
        setFormData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchProductDetails = async () => {
      const token = localStorage.getItem('jwtToken');
      try {
        const response = await fetch(`/api/view-product-details/${productId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProductDetails(data);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchExtraImages = async () => {
      const token = localStorage.getItem('jwtToken');
      try {
        const response = await fetch(`/api/view-extra-images/${productId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch extra images');
        }
        const data = await response.json();
        setExtraImages(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProduct();
    fetchProductDetails();
    fetchExtraImages();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewImageFile(file);
    setNewImagePreview(URL.createObjectURL(file));
  };

  const handleExtraImagesChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 6) {
      setError('You can only upload up to 6 images at a time.');
      return;
    }
    setExtraImages(files);
    setExtraImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const handleImageUpload = async () => {
    if (!newImageFile) {
      setError('No image selected');
      return;
    }

    const formData = new FormData();
    formData.append('image', newImageFile);
    formData.append('productId', productId);
    formData.append('productName', product.product_name);
    formData.append('sku', product.sku);

    const token = localStorage.getItem('jwtToken');

    try {
      const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const data = await response.json();
      setFormData((prevFormData) => ({
        ...prevFormData,
        primary_img_url: data.url,
      }));
      setNewImageFile(null);
      setNewImagePreview(null);
      setSuccessMessage('Image uploaded successfully. Remember to save changes by clicking "Update Product".');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleExtraImagesUpload = async () => {
    if (extraImages.length === 0) {
      setError('No extra images selected');
      return;
    }

    const formData = new FormData();
    extraImages.forEach((image, index) => {
      formData.append('images', image);
    });
    formData.append('productId', productId);
    formData.append('productName', product.product_name);
    formData.append('sku', product.sku);

    const token = localStorage.getItem('jwtToken');

    try {
      const response = await fetch('/api/upload-extra-images', {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to upload extra images');
      }

      const data = await response.json();
      setExtraImages([]);
      setExtraImagePreviews([]);
      setSuccessMessage('Extra images uploaded successfully');
      onUpdate();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteExtraImage = async (imageId) => {
    const token = localStorage.getItem('jwtToken');
    try {
      const response = await fetch(`/api/delete-extra-image/${imageId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete extra image');
      }

      setExtraImages(extraImages.filter((image) => image.image_id !== imageId));
      setSuccessMessage('Extra image deleted successfully');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('jwtToken');
    try {
      const response = await fetch(`/api/update-product/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to update product: ${errorText}`);
      }
      onUpdate();
      onClose();
    } catch (error) {
      console.error('Error updating product:', error);
      setError(error.message);
    }
  };

  const handleClose = () => {
    onClose();
    onUpdate();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="pop-update-overlay">
      <div className="pop-update-container">
        <div className="header">
          <div className="heddo-div1"></div>
          <div className="heddo-div2"><h2>{formData.product_name}</h2></div>
          <div className="heddo-div3"> <button className="close-button" onClick={handleClose}>
            &times;
          </button> </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="heddo-images">
            <div className="image-section">
              <img src={newImagePreview || `http://localhost:3000${formData.primary_img_url}`} alt="Product" width="300" height="400" />
              <input
                type="file"
                className="image-selector"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
                id="change-image-input"
              />
              <button
                className="heddo-button-cimg"
                type="button"
                onClick={() => document.getElementById('change-image-input').click()}
              >
                Change Image
              </button>
              <button
                className="heddo-button-iimg"
                type="button"
                onClick={handleImageUpload}
              >
                Upload Image
              </button>
            </div>
            <div className="image-urls">
              <label>
                Primary Image URL:
                <input
                  type="text"
                  name="primary_img_url"
                  value={formData.primary_img_url}
                  onChange={handleChange}
                  readOnly
                />
              </label>
              <div className="add-extra-images">
                <p className="title">Add Extra Images</p>
                <div className="image-box">
                  {extraImagePreviews.map((preview, index) => (
                    <img key={index} src={preview} alt={`Extra ${index}`} width="100" height="100" />
                  ))}
                </div>
                <input
                  type="file"
                  className="image-selector"
                  accept="image/*"
                  multiple
                  onChange={handleExtraImagesChange}
                />
                <button type="button" className="add-image-btn" onClick={handleExtraImagesUpload}>Add Extra Images</button>
              </div>
            </div>
            <div className="all-extra-images">
              <table>
                <thead>
                  <tr>
                    <th>Image ID</th>
                    <th>Image URL</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {extraImages.map((image) => (
                    <tr key={image.image_id}>
                      <td>{image.image_id}</td>
                      <td>
                        <img src={`http://localhost:3000${image.image_url}`} alt="Extra" width="100" height="100" />
                        {`http://localhost:3000${image.image_url}`}
                      </td>
                      <td>
                        <button
                          className="delete-button"
                          onClick={() => handleDeleteExtraImage(image.image_id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {successMessage && <div className="success-message">{successMessage}</div>}
          {error && <div className="error-message">{error}</div>}

          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>

          <div className="heddo-price">
            <div className="price-section">
              <label>
                Price:
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </label>
              <label>
                Sale Percentage:
                <input
                  type="number"
                  name="sale_percentage"
                  value={formData.sale_percentage}
                  onChange={handleChange}
                />
              </label>
              <label>
                Brand:
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>

          <div className="checkbox-section">
            <div className="chiki-boxo">
              <label>
                Sold Out:
                <input
                  type="checkbox"
                  name="sold_out"
                  checked={formData.sold_out === 'Yes'}
                  onChange={(e) => setFormData({ ...formData, sold_out: e.target.checked ? 'Yes' : 'No' })}
                />
              </label>
            </div>
          </div>

          <div className="heddo-uproduct">
            <button className="up-button" type="submit">Update Product</button>
          </div>
        </form>

        <ProductDetailsComp productId={productId} productDetails={Array.isArray(productDetails) ? productDetails : []} onUpdate={setProductDetails} />

        <div className="add-to-tables">
          <h3>Add to Other Tables</h3>
          <AddingToTable productId={productId} onAdd={setSuccessMessage} />
        </div>
      </div>
    </div>
  );
};

export default PopUpdate;