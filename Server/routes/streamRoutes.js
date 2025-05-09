// server/routes/streamRoutes.js
import express from 'express';
import { createUserAndToken } from '../utils/stream.js';

const router = express.Router();

router.post('/token', async (req, res) => {
  const { userId, name } = req.body;
  try {
    const { token } = await createUserAndToken(userId, name);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Token generation failed' });
  }
});

export default router;
