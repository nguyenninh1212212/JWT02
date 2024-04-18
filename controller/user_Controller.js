const User=require('../mongo/model/md')
const bcrypt=require('bcrypt')


const UserController={
    GetRegister:async(req,res)=>{
        try{
         const GetUser=await User.find({})
         res.json(GetUser)
        }
        catch(err){
         console.log(err);
        }
     },
     DeleteRegister: async(req,res)=>{
         try{
            const user=await User.findById(req.params.id)
         if(!user){
            res.status(404).json("Wrong username to delete")
         }
         await user.save()
         res.status(200).json("Delete successfully")
         }
         catch(err){
            res.status(500).json(err)
         }

     },
     UpdateRegister: async(req,res)=>{
      try{
         const user =await User.findById(req.params.id)
         if(!user){
            res.status(404).json("Wrong username to update")
         }
         const salt=await bcrypt.genSalt(10)
         const hashed=await bcrypt.hash(req.body.pass,salt)

         await user.updateOne({$set:{pass:hashed}})
         await user.save()
         res.status(200).json("update successfully")
         }
         catch(err){
            res.status(500).json(err)
         }
     }
}

module.exports=UserController