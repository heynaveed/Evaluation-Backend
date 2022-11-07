const express =require("express");
const cors=require("cors");
const { Connection } = require("./Config/db");
const { LogIn } = require("./Routes/Loginroute");
const { SignUp } = require("./Routes/Signuproute");
const { MyTodos } = require("./Routes/Todoroute");
require("dotenv").config();
const app=express();
app.use(cors());
app.use(express.json());

const PORT=process.env.PORT || 8500

//CHECKING WORKING
app.get ("/",(req,res)=>{
    res.send("Working Properly");
})

// SIGNUP END POINT
app.use("/signup",SignUp)

// LOGIN END POINT
app.use("/login",LogIn);


// ALL TODOS END POINTS
app.use("/todo",MyTodos);






app.listen(PORT,async()=>{
    try{
     await Connection
        console.log("Connection Made to DB successfull");
    }
    catch(err){
      console.log("Error Connecting in db");
       console.log(err)
    }
       console.log(`Listening Port ${PORT}`)
 })


