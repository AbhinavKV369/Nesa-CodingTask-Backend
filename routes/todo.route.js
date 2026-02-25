import express from "express";
import { handleCreateTodo, handleDeleteTodo, handleGetTodos, handleUpdateTodos } from "../Controllers/todo.controller.js";

const router = express.Router();

router.post("/",handleCreateTodo);
router.get("/",handleGetTodos);
router.put("/:id",handleUpdateTodos);
router.delete("/:id",handleDeleteTodo);

export default router;
