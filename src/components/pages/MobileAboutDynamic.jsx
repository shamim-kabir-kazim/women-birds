import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AboutUs from '../screen/desktop/AboutUs';
import ContactUs from '../screen/desktop/ContactUs';
import FAQ from '../screen/desktop/FAQ';
import DeliveryOption from '../screen/desktop/DeliveryOption';
import PaymentOption from '../screen/desktop/PaymentOption';
import PrivacyPolicy from '../screen/desktop/PrivacyPolicy';
import ReturnsRefundPolicy from '../screen/desktop/ReturnsRefundPolicy';
import TermsAndConditions from '../screen/desktop/TermsAndConditions';
import Information from '../screen/desktop/information'; // Import the main Information component
import './MobileAboutDynamic.css';
import Sepa from '../screen/desktop/Sepa';

function MobileAboutDynamicPage() {
  const { section } = useParams();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 750);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderSection = () => {
    switch (section) {
      case 'about':
        return <AboutUs />;
      case 'contact':
        return <ContactUs />;
      case 'faq':
        return <FAQ />;
      case 'delivery-option':
        return <DeliveryOption />;
      case 'payment-option':
        return <PaymentOption />;
      case 'privacy-policy':
        return <PrivacyPolicy />;
      case 'returns-refund-policy':
        return <ReturnsRefundPolicy />;
      case 'terms-and-conditions':
        return <TermsAndConditions />;
      default:
        return <AboutUs />; // Default component if no match
    }
  };

  return (
    <div className="info-midll">
      <Sepa />
      {isMobile ? renderSection() : <Information />}
    </div>
  );
}

export default MobileAboutDynamicPage;
