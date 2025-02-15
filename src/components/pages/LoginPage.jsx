import React, { useState } from 'react';
import './LoginPage.css';
import Login from '../screen/desktop/Login';
import Create from '../screen/desktop/Create';


const LoginPage = () => {
  
  return (
    <div className="login-midll">
      <Login />
      <Create />
    </div>
  );
};

export default LoginPage;
