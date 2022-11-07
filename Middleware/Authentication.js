const jwt = require('jsonwebtoken');
require('dotenv').config();
const Authentication =(req,res,next)=>{
const token=req.headers?.authorization?.split(" ")[1];
    var decoded = jwt.verify(token,process.env.SECRET);
    const user_id=decoded.user_id;
   if(decoded){
      req.body.user_id=user_id;
      next();
   }
else{
    res.send("Plese login again")
}
}
module.exports={
    Authentication
}