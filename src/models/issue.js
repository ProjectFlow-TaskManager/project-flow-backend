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
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  status: {
    type: String,
    enum: ['open', 'closed'],
    default: 'open',
  },
  label: [String],
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
});

module.exports = mongoose.model('Issue', issueSchema);
