const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  content: String,
  completed: {
    id: Number,
    type: Boolean,
    default: false,
  },
});

module.exports = Todo = mongoose.model("todo", todoSchema);
