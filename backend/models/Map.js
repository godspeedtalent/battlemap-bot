import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const mapSchema = new Schema({
  name: { type: String, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  tokens: [{ type: Schema.Types.ObjectId, ref: 'Token' }]
});

export default mongoose.model('Map', mapSchema);
