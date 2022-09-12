const {addPost,getPost,getBYIDPost,updatePost,deletePost}=require('../services/postService')

const {StatusCodes}=require('http-status-codes')

const createPost=async(req,res)=>{
    const post=await addPost({...req.body});
    res.status(StatusCodes.CREATED).send('post created')
}
const getPostController=async(req,res)=>{
    const posts=await getPost()
    res.status(StatusCodes.OK).send(posts)
}
const getPostBYIDController=async(req,res)=>{
    const id=req.params.id
    const post=await getBYIDPost(id)
    res.status(StatusCodes.OK).send(post)
}
const updatePostController=async(req,res)=>{
    const id=req.params.id
    const post_to_update=await updatePost(req.body,id)
    if (!post_to_update) {
        return res.status(StatusCodes.BAD_REQUEST).send('no post with this id')
    }
    res.status(StatusCodes.OK).send(post_to_update,'updated')
}
const deletePostController=async(req,res)=>{
    const id=req.params.id
    const post_to_delete=await deletePost(id)
    if (!post_to_delete) {
        return res.status(StatusCodes.BAD_REQUEST).send('no post with this id')
    }
    res.status(StatusCodes.OK).send('deleted')
}

module.exports={createPost,getPostController,getPostBYIDController,updatePostController,deletePostController}