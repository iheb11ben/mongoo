const express=require('express')
require('dotenv').config() 
const cors=require('cors')

const connectDB = require('./shared-service/db')
const app=express()
app.use(express.json());
const postRoute =require('./routes/postRoute')
const port = process.env.PORT || 4000;
app.use(cors())




app.use('/api/v1/post',postRoute)



const start= async()=>{
    try {
       await connectDB(process.env.MONGO_URI)
       app.listen(port,()=>{
        console.log(`Server start on port :${port}`)
    })
    
    } catch (error) {
        console.log(error);
    }
} 
start()