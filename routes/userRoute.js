const {addUserController,getUserController,getUserBYIDController,deleteUserController}=require('../controllers/userController')

userRoute=require('express').Router()

userRoute.route('/').post(addUserController).get(getUserController)
userRoute.route('/:id').get(getUserBYIDController).delete(deleteUserController)