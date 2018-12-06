
const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  coords: {
    type: Object,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model('Note', noteSchema);
