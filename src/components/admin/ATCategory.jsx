import React from "react";
import "./ATCategory.css";

const ATCategory = () => {

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
      
        id: "2",
        image:"https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg",

      },
      
  ];

 

  return (
 
        <div className="C-table-container-wrapper">
          <div className="C-table-scroll">
            <table className="C-product-order-table">
              <thead>
                <tr>
                  <th>Product ID</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index} className={index % 2 === 0 ? "C-row-even" : "C-row-odd"}>
                    <td>{order.id}</td>
                    <td>
                      <img
                        src={order.image}
                        alt={order.image}
                        className="C-product-thumbnail"
                      />
                    </td>

                    <td className="C-action-buttons">
                      <button className="C-btn-update">Update</button>
                      <button className="C-btn-delete">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      
      
   
  );
};

export default ATCategory ;