import React from "react";
import "./ATNew.css";

const ATNew = () => {

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
      {
      
        id: "5",
        image:"https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg",


      },
      
  ];

 

  return (
 
        <div className="N-table-container-wrapper">
          <div className="N-table-scroll">
            <table className="N-product-order-table">
              <thead>
                <tr>
                  <th>Product ID</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index} className={index % 2 === 0 ? "N-row-even" : "N-row-odd"}>
                    <td>{order.id}</td>
                    <td>
                      <img
                        src={order.image}
                        alt={order.image}
                        className="N-product-thumbnail"
                      />
                    </td>
                    <td className="N-action-buttons">
                      <button className="N-btn-update">Update</button>
                      <button className="N-btn-delete">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      
      
   
  );
};

export default ATNew;