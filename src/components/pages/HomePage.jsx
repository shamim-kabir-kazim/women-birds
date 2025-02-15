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
  const images = [
    'https://i.postimg.cc/7Z2Kvkpc/f31c69fa52c67fef74e0646531818323.jpg',
    'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    'https://img.freepik.com/free-photo/daisy-flower-against-gradient-background_23-2149244157.jpg?ga=GA1.1.1117887803.1736434841&semt=ais_incoming',
    'https://img.freepik.com/free-photo/flower-with-white-center-red-center-is-against-white-background_1340-35946.jpg?t=st=1737139512~exp=1737143112~hmac=7fd4f84e57006ac560794098a3899638087f13ecb82967b6831f443157733541&w=740',
    'https://i.postimg.cc/SRYMXy7b/6226738299368750209-zoom.jpg',
  ];
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
