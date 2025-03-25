import axios from 'axios';

export const validateUser = async () => {
  try {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      throw new Error('No token provided');
    }

    const response = await axios.get('/api/validate', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.status === 200 && response.data.status === 'ok') {
      return true;
    } else {
      throw new Error('User validation failed');
    }
  } catch (error) {
    console.error('User validation error:', error.message);
    return false;
  }
};