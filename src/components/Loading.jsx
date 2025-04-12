import React from 'react';

// A simple white space loading component
const Loading = () => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p style={{ color: '#999', fontSize: '16px' }}>Loading...</p>
    </div>
  );
};

export default Loading;