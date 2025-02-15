import React from 'react';

const anotherFunction = () => {
  console.log('Another function was called!');
};
const Headermb = () => {
  return (
    <div
      className="main"
      style={{
        display: 'flex',
        justifyContent: 'center', // Centers the content horizontally
        alignItems: 'center', // Optionally centers the content vertically (if needed)
        width: '100%',
        
      }}
    >
      <div
        className="image-left-container"
        style={{
          width: '50%', // 50% of the parent container's width
          color: '#FF0000', // Keep the color as is
          paddingTop: '0%', // 2% of the parent container's height
          paddingBottom: '0%', // 2% of the parent container's height
          paddingLeft: '2%', // 10% of the parent container's width
          justifyContent: 'flex-start', // Align items to the start of the container
          alignItems: 'center', // Center items vertically
          display: 'flex', // Use flexbox for layout
          backgroundColor:'red',
        }}
      >
        <img
          style={{
            width: '40%', // 50% of the parent container's width
            height: 'auto', // Automatically adjust height to maintain aspect ratio
          }}
          src="https://i.postimg.cc/4ySzB7hg/image-2.png"
          alt="Responsive Image"
        />
      </div>
      <div className="header__right">
        {/* Menu Section */}
        <div className="header__menu">
          <a href="#home">Home</a>
          <a href="#dress">Dress</a>
          <a href="#jewelry">Jewelry</a>
          <a href="#about-us">About Us</a>
        </div>

        <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#e0e0e0',
            overflow: 'hidden',
          }}
        >
          <img
            src="https://via.placeholder.com/40"
            alt="Icon 1"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#e0e0e0',
            overflow: 'hidden',
          }}
        >
          <img
            src="https://via.placeholder.com/40"
            alt="Icon 2"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#e0e0e0',
            overflow: 'hidden',
          }}
        >
          <img
            src="https://via.placeholder.com/40"
            alt="Icon 3"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#e0e0e0',
            overflow: 'hidden',
          }}
        >
          <img
            src="https://via.placeholder.com/40"
            alt="Icon 4"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Headermb;
