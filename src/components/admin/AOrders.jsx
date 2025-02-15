import React from "react";
import "./AOrders.css";

const AOrders = () => {

  const orders = [
    {
      
        uid: "321231321",
        phone:"0123456789",
        address:"hajaribag , tenarimor dhaka-1205 , bangladesh",
        id: "#785232135",
        image:"https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg",
        size:"s",
        color: "Red",
        price: "$376.00",
      },
      
  ];

 

  return (
    
    <div className="O-table-container">
        
      <div className="O-table-wrapper">
        <table className="O-order-table">
          <thead>
            <tr>
            <th>User ID</th>
              <th>phone</th>
              <th>Address</th>
            <th>Product ID</th>
            <th>Image</th> 
            <th>Size</th>
            <th>Color</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className={index % 2 === 0 ? "O-even-row" : "O-odd-row"}>
                <td>{order.uid}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
                <td>{order.id}</td>
                <td><img src={order.image} alt={order.image} className="O-product-image" />
              </td>
                <td>{order.size}</td>
                <td>{order.color}</td>
                <td>{order.price}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
        
      </div>
   
  );
};

export default AOrders;