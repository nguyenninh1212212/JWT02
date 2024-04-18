const Router=require('express').Router()
const middlewareController = require('../controller/middleware_Controller')
const UserController=require('../controller/user_Controller')

Router.get("/",middlewareController.verifyToken,UserController.GetRegister)
Router.delete("/:id",middlewareController.verifyTokenAndAdminAuth,UserController.DeleteRegister)
Router.put("/update/:id",middlewareController.verifyTokenAndAdminAuth,UserController.UpdateRegister)


module.exports= Router