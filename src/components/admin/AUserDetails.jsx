import React from "react";
import "./AUserDetails.css";

const AUserDetails = () => {

  const orders = [
    {
      
        id: "3213131",
        firstname: "Akkas",
        lastname: "Mia",
        phone: "01234567890",
        email: "akkasmia@gmial.com",
        address: "Hajaribag,nilambor sha road dhaka-1205,bangladesh",
      },
      {
      
        id: "3213131",
        firstname: "Akkas",
        lastname: "Mia",
        phone: "01234567890",
        email: "akkasmia@gmial.com",
        address: "Hajaribag,nilambor sha road dhaka-1205,bangladesh",
      },

      {
      
        id: "3213131",
        firstname: "Akkas",
        lastname: "Mia",
        phone: "01234567890",
        email: "akkasmia@gmial.com",
        address: "Hajaribag,nilambor sha road dhaka-1205,bangladesh",
      },


     
  ];

 

  return (
 
        <div className="D-table-container-wrapper">
          <div className="D-table-scroll">
            <table className="D-product-order-table">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>First Name</th>
                  <th>First Name</th>
                  <th>Phone</th>
                  <th>E-mail</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index} className={index % 2 === 0 ? "D-row-even" : "D-row-odd"}>
                    <td>{order.id}</td>
                    <td>{order.firstname}</td>
                    <td>{order.lastname}</td>
                    <td>{order.phone}</td>
                    <td>{order.email}</td>
                    <td>{order.address}</td>
                    <td className="D-action-buttons">
                      <button className="D-btn-update">Update</button>
                      <button className="D-btn-delete">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      
      
   
  );
};

export default AUserDetails;