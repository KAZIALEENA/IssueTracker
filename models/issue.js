const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  }
});

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;
