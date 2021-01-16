const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./DB/connection");
const dotenv = require("dotenv");
const Todo = require("./API/todo");

dotenv.config();

const app = express();
const port = process.env.APP_PORT;

connectDB();

app.use(express.json({ extended: false }));

app.use("/api/addTodo", Todo);
app.use("/api/getTodos", Todo);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
