import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import './DynamicTable.css';

const DynamicTable = ({ category }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token'); // Assuming the JWT is stored in localStorage
      const categoryResponse = await fetch(`/api/categories/${category.toLowerCase().replace(/ /g, '-')}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!categoryResponse.ok) {
        throw new Error(`Failed to fetch ${category} data. Status: ${categoryResponse.status} ${categoryResponse.statusText}`);
      }
      const categoryData = await categoryResponse.json();

      // Fetch main inventory data for each product
      const inventoryDataPromises = categoryData.map(async (item) => {
        const inventoryResponse = await fetch(`/api/view-product/${item.product_id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!inventoryResponse.ok) {
          throw new Error(`Failed to fetch inventory data for product ID ${item.product_id}. Status: ${inventoryResponse.status} ${inventoryResponse.statusText}`);
        }
        const inventoryData = await inventoryResponse.json();
        return {
          ...item,
          product_name: inventoryData.product_name,
          product_image: inventoryData.primary_img_url,
        };
      });

      const combinedData = await Promise.all(inventoryDataPromises);
      setData(combinedData);
    } catch (error) {
      console.error(`Error fetching ${category} data:`, error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token'); // Assuming the JWT is stored in localStorage
      const response = await fetch(`/api/categories/${category.toLowerCase().replace(/ /g, '-')}/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        throw new Error(`Failed to delete ${category} record. Status: ${response.status} ${response.statusText}`);
      }
      fetchData(); // Refresh the data after deletion
    } catch (error) {
      console.error(`Error deleting ${category} record:`, error);
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
    <div className="dynamic-table">
      <h2>{category}</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Image</th>
            {Object.keys(data[0] || {}).map((key) => (
              key !== 'product_name' && key !== 'product_image' && <th key={key}>{key}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.product_name}</td>
              <td><img src={item.product_image}  alt={item.product_name} className="product-image" />
              </td>
              {Object.entries(item).map(([key, value]) => (
                key !== 'product_name' && key !== 'product_image' && <td key={key}>{value}</td>
              ))}
              <td>
                <FaTrash className="delete-icon" onClick={() => handleDelete(item.product_id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;