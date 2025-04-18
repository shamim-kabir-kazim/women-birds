import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountInfo from '../screen/desktop/AccountInfo';
import MobileAccount from '../screen/desktop/MobileAccount';
import Sepa from '../screen/desktop/Sepa';

// White space loading component
const Loading = () => {
  return <div style={{ backgroundColor: 'white', height: '100vh', width: '100%' }} />;
};

const AccountPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const navigate = useNavigate();

  const handleResize = () => {
    if (window.innerWidth <= 750) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const checkUserValidity = async () => {
    console.log('checkUserValidity called');
    
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      console.log('No token found in localStorage');
      navigate('/user');
      return;
    }

    console.log('Token found:', token);

    try {
      const response = await fetch('http://localhost:3000/api/validate-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      console.log('Validation response:', data);

      if (!data.valid) {
        console.log('User is not valid');
        navigate('/user');
      } else {
        console.log('User is valid');
        setIsLoading(false); // Stop loading when validation is complete
      }
    } catch (error) {
      console.error('User validation failed:', error);
      navigate('/user');
    }
  };

  useEffect(() => {
    // Initial user validity check on component mount
    checkUserValidity();
    // Initial window size check on component mount
    handleResize();
    // Set up event listener for resizing the window
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Render the Loading component if still validating the user
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="account-midll">
      <div className="account-div">
        <Sepa />
        {isMobile ? <MobileAccount /> : <AccountInfo />}
      </div>
    </div>
  );
};

export default AccountPage;