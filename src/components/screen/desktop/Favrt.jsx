import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import './Favrt.css';

const Fvrt = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
          console.log('No token found');
          return;
        }

        const response = await fetch('http://localhost:3000/api/favorites', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        const data = await response.json();

        if (data.favorites.length === 0) {
          console.log('No favorites added');
        } else {
          setFavorites(data.favorites);
        }
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className="fvrt-container">
      <ItemList items={favorites} />
      {children}
    </div>
  );
};

export default Fvrt;