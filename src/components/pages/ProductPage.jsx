import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../screen/desktop/Product';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/viewProduct/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  return (
    <div className="home-div" style={{ width: '100%', height: '100%' }}>
      {product ? <Product product={product} /> : <p>Loading...</p>}
    </div>
  );
};

export default ProductPage;