import React from "react";
import "./AUserLogin.css";

const AUserLogin= () => {

  const orders = [
    {
      
        id: "2312313212",
        email:"akkasmia@gmail.com",
        pass: "akkas112233",

      },

   
  ];

 

  return (
 
        <div className="LO-table-container-wrapper">
          <div className="LO-table-scroll">
            <table className="LO-product-order-table">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>E-mail</th>
                  <th>Password</th>
    

                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index} className={index % 2 === 0 ? "LO-row-even" : "LO-row-odd"}>
                    <td>{order.id}</td>
                    <td>{order.email}</td>
                    <td>{order.pass}</td>


                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      
      
   
  );
};

export default AUserLogin;