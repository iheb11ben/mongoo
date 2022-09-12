const mongoose=require('mongoose');
const schemaPost=new mongoose.Schema(
    {
        postName: {
            type:String,
            required:true, 
            trim :true,
        },
        postContent:{
            type:String,
            required:true,
        },
    },
    {timestamps:true}
);
module.exports=mongoose.model('Post',schemaPost);
