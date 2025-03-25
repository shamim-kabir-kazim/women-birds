import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { validateUser } from '../utils/uservalidation';

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
    return <div>Loading...</div>; // Optionally, you can show a spinner or loading message
  }

  return isAuthenticated ? <Component /> : <Navigate to="/user" />;
};

export default ProtectedRoute;