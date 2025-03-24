import React, { useEffect, useState } from 'react';
import './ViewInventory.css';
import { FaTrash, FaEdit } from 'react-icons/fa';
import PopUpdate from './PopUpdate';

const ViewInventory = () => {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const fetchInventory = async () => {
    const token = localStorage.getItem('jwtToken');
    try {
      const response = await fetch('/api/view-products', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch inventory');
      }
      const data = await response.json();
      setInventory(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  const handleEditClick = (productId) => {
    setSelectedProductId(productId);
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    setSelectedProductId(null);
  };

  const handleUpdate = () => {
    fetchInventory();
  };

  const handleDeleteClick = async (productId) => {
    const token = localStorage.getItem('jwtToken');
    try {
      const response = await fetch(`/api/delete-product/${productId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to delete product');
      }
      fetchInventory();
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="ml-xo-view-inventory">
      <table className="ml-xo-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>SKU</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Slug</th>
            <th>Type</th>
            <th>Image</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map(item => (
            <tr key={item.product_id}>
              <td>{item.product_id}</td>
              <td>{item.sku}</td>
              <td>{item.product_name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.brand}</td>
              <td>{item.slug}</td>
              <td>{item.type}</td>
              <td>
                <img
                  src={item.primary_img_url}
                  alt={item.product_name}
                  className="ml-xo-image"
                />
              </td>
              <td>{new Date(item.created_at).toLocaleString()}</td>
              <td>{new Date(item.updated_at).toLocaleString()}</td>
              <td>
                <FaEdit
                  style={{ color: 'green', cursor: 'pointer', marginRight: '10px' }}
                  onClick={() => handleEditClick(item.product_id)}
                />
                <FaTrash
                  style={{ color: 'red', cursor: 'pointer' }}
                  onClick={() => handleDeleteClick(item.product_id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isPopupOpen && (
        <PopUpdate
          productId={selectedProductId}
          onClose={handlePopupClose}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default ViewInventory;
