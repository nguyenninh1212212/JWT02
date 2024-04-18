const autherController = require('../controller/auth_Controller')

const Router=require('express').Router()


    Router.post("/register",autherController.registerUser)
    Router.post("/login",autherController.LoginUser)

module.exports= Router