import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Product from '../screen/desktop/Product';
import ItemList from '../screen/desktop/ItemList';
import './ProductPage.css';
import Sepa from '../screen/desktop/Sepa';
import TextHed from '../screen/desktop/TextHed';

const ProductPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [productId, setProductId] = useState(null);
  const [productType, setProductType] = useState(null);
  const [relatedItems, setRelatedItems] = useState([]);

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

  useEffect(() => {
    const fetchProductType = async () => {
      try {
        const response = await fetch(`/api/view-product/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        console.log(`Fetched product type: ${data.type}`); // Log the product type
        setProductType(data.type);
      } catch (error) {
        console.error('Error fetching product type:', error);
      }
    };

    if (productId) {
      fetchProductType();
    }
  }, [productId]);

  useEffect(() => {
    const fetchRelatedItems = async () => {
      try {
        const response = await fetch(`/api/viewrelatedproduct?type=${productType}&exclude=${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch related products');
        }
        const data = await response.json();
        console.log(`Fetched related products: ${JSON.stringify(data)}`); // Log the related products
        setRelatedItems(data.map(item => ({
          product_id: item.product_id,
          product_name: item.product_name,
          price: item.price,
          image: encodeURI(item.primary_img_url),
        })));
      } catch (error) {
        console.error('Error fetching related products:', error);
      }
    };

    if (productType) {
      fetchRelatedItems();
    }
  }, [productType, productId]);

  const handleItemClick = (id) => {
    window.location.href = `/Details?id=${id}`;
  };

  if (!productId) {
    return null;
  }

  return (
    <div className="home-div" style={{ width: '100%', height: '100%' }}>
      <Sepa />
      <Product productId={productId} />

      <TextHed text={"Related Products"} />
      
      <ItemList items={relatedItems} onItemClick={handleItemClick} />
    </div>
  );
};

export default ProductPage;
