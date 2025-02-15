import React from 'react';
import ItemLD from './ItemLD'; // Updated import for the renamed component
import './ItemList.css'; // This stays the same unless you renamed it

const ItemList = () => {
  const items = [
    {
      id: 1,
      name: 'Product 1',
      price: '$999',
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$799',
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$599',
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      price: '$499',
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    },
    {
      id: 5,
      name: 'Product 4',
      price: '$499',
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    },
    {
      id: 6,
      name: 'Product 4',
      price: '$499',
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    },
    {
      id: 7,
      name: 'Product 4',
      price: '$499',
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    },
    {
      id: 8,
      name: 'Product 4',
      price: '$499',
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    },
    {
      id: 9,
      name: 'Product 4',
      price: '$499',
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    },
    {
      id: 10,
      name: 'Product 4',
      price: '$499',
      image:
        'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
    },
  ];

  return (
    <div className="ItemList">
      {items.map((item) => (
        <div key={`${item.id}-${item.name}`} className="GridItem">
          <ItemLD name={item.name} price={item.price} image={item.image} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
