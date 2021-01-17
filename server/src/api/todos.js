/* eslint-disable consistent-return */
const express = require('express');
const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');

const Todo = require('../db/todoSchema');

const router = express.Router();

const desiredCacheTime = 30 * 1000; // 30 secs.

const limiter = rateLimit({
  windowMs: desiredCacheTime, // 30 secs.
  max: 100, // limit each IP to 100 requests per windowMs
});

const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000, // 30 secs.
  delayAfter: 50, // allow 50 requests per desired time limit, then...
  delayMs: 500, // begin adding 500ms of delay per request above 100:
});

// In memory cache. This could be changed with Redis or Memcached or some other cache layer
let cachedData;
let cacheTime;

router.get('/', limiter, speedLimiter, async (req, res, next) => {
  if (cacheTime && cacheTime > Date.now() - desiredCacheTime) {
    return res.json(cachedData);
  }

  try {
    await Todo.find().then((todo) => {
      cacheTime = Date.now();
      todo.cacheTime = cacheTime;
      cachedData = todo;
      return res.json(todo);
    });
  } catch (err) {
    return next(err);
  }
});

router.post('/', limiter, speedLimiter, async (req, res) => {
  const { id, content, completed } = req.body;
  const todo = {
    id,
    content,
    completed,
  };

  const todoModal = new Todo(todo);
  await todoModal.save();

  if (cachedData) {
    cachedData.push(todoModal);
  }
  res.json(todoModal);
});

module.exports = router;
