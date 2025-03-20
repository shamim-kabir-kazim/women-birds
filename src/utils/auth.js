export const refreshToken = async () => {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      return null;
    }
  
    try {
      const response = await fetch('http://localhost:3000/api/refresh-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  
      const data = await response.json();
      if (data.token) {
        localStorage.setItem('jwtToken', data.token);
        return data.token;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Failed to refresh token:', error);
      return null;
    }
  };