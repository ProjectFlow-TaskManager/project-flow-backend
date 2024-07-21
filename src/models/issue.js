const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  status: {
    type: String,
    enum: ['open', 'closed'],
    default: 'open',
  },
  progress: {
    type: String,
    enum: ['todo', 'doing', 'done'],
    default: 'todo',
  },
});
