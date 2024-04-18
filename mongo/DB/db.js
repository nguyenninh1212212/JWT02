const mongoose=require('mongoose')
const dotenv =require('dotenv')
dotenv.config()
async function connect(){
    await mongoose.connect((process.env.MONGODB_URL))
     .then(() => {
        console.log('connect success');
    })
    .catch((error) => {
        console.error('fail to connect', error);
    });
}

module.exports={connect}