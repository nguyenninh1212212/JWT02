const mongoose=require('mongoose')
const dotenv =require('dotenv')
dotenv.config()
async function Connect(){
    await mongoose.connect((process.env.MONGO_CONNECT),{useNewUrlParser:true,useUnifiedTopology:true})
     .then(() => {
        console.log('Kết nối thành công đến cơ sở dữ liệu');
    })
    .catch((error) => {
        console.error('Lỗi kết nối đến cơ sở dữ liệu:', error);
    });
}

module.exports={Connect}