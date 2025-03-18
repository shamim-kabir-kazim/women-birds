import React, { useState } from 'react';
import './LoginPage.css';
import Login from '../screen/desktop/Login';
import Create from '../screen/desktop/Create';
import Sepa from '../screen/desktop/Sepa';

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleShowCreate = () => {
    setShowLogin(false);
  };

  return (
    <div className="login-midll">
      <Sepa />
      {showLogin ? (
        <Login onShowCreate={handleShowCreate} />
      ) : (
        <Create />
      )}
    </div>
  );
};

export default LoginPage;