import React, { useState } from 'react';
import './LoginPage.css';
import Login from '../screen/desktop/Login';
import Create from '../screen/desktop/Create';
import Sepa from '../screen/desktop/Sepa';


const LoginPage = () => {
  
  return (
    <div className="login-midll">
      <Sepa  />
      <Login />
      <Create />
    </div>
  );
};

export default LoginPage;
