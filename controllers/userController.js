const {addUser,getUser,getBYIDUser,updateUser,deleteUser}=require('../services/userService')

const {StatusCodes}=require('http-status-codes')

const addUserController=async(req,res)=>{
    const User=await addUser({...req.body})
    res.status(StatusCodes.CREATED).send('user created')

}

const getUserController=async(req,res)=>{
    const Users=await getUser()
    res.status(StatusCodes.OK).send(Users)
}
const getUserBYIDController=async(req,res)=>{
    const id=req.params.id
    const User=await getBYIDUser(id)
    res.status(StatusCodes.OK).send(User)
}
const deleteUserController=async(req,res)=>{
    const id=req.params.id
    const user_to_delete=await deleteUser(id)
    if (!user_to_delete) {
        return res.status(StatusCodes.BAD_REQUEST).send('no user with this id')
    }
    res.status(StatusCodes.OK).send('deleted')
}


module.exports={addUserController,getUserController,getUserBYIDController,deleteUserController}