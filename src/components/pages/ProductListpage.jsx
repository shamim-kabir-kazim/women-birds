import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductList from '../screen/desktop/ProductList';
import Sepa from '../screen/desktop/Sepa';
import FilterBar from '../screen/desktop/FilterBar'; 
import './ProductListpage.css';


const ProductListpage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  useEffect(() => {
    if (category) {
      // Fetch or filter products based on the category
    }
  }, [category]);

  const items = [
    {
      name: 'Item 1',
      price: '$10',
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    },
    {
      name: 'Item 2',
      price: '$20',
      image:
        'https://fps.cdnpk.net/images/ai/image-generator/gallery/magnific-cat.webp',
    },
    {
      name: 'Item 3',
      price: '$30',
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    },
    {
      name: 'Item 4',
      price: '$40',
      image:
        'https://fps.cdnpk.net/images/ai/image-generator/gallery/magnific-cat.webp',
    },
    {
      name: 'Item 5',
      price: '$50',
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    },
    {
      name: 'Item 6',
      price: '$40',
      image:
        'https://fps.cdnpk.net/images/ai/image-generator/gallery/magnific-cat.webp',
    },
    {
      name: 'Item 7',
      price: '$50',
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    },
    {
      name: 'Item 8',
      price: '$40',
      image:
        'https://fps.cdnpk.net/images/ai/image-generator/gallery/magnific-cat.webp',
    },
    {
      name: 'Item 9',
      price: '$50',
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    },
    {
      name: 'Item 10',
      price: '$40',
      image:
        'https://fps.cdnpk.net/images/ai/image-generator/gallery/magnific-cat.webp',
    },
    {
      name: 'Item 11',
      price: '$50',
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    },
    {
      name: 'Item 12',
      price: '$40',
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    },
    {
      name: 'Item 13',
      price: '$50',
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    },
  ];

  return (
    <div className="prolist-midll"> 
      <Sepa />
        <div
             className="styled-heading"
            >
              {category ? category : 'All Categories'}
            </div>
     
     
      <ProductList />
      {/* You can add a component or content for the product list here */}
      <FilterBar />
    </div>
  );
};

export default ProductListpage;  // Ensure you export the correct component
