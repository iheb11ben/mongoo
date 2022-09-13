const Post=require('../models/post')

addPost=(data)=>{
   return Post.create(data)
}
getPost=()=>{
    return Post.find()
 }
 /* getPostBYAttribute=(data)=>{
return Post.findOne(data)
 } */
getBYIDPost=(id)=>{
    return Post.findById({_id:id})
 }
 updatePost=(data,id)=>{
    return Post.findByIdAndUpdate({_id:id},data,{new:true,runValidators:true})
 }
 deletePost=(id)=>{
    return Post.findByIdAndDelete({_id:id})
 }
 module.exports={addPost,getPost,getBYIDPost,updatePost,deletePost}
