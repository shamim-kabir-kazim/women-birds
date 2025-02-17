import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VerifyJWT = () => {
  const [jwt, setJwt] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken'); // Retrieve the JWT from local storage

    if (!token) {
      setVerificationResult('No token found in storage');
      return;
    }

    setJwt(token); // Set the token in state to display it
    console.log('Retrieved JWT:', token);

    const verifyToken = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/verify-jwt', { token });
        setVerificationResult(response.data.message);
      } catch (error) {
        setVerificationResult('Invalid Token');
      }
    };

    verifyToken();
  }, []);

  return (
    <div>
      <h2>Verify JWT</h2>
      <p>{`JWT Token: ${jwt}`}</p> {/* Display the JWT token */}
      {verificationResult && <p>{verificationResult}</p>}
    </div>
  );
};

export default VerifyJWT;