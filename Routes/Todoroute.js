const { Router } = require("express");
const { TodoPost,TodoGet,TodoPatch, TodoDelete } = require("../Controller/Todos.controller");
const { Authentication } = require("../Middleware/Authentication");


const MyTodos=Router();

MyTodos.post("/",Authentication,TodoPost);

MyTodos.get("/",Authentication,TodoGet)

MyTodos.patch("/:todoid",Authentication,TodoPatch)

MyTodos.delete("/:todoid",Authentication,TodoDelete);

module.exports={MyTodos};