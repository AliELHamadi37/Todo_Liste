import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

export default mongoose.model('Todo', todoSchema);
