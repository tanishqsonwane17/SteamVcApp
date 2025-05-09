// client/src/services/api.js
import axios from 'axios';

// Base Axios instance for API requests
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Make sure to change this to your server URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example API call for token
export const fetchToken = async (userId, name) => {
  try {
    const response = await api.post('/stream/token', { userId, name });
    return response.data.token;
  } catch (error) {
    console.error('Error fetching token:', error);
    throw error;
  }
};

export default api;
