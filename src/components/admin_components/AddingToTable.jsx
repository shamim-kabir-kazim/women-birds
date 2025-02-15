import React, { useState, useEffect } from 'react';
import './AddingToTable.css';

const AddingToTable = ({ productId, onAdd }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
        setMessageType('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleAddToTable = async (table) => {
    setLoading(true);
    setMessage(null);
    setMessageType('');

    try {
      const response = await fetch(`/api/add-to-${table}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_id: productId }),
      });

      if (!response.ok) {
        throw new Error(`Failed to add product to ${table}`);
      }

      const data = await response.json();
      setMessage(`Product added to ${table} successfully`);
      setMessageType('success');
      onAdd(`Product added to ${table} successfully`);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
      setMessageType('error');
      onAdd(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="adding-to-table">
    {loading && <div className="loading-popup">Loading...</div>}
    {message && <div className={`message-popup ${messageType}`}>{message}</div>}
    
    <button className="btn-add-pp" onClick={() => handleAddToTable('dresses')}>
      Add to Dresses
      <img src="https://i.postimg.cc/s1dbXWvd/add-circle-svgrepo-com.png" alt="Add" className="btn-icon" />
    </button>
    
    <button className="btn-add-pp" onClick={() => handleAddToTable('sale')}>
      Add to Sale
      <img src="https://i.postimg.cc/s1dbXWvd/add-circle-svgrepo-com.png" alt="Add" className="btn-icon" />
    </button>
  
    <button className="btn-add-pp" onClick={() => handleAddToTable('jewellery')}>
      Add to Jewellery
      <img src="https://i.postimg.cc/s1dbXWvd/add-circle-svgrepo-com.png" alt="Add" className="btn-icon" />
    </button>
  
    <button className="btn-add-pp" onClick={() => handleAddToTable('best-deals')}>
      Add to Best Deals
      <img src="https://i.postimg.cc/s1dbXWvd/add-circle-svgrepo-com.png" alt="Add" className="btn-icon" />
    </button>
  
    <button className="btn-add-pp" onClick={() => handleAddToTable('lehenga')}>
      Add to Lehenga
      <img src="https://i.postimg.cc/s1dbXWvd/add-circle-svgrepo-com.png" alt="Add" className="btn-icon" />
    </button>
  
    <button className="btn-add-pp" onClick={() => handleAddToTable('new-collection')}>
      Add to New Collection
      <img src="https://i.postimg.cc/s1dbXWvd/add-circle-svgrepo-com.png" alt="Add" className="btn-icon" />
    </button>
  
    <button className="btn-add-pp" onClick={() => handleAddToTable('new-this-week')}>
      Add to New This Week
      <img src="https://i.postimg.cc/s1dbXWvd/add-circle-svgrepo-com.png" alt="Add" className="btn-icon" />
    </button>
  </div>
  
  
  );
};

export default AddingToTable;