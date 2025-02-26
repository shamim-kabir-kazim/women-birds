import React from 'react';
import './Category.css';
import Sepa from './Sepa';
import TextHed from './TextHed';
import { Link } from "react-router-dom";

const Category = () => {
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

            paddingLeft: '122',
            paddingRight: '122',
            paddingTop: '5',
            paddingBottom: '5',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2',
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
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = 'scale(1.1)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = 'scale(1)')
                }
              >
                <div data-layer="Frame 15" className="Frame15" />
                
                 <img
                  data-layer="Frame 14"
                  className="Frame14"
                  src="https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg"
                  alt="Lehenga"
                /> 
             
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
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = 'scale(1.1)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = 'scale(1)')
                }
              >
                <div data-layer="Frame 15" className="Frame15" />
                <img
                  data-layer="Frame 14"
                  className="Frame14"
                  src="https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg"
                  alt="Dresses"
                />
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
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = 'scale(1.1)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = 'scale(1)')
                }
              >
                <div data-layer="Frame 15" className="Frame15" />
                <img
                  data-layer="Frame 14"
                  className="Frame14"
                  src="https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg"
                  alt="Jewellery"
                />
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
