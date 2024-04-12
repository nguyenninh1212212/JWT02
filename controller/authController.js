const bcrypt=require('bcrypt')
const User =require('../mongo/model/md')
const autherController={
    registerUser:async (req,res)=>{
         try{
            const salt=await bcrypt.genSalt(10)
            const hashed=await bcrypt.hash(req.body.pass,salt)

            //create new user
            const newUser =await new User ({
                user:req.body.user,
                pass:hashed, 
            })  
            //save DB
            const SaveUser=await newUser.save();
            res.status(200).json(SaveUser); 
         }
         catch(err){
            res.status(500).json(err)
         }
    },
    GetRegister:async(req,res)=>{
       try{
        const GetUser=await User.find({})
        res.json(GetUser)
       }
       catch(err){
        console.log(err);
       }
    }
}

module.exports=autherController