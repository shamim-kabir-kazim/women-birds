import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductList from '../screen/desktop/ProductList';
import Sepa from '../screen/desktop/Sepa';
import FilterBar from '../screen/desktop/FilterBar';
import './ProductListpage.css';

const ProductListpage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/products?category=${category}`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        const formattedData = data.map(item => ({
          id: item.product_id,
          name: item.product_name,
          price: item.price,
          image: item.primary_img_url
        }));
        setItems(formattedData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (category) {
      fetchProducts();
    } else {
      // Fetch all products or handle case when no category is selected
    }
  }, [category]);

  return (
    <div className="prolist-midll">
      <Sepa />
      <div className="styled-heading">
        {category ? category : 'All Categories'}
      </div>
      <ProductList items={items} />
      <FilterBar />
    </div>
  );
};

export default ProductListpage;