const bcrypt = require('bcrypt');
const { UserModel } = require('../Model/Usermodel');

const PostSignUp=async(req,res)=>{
    const {name,email,password}=req.body
    const isUser= await UserModel.findOne({email});
    if(isUser){
       res.send("User is Already Signuped, try logging in")
    }
    else{
       bcrypt.hash(password, 4, async function(err, hash){
             if(err){
               res.send("Something Went Worng Please Try Again Later")
             }
             const userdata=new UserModel({
               name:name,
               email:email,
              password: hash
           })
           await userdata.save();
           const data= await UserModel.findOne({email})
           console.log(data)
           res.send("Signup Sucessfull")
       }  )
    }
}
module.exports={PostSignUp};