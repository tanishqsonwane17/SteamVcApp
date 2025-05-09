import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // email: { type: String, required: true }, ❌ remove if not used
});


export default mongoose.model("User", userSchema);
