// server/utils/stream.js
import dotenv from 'dotenv';
dotenv.config();

import { StreamChat } from 'stream-chat';

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  throw new Error("Stream API Key or Secret is missing in environment variables.");
}

const serverClient = StreamChat.getInstance(apiKey, apiSecret);

export const createUserAndToken = async (userId, name) => {
  try {
    const token = serverClient.createToken(userId);

    await serverClient.upsertUser({
      id: userId,
      name: name,
    });

    return { token };
  } catch (error) {
    console.error("Error in createUserAndToken:", error);
    throw error;
  }
};
