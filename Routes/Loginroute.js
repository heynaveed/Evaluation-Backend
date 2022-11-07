const { Router } = require("express");
const { Login } = require("../Controller/Login.controller");

const LogIn = Router();
LogIn.post("/",Login);
module.exports={LogIn};