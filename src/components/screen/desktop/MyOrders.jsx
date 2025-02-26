import React from "react";
import "./MyOrders.css";

const MyOrders = () => {
  const orders = [
    {
      id: 1,
      image: "https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg", // Replace with actual image URL
      productName: "This is product name",
      productDetails: "This is demo details for a product. And it is nice and attractive.",
      orderNumber: "12345",
      orderDate: "2025-01-20",
      total: "$100",
      status: "Shipped",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg", // Replace with actual image URL
      productName: "This is product name",
      productDetails: "This is demo details for a product. And it is nice and attractive.",
      orderNumber: "67890",
      orderDate: "2025-01-18",
      total: "$150",
      status: "Processing",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg", // Replace with actual image URL
      productName: "This is product name",
      productDetails: "This is demo details for a product. And it is nice and attractive.",
      orderNumber: "67890",
      orderDate: "2025-01-18",
      total: "$150",
      status: "Processing",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg", // Replace with actual image URL
      productName: "This is product name",
      productDetails: "This is demo details for a product. And it is nice and attractive.",
      orderNumber: "67890",
      orderDate: "2025-01-18",
      total: "$150",
      status: "Processing",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg", // Replace with actual image URL
      productName: "This is product name",
      productDetails: "This is demo details for a product. And it is nice and attractive.",
      orderNumber: "67890",
      orderDate: "2025-01-18",
      total: "$150",
      status: "Processing",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg", // Replace with actual image URL
      productName: "This is product name",
      productDetails: "This is demo details for a product. And it is nice and attractive.",
      orderNumber: "67890",
      orderDate: "2025-01-18",
      total: "$150",
      status: "Processing",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg", // Replace with actual image URL
      productName: "This is product name",
      productDetails: "This is demo details for a product. And it is nice and attractive.",
      orderNumber: "67890",
      orderDate: "2025-01-18",
      total: "$150",
      status: "Processing",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg", // Replace with actual image URL
      productName: "This is product name",
      productDetails: "This is demo details for a product. And it is nice and attractive.",
      orderNumber: "67890",
      orderDate: "2025-01-18",
      total: "$150",
      status: "Processing",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg", // Replace with actual image URL
      productName: "This is product name",
      productDetails: "This is demo details for a product. And it is nice and attractive.",
      orderNumber: "67890",
      orderDate: "2025-01-18",
      total: "$150",
      status: "Processing",
    },
  ];

  return (
    <div className="my-orders">
      <h1 className="order-form-title">My Orders</h1>
      {orders.map((order) => (
        <div className="order-card" key={order.id}>
          <img src={order.image} alt={order.productName} className="order-image" />
          <div className="order-details">
            <h2>{order.productName}</h2>
            <p>{order.productDetails}</p>
            <div className="order-info">
              <p><strong>Order number:</strong> {order.orderNumber}</p>
              <p><strong>Order date:</strong> {order.orderDate}</p>
              <p><strong>Total:</strong> {order.total}</p>
              <p><strong>Status:</strong> {order.status}</p>
            </div>
          </div>
          <div className="order-actions">
            <button className="view-order">View Order</button>
            <button className="cancel-order">Cancel Order</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
