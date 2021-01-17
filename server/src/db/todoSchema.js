/* eslint-disable no-undef */
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  id: String,
  content: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

// eslint-disable-next-line no-multi-assign
module.exports = Todo = mongoose.model('todo', todoSchema);
