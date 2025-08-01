// models/Counter.js

const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
  _id: {
    type: String,        // Name of the sequence (e.g., 'ticketId')
    required: true
  },
  sequence_value: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Counter', counterSchema);
