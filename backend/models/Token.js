import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const tokenSchema = new Schema({
  name: { type: String, required: true },
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  image: { type: String },
  meta: { type: Object }
});

export default mongoose.model('Token', tokenSchema);
