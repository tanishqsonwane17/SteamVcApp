// client/src/services/stream.js
import { StreamVideoClient } from '@stream-io/video-react-sdk';

// Function to create and return a Stream Video Client
export const createStreamClient = (apiKey, user, token) => {
  const client = new StreamVideoClient({ apiKey, user, token });
  return client;
};
