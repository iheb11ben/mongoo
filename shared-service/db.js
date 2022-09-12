const mongoose= require('mongoose');

const DB = process.env.APP_DB;
const connectDB = async (url) => {
    return mongoose.connect(url)
    .then(()=> console.log('Connected'))
    .catch((error)=>console.log(error))
    };

module.exports = connectDB;
