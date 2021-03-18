var express = require("express");
var router = require("express").Router();
const { board } = require("../models");



router.get("/", async (req, res, next) => {
  const boardData = await board.findAll();
  res.json(boardData);
});

router.post("/todo", async (req, res, next) => {
  const todoItem = await req.body;
  board
    .create({
      todo: todoItem.todo,
      isDone: todoItem.isDone,
    })
    .then(res.send("success"))
    .catch((err) => console.log(err));
});

router.post("/edit", async (req, res, next) => {
  const todoItem = await req.body;
  board
    .update(
      {
        todo: todoItem.todo,
      },
      { where: { todoID: todoItem.id } }
    )
    .then(res.send(200))
    .catch((err) => console.log(err));
});

router.delete("/delete", async (req, res, next) => {
  let todoID = await req.body;
  board
    .destroy({
      where: { todoID: todoID.id },
    })
    .then(res.send(200))
    .catch((err) => console.log(err));
});
module.exports = router;
