const {createPost,getPostController,getPostBYIDController,updatePostController,deletePostController}=require('../controllers/postController')
const postRoute=require('express').Router()

postRoute.route('/').post(createPost).get(getPostController)

postRoute.route('/:id').get(getPostBYIDController).patch(updatePostController).delete(deletePostController)

module.exports=postRoute
