import React from "react";
import "./ADashboard.css";

const ADashboard = () => {

  const orders = [
    {
      
      id: "#785232135",
      image:"https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg",
      product: "Smart watch",
      size:"s,m,l,xl",
      color:"red, green, blue",
      price: "$376.00",
      status: "Available ",
    },
  ];

 

  return (
    
    <div className="table-container">
        
      <div className="table-wrapper">
        <table className="order-table">
          <thead>
            <tr>
            <th>Product ID</th>
            <th>Image</th> 
            <th>Product Name</th>
            <th>Sizes</th>
            <th>Colors</th>
              <th>Price</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                <td>{order.id}</td>
                <td><img src={order.image} alt={order.image} className="product-image" />
              </td>
                <td>{order.product}</td>
                <td>{order.size}</td>
                <td>{order.color}</td>
                <td>{order.price}</td>
                <td className={`status ${order.status.toLowerCase()}`}>{order.status}</td>
                <td className="actions">
                  <button className="update-button">Update</button>
                  <button className="delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
        
      </div>
   
  );
};

export default ADashboard;