const Comment = require('../models/comment')
const Post = require('../models/post');

exports.createComment = async(req, res) => {
    try{
        const {body, postId} = req.body;
        const user = req.user;
        console.log("user :",user);
        console.log("userID: ", user.id)
        if(!body || !postId || !user){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }
        const post = await Post.findById(postId);
        if(!post){
            return res.status(400).json({
                success:false,
                message:"Post does not exist"
            })
        }
        console.log("Before comment creation")
        const comment = await Comment.create({
            body,
            user:user.id,
            post:postId
        })
        console.log("After comment creation")
        const postUpdated = await Post.findByIdAndUpdate(postId,{
            $push:{
                comments:comment._id
            }
        },{
            new:true
        })
        return res.status(200).json({
            success:true,
            message:"Comment created successfully",
            data:postUpdated
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Failed to create new comment",
            error: err.message
        })
    }
}