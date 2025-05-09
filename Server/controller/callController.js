import Call from '../models/Call.js';

export const createCallRoom = async (req, res) => {
  const { roomId, userId } = req.body;
  try {
    const newCall = await Call.create({ roomId, participants: [userId], startedAt: new Date() });
    res.status(201).json(newCall);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const joinCallRoom = async (req, res) => {
  const { roomId, userId } = req.body;
  try {
    const call = await Call.findOneAndUpdate(
      { roomId },
      { $addToSet: { participants: userId } },
      { new: true }
    );
    res.json(call);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
