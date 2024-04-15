const mongoose=require('mongoose')
const Schema=mongoose.Schema


const User=new Schema({
    user :{type:String},
    pass :{type:String},
    admin:{type:Boolean,default:false}
},{
    timestamps:true
})

module.exports=mongoose.model('login01',User)