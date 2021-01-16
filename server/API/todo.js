const express = require("express");
const mongoose = require("mongoose");
const Todo = require("../DB/todo");
const route = express.Router();

route.post("/", async (req, res) => {
  const { id, content, completed } = req.body;
  let todo = {
    id: id,
    content: content,
    completed: completed,
  };

  let todoModal = new Todo(todo);
  await todoModal.save();
  res.json(todoModal);
});

route.get("/", async (req, res) => {
  Todo.find().then((todo) => res.json(todo));
});

module.exports = route;
