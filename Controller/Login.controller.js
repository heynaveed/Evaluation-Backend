const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../Model/Usermodel');

const Login= async(req,res)=>{
    const {email,password}=req.body;
    const user = await UserModel.findOne({email})
    if(user){
        const HashedPass=user.password;
        bcrypt.compare(password, HashedPass, function(err, result) {
            if(err)
            {
                res.send("Something Went Worng Please Try Again Later");
            }
            else
            {
                    if(result){
                    const token = jwt.sign({ user_id:user._id }, process.env.SECRET);
                    res.send({"msg":"Login Successfull", "token": token});
                    }
                    else{
                        res.send("Wrong Email or Password")
                    }
                    }});
               } 
}

module.exports={Login};