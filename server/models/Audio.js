import mongoose from 'mongoose';

const AudioSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  transcription: { type: String },
  uploadedAt: { type: Date, default: Date.now },
});

const Audio = mongoose.model('Audio', AudioSchema);

export default Audio;
