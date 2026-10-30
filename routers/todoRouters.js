const express = require("express");

const router = express.Router()

const todoController = require("../controllers/todoController.js")

router.get("/", todoController.sendTodos)
router.get("/:id", todoController.sendTodoById)
router.post("/", todoController.createTodo)
router.patch("/:id", todoController.updateTodo)
router.delete("/:id", todoController.deleteTodo)

module.exports = router