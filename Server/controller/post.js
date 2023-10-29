const User = require('../models/user')
const Post = require('../models/post');
const {uploadToCloudinary} = require('../utils/fileUploader.js');
require('dotenv').config();

exports.createPost = async(req, res) => {
    try{
        const {title, body} = req.body;
        let attachment = null;
        if(req.files){
            let {attachmentFile} = req.files;
            attachment = attachmentFile;
        }
        const user = req.user;
        
        if(!title || !body || !user){
            return res.status(400).json({
                success:false,
                message: "All fields are required"
            })
        }
        let attachmentUrl = "";
        if(attachment){
            //upload to cloudinary
            const uploadResponse = await uploadToCloudinary(attachment, process.env.POST_FOLDER);
            attachmentUrl = uploadResponse.secure_url;
        }
        const post = await Post.create({
            title,
            body,
            attachment:attachmentUrl,
            user:user.id
        })
        const userUpdated = await User.findByIdAndUpdate(user.id,{
            $push:{
                posts:post._id
            }
        },{
            new:true
        })
        return res.status(200).json({
            success:true,
            message:"Post created successfully",
            data:post
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Failed to create new post",
            error: err.message
        })
    }
    
}

exports.getAllPosts = async(req, res) => {
    try{
        const user = req.user;
        console.log('user:', user.id)
        const userPosts = await Post.find({user:user.id});
        return res.status(200).json({
            success:true,
            message:"All posts",
            data:userPosts
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Failed to get all posts",
            error: err.message
        })
    }
}

exports.deletePost = async(req, res) => {
    try{
        const{postId} = req.body;
        const user = req.user;
        if(!postId){
            return res.status(400).json({
                success:false,
                message:"Post id is required"
            })
        } 
        const post = await Post.findByIdAndDelete(postId);
        const updateUser = await User.findByIdAndUpdate(user._id,{
            $pull:{
                posts:postId
            }
        },{
            new:true
        })  
        return res.status(200).json({
            success:true,
            message:"Post deleted successfully",
            data:post
        })
        
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Failed to delete post",
            error: err.message
        })
        
    }

}


exports.getFeed = async(req, res) => {
    try{
        const post = await Post.find({}).populate('user');
        return res.status(200).json({
            success: true,
            message: "Successfully fetched  feed",
            data: post,
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Failed to fetch feed",
            error: err.message
        })
    }
}