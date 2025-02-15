import React, { useEffect } from 'react';

const TestServerConnection = () => {
  useEffect(() => {
    fetch('/api/test')
      .then(response => response.text())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h2>Testing Server Connection</h2>
      <p>Check the console for the response from the server.</p>
    </div>
  );
};

export default TestServerConnection;