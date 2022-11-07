const e = require("express");
const { TodoModel } = require("../Model/TodoModel");

const TodoPost=async(req,res)=>{
    const {taskname,status,tag,user_id}=req.body;
    const AddTodo=new TodoModel({
        taskname:taskname,
        status:status,
        tag:tag,
        user_id:user_id
    })
    await AddTodo.save();
    console.log(AddTodo);
    res.send("Todos Added Successfully")
}

const TodoGet=async(req,res)=>{
    const {user_id}=req.body;
    const Alltodo=await TodoModel.find({user_id:user_id});
    console.log(Alltodo);
    res.send(Alltodo);
}

const TodoPatch =async(req,res)=>{
const payload=req.params.todoid;
const {user_id}=req.body;
const Status=req.body.status;
await TodoModel.updateOne({_id:payload,user_id:user_id},{$set:{status:Status}});
res.send("Updated Successfull");
}

const TodoDelete=async(req,res)=>{
    const payload=req.params.todoid;
    const {user_id}=req.body;
    await TodoModel.deleteMany({_id:payload,user_id:user_id});
    res.send("Deleted successfully");
}



module.exports={TodoPost,TodoGet,TodoPatch,TodoDelete};