const mongoose = require('mongoose');

const yourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

// Create and export the model
module.exports = mongoose.model('YourModel', yourSchema);
