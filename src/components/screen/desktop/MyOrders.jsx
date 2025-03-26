import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyOrders.css';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [expandedOrder, setExpandedOrder] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/get-orders', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
          }
        });

        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const handleCancelOrder = async (order_id) => {
    try {
      const token = localStorage.getItem('jwtToken');
      if (!token) {
        console.log('No token found');
        return;
      }

      const response = await axios.delete('/api/xudeleteorder', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        data: { order_id }
      });

      if (response.data.valid) {
        console.log('Order cancelled successfully');
        setOrders(orders.filter(order => order.order_id !== order_id));
      } else {
        console.log('Failed to cancel order:', response.data.message);
      }
    } catch (error) {
      console.error('Error cancelling order:', error);
    }
  };

  const toggleExpandOrder = (order_id) => {
    setExpandedOrder(expandedOrder === order_id ? null : order_id);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const calculateEstDelivery = (orderDate) => {
    const date = new Date(orderDate);
    date.setDate(date.getDate() + 3); // Add exactly 3 days
    return formatDate(date);
  };

  return (
    <div className="my-orders">
      <h1 className="order-form-title">My Orders</h1>
      {orders.map((order) => (
        <div className="order-card" key={order.order_id}>
          <img src={order.primary_img_url} alt={order.productName} className="order-image" />
          <div className="order-details">
            <h2>{order.productName}</h2>
            <div className="order-info">
              <p><strong>Order number:</strong> {order.order_id}</p>
              <p><strong>Order date:</strong> {formatDate(order.created_at)}</p>
              <p><strong>Total:</strong> ${order.total_amount}</p>
              <p>
                <strong>Status:</strong>{' '}
                <span className={`status-${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </p>
              {expandedOrder === order.order_id && (
                <>
                  <p><strong>Size:</strong> {order.size || 'N/A'}</p>
                  <p><strong>Color:</strong> {order.color || 'N/A'}</p>
                  <p><strong>Quantity:</strong> {order.quantity || 1}</p>
                  <p>
                    <strong>Est. Delivery:</strong> {calculateEstDelivery(order.created_at)}{' '}
                    <span className="delivery-note">(max under 7 days)</span>
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="order-actions">
            <button
              className="view-order"
              onClick={() => toggleExpandOrder(order.order_id)}
            >
              {expandedOrder === order.order_id ? 'Hide' : 'View Order'}
            </button>
            {order.status === 'pending' && (
              <button
                className="cancel-order"
                onClick={() => handleCancelOrder(order.order_id)}
              >
                Cancel Order
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;