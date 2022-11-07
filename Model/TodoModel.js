const mongoose=require("mongoose");

const TodoSchema=mongoose.Schema({
    taskname:{type:String,required:true},
    status:{type:String,required:true},
    tag:{type:String,required:true},
    user_id:{type:String,required:true}

})
const TodoModel=mongoose.model("usertodo",TodoSchema);

module.exports={TodoModel};