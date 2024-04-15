const express=require('express')
const dotenv=require('dotenv')
const jwt=require('jsonwebtoken')
const app=express()
const port=2000

const cors=require('cors')
const cookieParser = require('cookie-parser');

const authRouter=require('./routes/auth')
const userRouter=require('./routes/user')
dotenv.config()

app.use(cookieParser());

app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    res.json({status:"success"})
})
app.use("/v1/auth",authRouter)
app.use("/v1/user",userRouter)
//________________________________________________________
const DB=require('./mongo/DB/db')
DB.connect()   
//________________________________________________________
app.listen(port,()=>{
    console.log(`App listening at http://localhost:${port}`);
})