
const mongoose = require('mongoose');
const uuid = require('uuid');
const noteSchema = new mongoose.Schema({
  id: {
    type: String,
    default: uuid.v4
  },
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
