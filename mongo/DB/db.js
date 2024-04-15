const mongoose=require('mongoose')
const dotenv =require('dotenv')
dotenv.config()
async function connect(){
    await mongoose.connect((process.env.MONGODB_URL),{useNewUrlParser:true,useUnifiedTopology:true})
     .then(() => {
        console.log('Kết nối thành công đến cơ sở dữ liệu');
    })
    .catch((error) => {
        console.error('Lỗi kết nối đến cơ sở dữ liệu:', error);
    });
}

module.exports={connect}