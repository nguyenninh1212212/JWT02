const Router=require('express').Router()
const middlewareController = require('../controller/middlewareController')
const UserController=require('../controller/userController')

Router.get("/",middlewareController.verifyToken,UserController.GetRegister)
Router.delete("/:id",middlewareController.verifyTokenAndAdminAuth,UserController.DeleteRegister)
Router.put("/update/:id",middlewareController.verifyTokenAndAdminAuth,UserController.UpdateRegister)


module.exports= Router