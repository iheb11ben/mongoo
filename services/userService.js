const User=require('../models/user')

addUser=(data)=>{
   return User.create(data)
}
getUser=()=>{
    return User.find()
 }
 /* getPostBYAttribute=(data)=>{
return Post.findOne(data)
 } */
getBYIDUser=(id)=>{
    return User.findById({_id:id})
 }
 updateUser=(data,id)=>{
    return User.findByIdAndUpdate(data,{_id:id},{new:true,runValidators:true})
 }
 deleteUser=(id)=>{
    return User.findByIdAndDelete({_id:id})
 }
 module.exports={addUser,getUser,getBYIDUser,updateUser,deleteUser}