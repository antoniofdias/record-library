import mongoose from "mongoose";

const RecordSchema = new mongoose.Schema({
  artist: String,
  title: String,
  price: Number,
  cover: String,
  description: String,
  quantity: Number
});

export default mongoose.model('Record', RecordSchema);