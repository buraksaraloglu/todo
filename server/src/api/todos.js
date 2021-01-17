const express = require('express');

const Todo = require('../db/todoSchema');

const router = express.Router();

router.post('/', async (req, res) => {
  const { id, content, completed } = req.body;
  const todo = {
    id,
    content,
    completed,
  };

  const todoModal = new Todo(todo);
  await todoModal.save();
  res.json(todoModal);
});

router.get('/', async (req, res) => {
  Todo.find().then((todo) => res.json(todo));
});

module.exports = router;
