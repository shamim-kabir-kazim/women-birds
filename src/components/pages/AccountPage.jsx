import React, { useState, useEffect } from 'react';
import AccountInfo from '../screen/desktop/AccountInfo';
import MobileAccount from '../screen/desktop/MobileAccount';
import Sepa from '../screen/desktop/Sepa';

const AccountPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 750) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    // Initial check on component mount
    handleResize();
    // Set up event listener for resizing the window
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="account-div">
      <Sepa />
      {isMobile ? <MobileAccount /> : <AccountInfo />}
    </div>
  );
};

export default AccountPage;
