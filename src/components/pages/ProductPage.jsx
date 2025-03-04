import React from 'react';
import { useLocation } from 'react-router-dom';
import Product from '../screen/desktop/Product';
import './ProductPage.css';

const ProductPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get('id');

  return (
    <div className="home-div" style={{ width: '100%', height: '100%' }}>
      <Product productId={productId} />
    </div>
  );
};

export default ProductPage;