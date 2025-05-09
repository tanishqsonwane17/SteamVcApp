// client/src/pages/JoinRoom.jsx
import React, { useState, useEffect } from 'react';
import { fetchToken } from '../services/api';
import VideoCall from '../components/Call/VideoCall';

const JoinRoom = () => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({ id: 'user123', name: 'Ayush' });

  useEffect(() => {
    const fetchAndSetToken = async () => {
      try {
        const userToken = await fetchToken(user.id, user.name);
        setToken(userToken);
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    fetchAndSetToken();
  }, [user]);

  return (
    <div>
      <h2>Join Room</h2>
      {token ? (
        <VideoCall apiKey="your_stream_api_key" token={token} user={user} />
      ) : (
        <p>Loading token...</p>
      )}
    </div>
  );
};

export default JoinRoom;
