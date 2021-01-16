const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./DB/connection");
const dotenv = require("dotenv");
const Todo = require("./API/todo");

dotenv.config();
connectDB();

const app = express();
const port = process.env.APP_PORT;

app.use(express.json({ extended: false }));

app.use("/api/addTodo", Todo);
app.use("/api/getTodos", Todo);

app.get("/", (req, res) => {
  res.status(301).redirect("http://localhost:3000");
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
