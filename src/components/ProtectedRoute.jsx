import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { validateUser } from '../utils/uservalidation';

// White space loading component
const Loading = () => {
  return <div style={{ backgroundColor: 'white', height: '100vh', width: '100%' }} />;
};

const ProtectedRoute = ({ element: Component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      const isValid = await validateUser();
      setIsAuthenticated(isValid);
    };

    checkAuthentication();
  }, []);

  if (isAuthenticated === null) {
    // Show a white space while user validation is in progress
    return <Loading />;
  }

  return isAuthenticated ? <Component /> : <Navigate to="/user" />;
};

export default ProtectedRoute;