const express=require('express')
const dotenv=require('dotenv')
const jwt=require('jsonwebtoken')
const app=express()
const port=2000
const Connect=require('./mongo/DB/db')
const cors=require('cors')
const cookieParser = require('cookie-parser');

const authRouter=require('./routes/auth')
dotenv.config()

app.use(cookieParser());

app.use(cors())
app.use(express.json())
Connect.Connect()   

app.get("/",(req,res)=>{
    res.json({status:"success"})
})
app.use("/v1/auth",authRouter)

app.listen(port,()=>{
    console.log(`App listening at http://localhost:${port}`);
})