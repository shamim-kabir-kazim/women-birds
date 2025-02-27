import React, { useState, useEffect } from 'react';
import './Category.css';
import Sepa from './Sepa';
import TextHed from './TextHed';
import { Link } from "react-router-dom";

const Category = () => {
  const [categoryImages, setCategoryImages] = useState({
    category1: '',
    category2: '',
    category3: ''
  });

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/ads_img/1'); // Fetching cat1, cat2, cat3 from id 1

        if (!response.ok) {
          throw new Error('Failed to fetch category images');
        }

        const data = await response.json();
        console.log('Fetched category images:', data); // Add console log to debug

        setCategoryImages({
          category1: `http://localhost:3000${data.cat1}`,
          category2: `http://localhost:3000${data.cat2}`,
          category3: `http://localhost:3000${data.cat3}`
        });
      } catch (error) {
        console.error('Error fetching category images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="midll">
      <div
        style={{
          width: '100%', // Makes the div take up the full width of its parent
          height: 'auto', // Allows the height to adjust based on content
          paddingTop: '1%', // Percentage padding for top
          paddingBottom: '1%', // Percentage padding for bottom
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '2%', // Percentage gap between elements
          display: 'inline-flex',
          maxWidth: '1900px',
        }}
      >
        <TextHed text={"Categories"} />

        <div
          style={{
            alignSelf: 'stretch',
            paddingLeft: '122px',
            paddingRight: '122px',
            paddingTop: '5px',
            paddingBottom: '5px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2%',
            display: 'inline-flex',
          }}
        >
          {/*for a single category start*/}
          <div data-layer="cat" className="Cat">
            <div data-layer="cat-2" className="Cat2">
              <div data-layer="cat-img-back" className="CatImgBack" />
              <div
                data-layer="cat-img"
                className="CatImg"
                style={{
                  backgroundImage: `url(${categoryImages.category1})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = 'scale(1.1)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = 'scale(1)')
                }
              >
                <div data-layer="Frame 15" className="Frame15" />
              </div>
            </div>
            <div data-layer="Lehenga" className="Lehenga">
              Lehenga
            </div>
          </div>
          {/*for a single category end*/}

          {/*for a single category start*/}
          <div data-layer="cat" className="Cat">
            <div data-layer="cat-2" className="Cat2">
              <div data-layer="cat-img-back" className="CatImgBack" />
              <div
                data-layer="cat-img"
                className="CatImg"
                style={{
                  backgroundImage: `url(${categoryImages.category2})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = 'scale(1.1)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = 'scale(1)')
                }
              >
                <div data-layer="Frame 15" className="Frame15" />
              </div>
            </div>
            <div data-layer="Dresses" className="Lehenga">
              Dresses
            </div>
          </div>
          {/*for a single category end*/}

          {/*for a single category start*/}
          <div data-layer="cat" className="Cat">
            <div data-layer="cat-2" className="Cat2">
              <div data-layer="cat-img-back" className="CatImgBack" />
              <div
                data-layer="cat-img"
                className="CatImg"
                style={{
                  backgroundImage: `url(${categoryImages.category3})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = 'scale(1.1)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = 'scale(1)')
                }
              >
                <div data-layer="Frame 15" className="Frame15" />
              </div>
            </div>
            <div data-layer="Jewellery" className="Lehenga">
              Jewellery
            </div>
          </div>
          {/*for a single category end*/}
        </div>
      </div>
    </div>
  );
};

export default Category;