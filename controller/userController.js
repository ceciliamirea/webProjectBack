const User=require("../models/users");

const createUser=async (req, res)=>{
    try{
        const body=req.body;
        const user=await User.create(body);
        console.log(body.userName);
        res.status(201).json(user); 
    }
    catch(err){
        res.status(400).json(err);
    }
}

const loginUser=async(req, res)=>{
    try{
        const body=req.body;
        const user=await User.findOne({userName:body.userName, userPassword:body.userPassword});
        const pass=await User.findOne({userPassword:body.userPassword});
        const uname=await User.findOne({userName:body.userName});
        if(user){
            res.status(200).json(user);
        }
        else if(!pass && uname || pass && !uname){
            res.status(401).json(pass);
        }
        else{
            res.status(404).json({msg:"User not found"});
            
        }
    }
    catch(err){
        res.status(400).json(err);

    }
}

module.exports={createUser, loginUser}
