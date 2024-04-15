const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
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
    
    //Login
    LoginUser: async (req, res) => {
      try {
          const user = await User.findOne({ user: req.body.user });
          if (!user) {
              return res.status(404).json("Wrong username");
          }
          const validPassword = await bcrypt.compare(req.body.pass, user.pass);
          if (!validPassword) {
              return res.status(404).json("Wrong password!");
          }
          const accessToken = jwt.sign({
              id: user._id,
              admin: user.admin
          }, process.env.JWT_ACCESS_KEY, { expiresIn: "30s" });
   
          const refreshToken = jwt.sign({
              id: user._id,
              admin: user.admin
          }, process.env.JWT_REFRESH_KEY, { expiresIn: "30d" });
   
          const { pass, ...other } = user._doc;
          return res.status(200).json({ ...other, accessToken, refreshToken });
      } catch (err) {
          console.error("Login Error:", err); // Log the error
          return res.status(500).json("Internal Server Error");
      }
   }
   
}

module.exports=autherController