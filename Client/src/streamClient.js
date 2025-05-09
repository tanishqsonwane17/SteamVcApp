// server/utils/stream.js
import { StreamVideoServerClient } from '@stream-io/video-node-sdk'; // If SDK is available
// OR use stream-chat if not using @stream-io/video-node-sdk
import { StreamChat } from 'stream-chat';

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET;

const serverClient = StreamChat.getInstance(apiKey, apiSecret);

export const generateToken = (userId) => {
  return serverClient.createToken(userId);
};
