import React from "react";
import "./ATPremium.css";

const ATPremium = () => {

  const orders = [
    {
      
        id: "1",
        image:"https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg",

      },
      {
      
        id: "2",
        image:"https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg",

      },
      {
      
        id: "3",
        image:"https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg",

      },
      {
      
        id: "4",
        image:"https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg",

      },
     
  ];

 

  return (
 
        <div className="P-table-container-wrapper">
          <div className="P-table-scroll">
            <table className="P-product-order-table">
              <thead>
                <tr>
                  <th>Product ID</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index} className={index % 2 === 0 ? "P-row-even" : "P-row-odd"}>
                    <td>{order.id}</td>
                    <td>
                      <img
                        src={order.image}
                        alt={order.image}
                        className="P-product-thumbnail"
                      />
                    </td>

                    <td className="P-action-buttons">
                      <button className="P-btn-update">Update</button>
                      <button className="P-btn-delete">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      
      
   
  );
};

export default ATPremium;