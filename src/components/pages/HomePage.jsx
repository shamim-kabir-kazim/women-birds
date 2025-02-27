import React from 'react';
import ImageScroller from '../screen/desktop/ImageScroller';
import Category from '../screen/desktop/Category';
import './HomePage.css';
import Sepa from '../screen/desktop/Sepa';
import Newweek from '../screen/desktop/Newweek';
import Premium from '../screen/desktop/Premium';
import Banner from '../screen/desktop/Banner';
import Best from '../screen/desktop/Best';
import MobileAccount from '../screen/desktop/MobileAccount';

const HomePage = () => {

  return (
    <div className="home-div" style={{ width: '100%', height: '100%' }}>
      <Category />
      <Sepa />
      <Newweek />
      <Sepa />
      <Premium />
      <Sepa />
      <Banner />
      <Sepa />
      <Best />
     
     
    </div>
  );
};

export default HomePage;
