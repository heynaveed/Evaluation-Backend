const {Router}= require("express");
const { PostSignUp } = require("../Controller/Signup.controller");

const SignUp= Router();
SignUp.post("/",PostSignUp);
module.exports={SignUp};