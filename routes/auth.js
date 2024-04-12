const autherController = require('../controller/authController')
const Router=require('express').Router()

function routes (){
    Router.post("/register",autherController.registerUser)
    Router.get("/GetRegister",autherController.GetRegister)
}

module.exports= routes