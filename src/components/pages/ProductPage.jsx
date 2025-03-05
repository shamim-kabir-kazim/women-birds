import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Product from '../screen/desktop/Product';
import './ProductPage.css';

const ProductPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [productId, setProductId] = useState(null);

  useEffect(() => {
    const extractProductId = () => {
      const searchParams = new URLSearchParams(location.search);
      const id = searchParams.get('id');
      
      return id && !isNaN(Number(id)) ? id : null;
    };

    const extractedProductId = extractProductId();

    setProductId(extractedProductId);

    if (!extractedProductId) {
      navigate('/', { replace: true });
    }
  }, [location, navigate]);

  if (!productId) {
    return null;
  }

  return (
    <div className="home-div" style={{ width: '100%', height: '100%' }}>
      <Product productId={productId} />
    </div>
  );
};

export default ProductPage;