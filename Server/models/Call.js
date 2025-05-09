import mongoose from 'mongoose';

const callSchema = new mongoose.Schema({
  roomId: String,
  participants: [String],
  startedAt: Date,
  endedAt: Date
});

export default mongoose.model('Call', callSchema);